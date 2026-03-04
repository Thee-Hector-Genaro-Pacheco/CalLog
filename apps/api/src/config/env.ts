import dotenv from "dotenv";
dotenv.config();

export const env = {
    PORT: process.env.PORT ? Number(process.env.PORT) : 4000,
    CORS_ORIGIN: process.env.CORS_ORIGIN ?? "http://localhost:3000",
    MONGODB_URI: process.env.MONGODB_URI ?? ""
};
