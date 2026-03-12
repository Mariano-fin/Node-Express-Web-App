import { principal, statusController } from "../controllers/pageController.js";
import { Router } from "express";

const router = Router()

router.get("/status", statusController)
router.get("/", principal)

export default router