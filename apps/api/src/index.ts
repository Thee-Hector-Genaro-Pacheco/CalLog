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

app.get("/", (_req, res) => {
  res.send("CalLog API is running. Try /healthz (and later /graphql).");
});

app.listen(env.PORT, () => {
    console.log(`[api] http://localhost:${env.PORT}`);
});
