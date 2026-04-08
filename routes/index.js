import { principal, statusController, getUsers, updateUserController, deleteUserController, createUserController, getUsersORM, getUsersWithPeliculasController } from "../controllers/pageController.js";
import { Router } from "express";


const router = Router()

router.get("/status", statusController)
router.get("/", principal)
router.get("/usuarios", getUsers)

export default router

router.put("/usuarios/:id", updateUserController)
router.delete("/usuarios/:id", deleteUserController)
router.get("/usuarios/orm", getUsersORM)
router.post("/usuarios", createUserController)
router.get("/usuarios/peliculas", getUsersWithPeliculasController)