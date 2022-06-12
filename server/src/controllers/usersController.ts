import User from "models/users";
import { Request, Response } from "express";
import bcrypt from "bcrypt";

export const login = async (req: Request, res: Response) => {
    const body = req.body;
    try {
        const user = await User.findOne({ email: body.email });
        if (await bcrypt.compare(body.password, user.password)) {
            res.json(user);
        } else {
            res.status(401).json({ message: "Invalid Credentials" });
        }
    } catch (error) {
        console.error(error);
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
