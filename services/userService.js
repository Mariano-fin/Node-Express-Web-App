import pool from '../db/db.js';

export const getAllUsers = async () => {
    const result = await pool.query('SELECT id_user, nombre FROM users');
    return result.rows;
};

export const updateUser = async (id, nombre) => {
    const result = await pool.query(
        'UPDATE usuarios SET nombre = $1 WHERE id_user = $2 RETURNING *',
        [nombre, id]
    );
    return result.rows[0];
};

export const deleteUser = async (id) => {
    const result = await pool.query(
        'DELETE FROM usuarios WHERE id_user = $1 RETURNING *',
        [id]
    );
    return result.rows[0];
};