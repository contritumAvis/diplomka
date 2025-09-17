// import express from "express";
// import bcrypt from "bcryptjs";
// import jwt from "jsonwebtoken";
// import { PrismaClient } from "@prisma/client";

// const router = express.Router();
// const prisma = new PrismaClient();

// const JWT_SECRET = process.env.JWT_SECRET || "supersecret"; // замени на нормальный ключ

// // 📌 Регистрация
// router.post("/register", async (req, res) => {
//   const { name, email, password } = req.body;

//   if (!email || !password ) {
//     return res.status(400).json({ message: "Email, телефон и пароль обязательны" });
//   }

//   try {
//     const existingUser = await prisma.user.findUnique({ where: { email } });
//     if (existingUser) {
//       return res.status(400).json({ message: "Пользователь с таким email уже существует" });
//     }

//     const hashedPassword = await bcrypt.hash(password, 10);

//     const user = await prisma.user.create({
//       data: { name, email, password: hashedPassword },
//     });

//     res.status(201).json({ message: "Регистрация успешна", user: { id: user.id, email: user.email } });
//   } catch (err) {
//     res.status(500).json({ message: "Ошибка сервера", error: err });
//   }
// });

// // 📌 Логин
// router.post("/login", async (req, res) => {
//   const { email, password } = req.body;

//   try {
//     const user = await prisma.user.findUnique({ where: { email } });
//     if (!user || !user.password) {
//       return res.status(400).json({ message: "Неверный email или пароль" });
//     }

//     const isValid = await bcrypt.compare(password, user.password);
//     if (!isValid) {
//       return res.status(400).json({ message: "Неверный email или пароль" });
//     }

//     const token = jwt.sign({ userId: user.id }, JWT_SECRET, { expiresIn: "7d" });

//     res.json({ message: "Успешный вход", token, user: { id: user.id, email: user.email } });
//   } catch (err) {
//     res.status(500).json({ message: "Ошибка сервера", error: err });
//   }
// });

// export default router;

import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { PrismaClient } from "@prisma/client";

const router = express.Router();
const prisma = new PrismaClient();

const JWT_SECRET = process.env.JWT_SECRET || "supersecret"; // ⚠️ лучше в .env

// 📌 Регистрация
router.post("/register", async (req, res) => {
  const { name, email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "Email и пароль обязательны" });
  }

  try {
    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (existingUser) {
      return res.status(400).json({ message: "Пользователь с таким email уже существует" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
      data: { name, email, password: hashedPassword },
    });

    res.status(201).json({
      message: "Регистрация успешна",
      user: { id: user.id, email: user.email, name: user.name },
    });
  } catch (err) {
    res.status(500).json({ message: "Ошибка сервера", error: err });
  }
});

// 📌 Логин
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user || !user.password) {
      return res.status(400).json({ message: "Неверный email или пароль" });
    }

    const isValid = await bcrypt.compare(password, user.password);
    if (!isValid) {
      return res.status(400).json({ message: "Неверный email или пароль" });
    }

    const token = jwt.sign({ userId: user.id }, JWT_SECRET, { expiresIn: "7d" });

    res.json({
      message: "Успешный вход",
      token,
      user: { id: user.id, email: user.email, name: user.name },
    });
  } catch (err) {
    res.status(500).json({ message: "Ошибка сервера", error: err });
  }
});

export default router;
