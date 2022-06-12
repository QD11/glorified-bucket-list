import { Schema, model } from "mongoose";

const userSchema = new Schema(
    {
        _id: Schema.Types.ObjectId,
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
