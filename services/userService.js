import pool from '../db/db.js';

export const getAllUsers = async () => {
    const result = await pool.query('SELECT id_user, nombre FROM users');
    return result.rows;
};