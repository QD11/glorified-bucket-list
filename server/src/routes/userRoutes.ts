import { fetchMe, login, signup } from "controllers/usersController";
import { Router } from "express";

const router = Router();

router.post("/fetchMe", fetchMe);
router.post("/login", login);
router.post("/signup", signup);

export default router;
