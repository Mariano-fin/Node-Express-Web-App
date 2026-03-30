import { getAllUsers } from "../services/userService.js"

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