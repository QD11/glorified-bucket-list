"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const userSchema = new mongoose_1.Schema({
    email: String,
    firstName: String,
    lastName: String,
    password: String,
}, {
    collection: "users",
    timestamps: true,
});
exports.default = (0, mongoose_1.model)("Users", userSchema);
