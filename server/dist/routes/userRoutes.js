"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const usersController_1 = require("controllers/usersController");
const express_1 = require("express");
const router = (0, express_1.Router)();
router.post("/fetchMe", usersController_1.fetchMe);
router.post("/login", usersController_1.login);
router.post("/signup", usersController_1.signup);
exports.default = router;
