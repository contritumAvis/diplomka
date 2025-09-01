// import express, { Application } from 'express'
// import dotenv from 'dotenv'
// import userRoutes from './routes/user.routes'

// dotenv.config()

// const app: Application = express()
// const PORT = process.env.PORT || 5000

// app.use(express.json())

// app.use('/api/users', userRoutes)

// app.listen(PORT, () => {
//   console.log(`\u{1F680} Server is running on port ${PORT}`)
// })

// import dotenv from 'dotenv';
// dotenv.config({ path: __dirname + "/.env" }); // подключаем раньше всего
// console.log("CLOUDINARY_CLOUD_NAME:", process.env.CLOUDINARY_CLOUD_NAME);
// import express from 'express';
// import cors from 'cors';

// import uploadRoutes from './routes/upload';
// import authRoutes from './routes/user.routes';
// import productRoutes from './routes/product.routes';
// import brandRoutes from "./routes/brand.routes";
// import categoryRoutes from "./routes/category.routes";


// const app = express();
// const PORT = process.env.PORT || 5000;

// // CORS
// app.use(cors({
//   origin: 'http://localhost:3000',
//   credentials: true
// }));

// app.use(express.json());

// // Роуты
// app.use('/api/upload', uploadRoutes);
// app.use('/api', authRoutes);
// app.use('/api/products', productRoutes);
// app.use("/api", brandRoutes);
// app.use("/api", categoryRoutes);

// app.listen(PORT, () => {
//   console.log(`🚀 Server is running on http://localhost:${PORT}`);
// });

import path from "path";
import dotenv from "dotenv";

// Загружаем переменные окружения из .env (файл в корне backee)
dotenv.config({ path: path.resolve(__dirname, ".env") });

console.log("✅ CLOUDINARY_CLOUD_NAME:", process.env.CLOUDINARY_CLOUD_NAME);

import express from "express";
import cors from "cors";

import uploadRoutes from "./routes/upload";
import authRoutes from "./routes/user.routes";
import productRoutes from "./routes/product.routes";
import brandRoutes from "./routes/brand.routes";
import categoryRoutes from "./routes/category.routes";

const app = express();
const PORT = process.env.PORT || 5000;

// --- CORS ---
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

// --- Middleware ---
app.use(express.json());

// --- Роуты ---
app.use("/api/upload", uploadRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/products", productRoutes);
app.use("/api/brands", brandRoutes);
app.use("/api/categories", categoryRoutes);

// --- Запуск ---
app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
