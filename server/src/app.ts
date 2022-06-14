import cors from "cors";
import "dotenv/config";
import { connect, ConnectOptions } from "mongoose";
import usersRoutes from "routes/userRoutes";
import express = require("express");

const bodyParser = require("body-parser");

const app = express();

app.use(cors());
app.use(bodyParser.json());

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

app.get("/", (req: express.Request, res: express.Response) => {
    res.json({ message: "Welcome" }).status(200).end();
});

const url = process.env.PORT || 4000;
app.listen(url, () => {
    console.log("Your app is listening on http://localhost:" + url);
});
