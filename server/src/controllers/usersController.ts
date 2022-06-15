import bcrypt from "bcrypt";
import { Request, Response } from "express";

import User from "src/models/users";

export const fetchMe = async (req: Request, res: Response) => {
    const body = req.body;
    try {
        const user = await User.findOne({ email: body.email });
        return user
            ? res.status(200).json(user)
            : res.status(401).json({ message: "Invalid Credentials" });
    } catch (error) {
        res.json({ message: error });
    }
};

export const login = async (req: Request, res: Response) => {
    const body = req.body;
    try {
        const user = await User.findOne({ email: body.email });
        if (user && (await bcrypt.compare(body.password, user.password))) {
            res.status(200).json(user);
        } else {
            res.status(401).json({ message: "Invalid Credentials" });
        }
    } catch (error) {
        res.json({ message: error });
    }
};

export const signup = async (req: Request, res: Response) => {
    const body = req.body;
    const user = new User(body);

    const salt = await bcrypt.genSalt(10);

    user.password = await bcrypt.hash(user.password, salt);

    try {
        const savedUser = await user.save();
        res.json(savedUser);
    } catch (error) {
        console.error(error);
        res.json({ message: error });
    }
};
