import { Router } from "express";
import { login, signup } from "controllers/usersController";

const router = Router();

router.post("/login", login);
router.post("/", signup);

export default router;
