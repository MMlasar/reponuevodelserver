import express from "express";
import cors from "cors";
import pg from "pg";
import { FRONTEND_URL, PORT, DB_HOST, DB_PORT, DB_DATABASE, DB_USER, DB_PASSWORD } from "./config.js";

const app = express();
app.use(cors({ origin: FRONTEND_URL }));

const pool = new pg.Pool({
    host: DB_HOST,
    database: DB_DATABASE,
    user: DB_USER,
    password: DB_PASSWORD,
    port: DB_PORT,
});

app.use(
    cors({
        origin: FRONTEND_URL,
    })
);

app.get("/ping", async (req, res) => {
    try {
        const result = await pool.query("SELECT NOW()");
        res.send({
            PONG: result.rows[0].now
        });
    } catch (err) {
        console.error(err);
        res.status(500).send("Server error");
    }
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
