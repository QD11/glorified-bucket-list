import { Schema, model } from "mongoose";

const userSchema = new Schema(
    {
        email: String,
        firstName: String,
        lastName: String,
        password: String,
    },
    {
        collection: "users",
        timestamps: true,
    }
);

export default model("Users", userSchema);
