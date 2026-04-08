import { principal, statusController, getUsers, updateUserController, deleteUserController } from "../controllers/pageController.js";
import { Router } from "express";


const router = Router()

router.get("/status", statusController)
router.get("/", principal)
router.get("/usuarios", getUsers)

export default router

router.put("/usuarios/:id", updateUserController)
router.delete("/usuarios/:id", deleteUserController)