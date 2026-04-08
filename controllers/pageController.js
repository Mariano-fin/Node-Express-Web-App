import { getAllUsers, getAllUsersORM, getUsersWithPeliculas, updateUser, deleteUser, createUserWithLog } from "../services/userService.js"

export const statusController = (req, res) => {
    res.json({ status : "ok" })
}
 
export const principal = (req, res) => {
    res.send("<h1>Sistema de gestión de usuarios</h1>")
}

export const getUsers = async (req, res) => {
      try {
        const usuarios = await getAllUsers();
        res.json({ usuarios });
      } catch (err) {
        console.error("Error al obtener usuarios:", err);
        res.status(500).json({error: "Error al obtener usuarios"})
      }
};

export const updateUserController = async (req, res) => {
    try {
        const { id } = req.params;
        const { nombre } = req.body;
        const usuario = await updateUser(id, nombre);
        if (!usuario) return res.status(404).json({ error: "Usuario no encontrado" });
        res.json({ message: "Usuario actualizado", usuario });
    } catch (err) {
        console.error("Error al actualizar usuario:", err);
        res.status(500).json({ error: "Error al actualizar usuario" });
    }
};

export const deleteUserController = async (req, res) => {
    try {
        const { id } = req.params;
        const usuario = await deleteUser(id);
        if (!usuario) return res.status(404).json({ error: "Usuario no encontrado" });
        res.json({ message: "Usuario eliminado", usuario });
    } catch (err) {
        console.error("Error al eliminar usuario:", err);
        res.status(500).json({ error: "Error al eliminar usuario" });
    }
};

export const createUserController = async (req, res) => {
    try {
        const { nombre, email, saldo } = req.body;
        const usuario = await createUserWithLog(nombre, email, saldo);
        res.status(201).json({ message: "Usuario creado con log", usuario });
    } catch (err) {
        console.error("Error en transacción:", err);
        res.status(500).json({ error: "Error al crear usuario" });
    }
};

export const getUsersORM = async (req, res) => {
    try {
        const usuarios = await getAllUsersORM();
        res.json({ usuarios });
    } catch (err) {
        console.error("Error al obtener usuarios con ORM:", err);
        res.status(500).json({ error: "Error al obtener usuarios" });
    }
};



export const getUsersWithPeliculasController = async (req, res) => {
    try {
        const usuarios = await getUsersWithPeliculas();
        res.json({ usuarios });
    } catch (err) {
        console.error("Error al obtener usuarios con películas:", err);
        res.status(500).json({ error: "Error al obtener datos" });
    }
};