import pool from '../db/db.js';
import { User, Pelicula } from '../models/index.js';

export const getAllUsers = async () => {
    const result = await pool.query('SELECT id_user, nombre FROM users');
    return result.rows;
};

export const updateUser = async (id, nombre) => {
    const result = await pool.query(
        'UPDATE users SET nombre = $1 WHERE id_user = $2 RETURNING *',
        [nombre, id]
    );
    return result.rows[0];
};

export const deleteUser = async (id) => {
    const result = await pool.query(
        'DELETE FROM users WHERE id_user = $1 RETURNING *',
        [id]
    );
    return result.rows[0];
};

export const createUserWithLog = async (nombre, email, saldo) => {
    const client = await pool.connect();
    try {
        await client.query('BEGIN');
        
        const userResult = await client.query(
            'INSERT INTO users (nombre, email, saldo) VALUES ($1, $2, $3) RETURNING *',
            [nombre, email, saldo]
        );
        const nuevoUsuario = userResult.rows[0];

        await client.query(
            'INSERT INTO user_logs (id_user, evento) VALUES ($1, $2)',      
            [nuevoUsuario.id_user, 'Usuario creado']
        );

        await client.query('COMMIT');
        console.log('✅ Transacción completada');
        return nuevoUsuario;

    } catch (err) {
        await client.query('ROLLBACK');
        console.error('❌ Rollback ejecutado:', err.message);
        throw err;
    } finally {
        client.release();
    }
};


export const getAllUsersORM = async () => {
    return await User.findAll({
        attributes: ['id_user', 'nombre']
    });
};

export const getUsersWithPeliculas = async () => {
    return await User.findAll({
        attributes: ['id_user', 'nombre'],
        include: [{
            model: Pelicula,
            attributes: ['titulo', 'anio']
        }]
    });
};

