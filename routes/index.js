import { principal, statusController, getUsers } from "../controllers/pageController.js";
import { Router } from "express";


const router = Router()

router.get("/status", statusController)
router.get("/", principal)
router.get("/usuarios", getUsers)

export default router