import express from "express";
import http from "http";
import { json } from "body-parser";
import { connect, ConnectOptions } from "mongoose";
import "dotenv/config";
import cors from "cors";
import { Server } from "socket.io";

import usersRoutes from "./src/routes/userRoutes";

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: "*",
    },
});

app.use(cors());
app.use(json());

if (process.env.DB_CONNECTION) {
    connect(process.env.DB_CONNECTION, {
        useUnifiedTopology: true,
        useNewUrlParser: true,
    } as ConnectOptions).then(
        () => {
            console.log("Database connection established");
        },
        (err) => {
            console.error(err);
        }
    );
}

app.use("/users", usersRoutes);

app.get("/", (req, res) => {
    res.json({ message: "Welcome" }).status(200).end();
});

const url = process.env.PORT || 4000;
app.listen(url, () => {
    console.log("Your app is listening on http://localhost:" + url);
});
