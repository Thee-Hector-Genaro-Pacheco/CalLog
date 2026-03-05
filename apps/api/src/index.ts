import express from "express";
import cors from "cors";
import { graphql } from "graphql";
import { ruruHTML } from "ruru/server";

import { env } from "./config/env";
import { schema } from "./graphql/schema";
import { rootValue } from "./graphql/root";

const app = express();

app.use(
    cors({
        origin: env.CORS_ORIGIN,
        credentials: true,
    })
);

app.use(express.json());

// Friendly root message (optional but nice)
app.get("/", (_req, res) => {
    res.send("CalLog API is running. Try /healthz and /graphql");
});

app.get("/healthz", (_req, res) => res.json({ ok: true }));

app.get("/graphql", (_req, res) => {
    res.type("html").send(ruruHTML({ endpoint: "/graphql" }));
});

app.post("/graphql", async (req, res) => {
    const { query, variables, operationName } = req.body ?? {};

    if (!query) {
        return res.status(400).json({ error: "Missing GraphQL query" });
    }

    const result = await graphql({
        schema,
        source: query,
        rootValue,
        variableValues: variables,
        operationName,
    });

    // GraphQL returns 200 even on resolver errors (normal behavior)
    return res.json(result);
});

app.listen(env.PORT, () => {
    console.log(`[api] http://localhost:${env.PORT}`);
    console.log(`[api] health http://localhost:${env.PORT}/healthz`);
    console.log(`[api] graphql POST http://localhost:${env.PORT}/graphql`);
});
