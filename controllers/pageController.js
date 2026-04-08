import { getAllUsers, updateUser, deleteUser } from "../services/userService.js"

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