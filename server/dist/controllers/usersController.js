"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.signup = exports.login = exports.fetchMe = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const users_1 = __importDefault(require("models/users"));
const fetchMe = async (req, res) => {
    const body = req.body;
    try {
        const user = await users_1.default.findOne({ email: body.email });
        return user
            ? res.status(200).json(user)
            : res.status(401).json({ message: "Invalid Credentials" });
    }
    catch (error) {
        res.json({ message: error });
    }
};
exports.fetchMe = fetchMe;
const login = async (req, res) => {
    const body = req.body;
    try {
        const user = await users_1.default.findOne({ email: body.email });
        if (user && (await bcrypt_1.default.compare(body.password, user.password))) {
            res.status(200).json(user);
        }
        else {
            res.status(401).json({ message: "Invalid Credentials" });
        }
    }
    catch (error) {
        res.json({ message: error });
    }
};
exports.login = login;
const signup = async (req, res) => {
    const body = req.body;
    const user = new users_1.default(body);
    const salt = await bcrypt_1.default.genSalt(10);
    user.password = await bcrypt_1.default.hash(user.password, salt);
    try {
        const savedUser = await user.save();
        res.json(savedUser);
    }
    catch (error) {
        console.error(error);
        res.json({ message: error });
    }
};
exports.signup = signup;
