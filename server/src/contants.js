import dotenv from "dotenv";

dotenv.config();

export const MONGODB_URL = process.env.MONGODB_URL;
export const PORT = process.env.PORT;
export const ADMIN_EMAIL = process.env.ADMIN_EMAIL;
export const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD