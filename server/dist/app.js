"use strict";
var __importDefault =
    (this && this.__importDefault) ||
    function (mod) {
        return mod && mod.__esModule ? mod : { default: mod };
    };
Object.defineProperty(exports, "__esModule", { value: true });
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
require("dotenv/config");
const express_1 = __importDefault(require("express"));
const mongoose_1 = require("mongoose");
const userRoutes_1 = __importDefault(require("./userRoutes/userRoutes"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(body_parser_1.default.json());
if (process.env.DB_CONNECTION) {
    (0, mongoose_1.connect)(process.env.DB_CONNECTION, {
        useUnifiedTopology: true,
        useNewUrlParser: true,
    }).then(
        () => {
            console.log("Database connection established");
        },
        (err) => {
            console.error(err);
        }
    );
}
app.use("/users", userRoutes_1.default);
app.get("/", (req, res) => {
    res.json({ message: "Welcome" }).status(200).end();
});
const url = process.env.PORT || 4000;
app.listen(url, () => {
    console.log("Your app is listening on http://localhost:" + url);
});
