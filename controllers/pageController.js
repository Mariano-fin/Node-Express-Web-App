import { getAllUsers, getAllUsersORM, getUsersWithPeliculas, updateUser, deleteUser, createUserWithLog } from "../services/userService.js";
import { sendResponse } from "../utils/response.js";

export const statusController = (req, res) => {
    sendResponse(res, 200, "Servidor funcionando correctamente");
};

export const principal = (req, res) => {
    res.send("<h1>Sistema de gestión de usuarios</h1>");
};

export const getUsers = async (req, res) => {
    try {
        const usuarios = await getAllUsers();
        sendResponse(res, 200, "Directores obtenidos correctamente", usuarios);
    } catch (err) {
        console.error("Error al obtener usuarios:", err);
        sendResponse(res, 500, "Error al obtener directores");
    }
};

export const getUsersORM = async (req, res) => {
    try {
        const usuarios = await getAllUsersORM();
        sendResponse(res, 200, "Directores obtenidos con ORM", usuarios);
    } catch (err) {
        console.error("Error al obtener usuarios con ORM:", err);
        sendResponse(res, 500, "Error al obtener directores");
    }
};

export const getUsersWithPeliculasController = async (req, res) => {
    try {
        const usuarios = await getUsersWithPeliculas();
        sendResponse(res, 200, "Directores con películas obtenidos correctamente", usuarios);
    } catch (err) {
        console.error("Error al obtener usuarios con películas:", err);
        sendResponse(res, 500, "Error al obtener datos");
    }
};

export const createUserController = async (req, res) => {
    try {
        const { nombre, email, saldo } = req.body;
        const usuario = await createUserWithLog(nombre, email, saldo);
        sendResponse(res, 201, "Director creado correctamente", usuario);
    } catch (err) {
        console.error("Error en transacción:", err);
        sendResponse(res, 500, "Error al crear director");
    }
};

export const updateUserController = async (req, res) => {
    try {
        const { id } = req.params;
        const { nombre } = req.body;
        const usuario = await updateUser(id, nombre);
        if (!usuario) return sendResponse(res, 404, "Director no encontrado");
        sendResponse(res, 200, "Director actualizado correctamente", usuario);
    } catch (err) {
        console.error("Error al actualizar usuario:", err);
        sendResponse(res, 500, "Error al actualizar director");
    }
};

export const deleteUserController = async (req, res) => {
    try {
        const { id } = req.params;
        const usuario = await deleteUser(id);
        if (!usuario) return sendResponse(res, 404, "Director no encontrado");
        sendResponse(res, 200, "Director eliminado correctamente", usuario);
    } catch (err) {
        console.error("Error al eliminar usuario:", err);
        sendResponse(res, 500, "Error al eliminar director");
    }
};

export const uploadFile = (req, res) => {
    if (!req.file) return sendResponse(res, 400, "No se recibió ningún archivo");
    sendResponse(res, 200, "Archivo subido correctamente", {
        filename: req.file.filename,
        path: `/uploads/${req.file.filename}`
    });
};