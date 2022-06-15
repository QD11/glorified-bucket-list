import { Router } from "express";

import { fetchMe, login, signup } from "src/controllers/usersController";

const router = Router();

router.post("/fetchMe", fetchMe);
router.post("/login", login);
router.post("/signup", signup);

export default router;
