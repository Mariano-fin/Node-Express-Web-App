import { principal, statusController, getUsers, updateUserController, deleteUserController, createUserController, getUsersORM, getUsersWithPeliculasController, uploadFile } from "../controllers/pageController.js";
import upload from '../middlewares/upload.js';
import { Router } from "express";


const router = Router()

export default router

router.get("/status", statusController)
router.get("/", principal)
router.get("/usuarios", getUsers)
router.get("/usuarios/orm", getUsersORM)
router.get("/usuarios/peliculas", getUsersWithPeliculasController)

router.put("/usuarios/:id", updateUserController)
router.delete("/usuarios/:id", deleteUserController)

router.post("/usuarios", createUserController)
router.post('/upload', upload.single('archivo'), uploadFile)