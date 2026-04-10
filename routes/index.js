import { principal, statusController, getUsers, updateUserController, deleteUserController, login, createUserController, getUsersORM, getUsersWithPeliculasController, uploadFile } from "../controllers/pageController.js";
import upload from '../middlewares/upload.js';
import { Router } from "express";
import { verifyToken } from '../middlewares/authMiddleware.js';


const router = Router()

export default router

router.get("/status", statusController)
router.get("/", principal)
router.get("/usuarios", getUsers)
router.get("/usuarios/orm", getUsersORM)
router.get("/usuarios/peliculas", getUsersWithPeliculasController)

router.put('/usuarios/:id', verifyToken, updateUserController)
router.delete('/usuarios/:id', verifyToken, deleteUserController)

router.post('/usuarios', verifyToken, createUserController)
router.post('/upload', verifyToken, upload.single('archivo'), uploadFile)

router.post('/login', login)



