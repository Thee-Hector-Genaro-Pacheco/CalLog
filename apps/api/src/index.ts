import express from "express";
import cors from "cors";
import { env } from "./config/env";

const app = express();

app.use(
    cors({
        origin: env.CORS_ORIGIN,
        credentials: true
    })
);

app.use(express.json());

app.get("/healthz", (_req, res) => res.json({ ok: true }));

app.listen(env.PORT, () => {
    console.log(`[api] http://localhost:${env.PORT}`);
});
