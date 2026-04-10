import jwt from 'jsonwebtoken';
import { sendResponse } from '../utils/response.js';

export const verifyToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) return sendResponse(res, 401, "Acceso denegado. Token no proporcionado");

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch (err) {
        return sendResponse(res, 403, "Token inválido o expirado");
    }
};