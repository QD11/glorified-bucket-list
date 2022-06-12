import { Schema, model } from "mongoose";

const userSchema = new Schema(
    {
        _id: Schema.Types.ObjectId,
        userName: String,
        firstName: String,
        lastName: String,
        password: String,
    },
    {
        collection: "players",
        timestamps: true,
    }
);

export default model("Users", userSchema);
