import { principal, statusController } from "../controllers/pageController.js";
import { Router } from "express";
import { getUsers } from "./controllers/pageController.js";

const router = Router()

router.get("/status", statusController)
router.get("/", principal)
router.get("/usuarios", getUsers)

export default router