import express from "express";
import { createServer } from "http";
import { urlencoded, json } from "body-parser";
import { connect, ConnectOptions } from "mongoose";
import "dotenv/config";

import usersRoutes from "routes/userRoutes";

const app = express();
const server = createServer(app);
app.use(json());
app.use(urlencoded({ extended: true }));

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
