import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import cors from 'cors';
import authRoutes from './routes/authRoutes.js';
import entryRoutes from "./routes/entryRoutes.js"
import { PrismaClient } from '@prisma/client';

const app = express();
const prisma = new PrismaClient();

console.log("Open to requests from", process.env.CORS_ORIGIN)

app.use(cors({
  origin: process.env.CORS_ORIGIN,
  credentials: true,
}));

app.use(express.json());

app.use("/api/pin", authRoutes);
app.use("/api/entry", entryRoutes);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Internal Server Error' });
});

(async () => {
  try {
    await prisma.$connect();
    console.log("Connected to database");
  } catch (error) {
    console.error("Error connecting to the database", error);
  }
})();

export default app;
