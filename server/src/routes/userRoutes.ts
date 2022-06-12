import { login, signup } from "controllers/usersController";
import { Router } from "express";

const router = Router();

router.post("/login", login);
router.post("/", signup);

export default router;
