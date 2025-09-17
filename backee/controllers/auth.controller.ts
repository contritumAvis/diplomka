// // controllers/auth.controller.ts
// import { Request, Response } from 'express'
// import { PrismaClient } from '@prisma/client'
// import bcrypt from 'bcrypt'

// const prisma = new PrismaClient()

// export const registerUser = async (req: Request, res: Response) => {
//   const { name, email, password } = req.body

//   try {
//     const existingUser = await prisma.user.findUnique({ where: { email } })

//     if (existingUser) {
//       return res.status(400).json({ message: 'User already exists' })
//     }

//     const hashedPassword = await bcrypt.hash(password, 10)

//     const user = await prisma.user.create({
//       data: {
//         name,
//         email,
//         password: hashedPassword,
//         role: 'client', 
//       },
//     })

//     return res.status(201).json({ message: 'User created', user })
//   } catch (error) {
//     console.error(error)
//     return res.status(500).json({ message: 'Internal Server Error' })
//   }
// }

import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const prisma = new PrismaClient();
const JWT_SECRET = process.env.JWT_SECRET || "supersecret"; // ⚠️ лучше вынести в .env

// 📌 Регистрация
export const registerUser = async (req: Request, res: Response) => {
  const { name, email, password, } = req.body;
  try {
    // Проверка email
    const existingEmail = await prisma.user.findUnique({ where: { email } });
    if (existingEmail) {
      return res.status(400).json({ message: "Email already in use" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
       
        role: "client",
      },
    });

    return res.status(201).json({
      message: "User created",
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
      
      },
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

// 📌 Логин
export const loginUser = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  try {
    const user = await prisma.user.findUnique({ where: { email } });

    if (!user || !user.password) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    // создаём JWT
    const token = jwt.sign({ userId: user.id }, JWT_SECRET, { expiresIn: "7d" });

    return res.json({
      message: "Login successful",
      token,
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
  
      },
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};


// backee/controllers/user.controller.ts
// import { Request, Response } from "express";
// import prisma from "../prisma"; 
// import bcrypt from "bcryptjs";
// import jwt from "jsonwebtoken";

// const JWT_SECRET = process.env.JWT_SECRET as string;
// const JWT_REFRESH_SECRET = process.env.JWT_REFRESH_SECRET as string;

// function signAccessToken(payload: { id: string; role: string }) {
//   return jwt.sign(payload, JWT_SECRET, { expiresIn: "15m" });
// }
// function signRefreshToken(payload: { id: string; role: string }) {
//   return jwt.sign(payload, JWT_REFRESH_SECRET, { expiresIn: "7d" });
// }

// export const registerUser = async (req: Request, res: Response) => {
//   try {
//     const { email, password, name, role } = req.body;
//     if (!email || !password) return res.status(400).json({ message: "Email and password required" });

//     const existing = await prisma.user.findUnique({ where: { email } });
//     if (existing) return res.status(400).json({ message: "User already exists" });

//     const hashed = await bcrypt.hash(password, 10);
//     const user = await prisma.user.create({
//       data: {
//         email,
//         password: hashed,
//         name: name ?? null,
//         role: role === "admin" ? "admin" : "client",
//       },
//       select: { id: true, email: true, name: true, role: true },
//     });

//     return res.status(201).json({ message: "Registered", user });
//   } catch (e) {
//     return res.status(500).json({ message: "Registration failed", error: String(e) });
//   }
// };

// export const loginUser = async (req: Request, res: Response) => {
//   try {
//     const { email, password } = req.body;
//     if (!email || !password) return res.status(400).json({ message: "Email and password required" });

//     const user = await prisma.user.findUnique({ where: { email } });
//     if (!user) return res.status(400).json({ message: "Invalid credentials" });
//     if (!user.password) return res.status(400).json({ message: "Password login not available for this account" });

//     const valid = await bcrypt.compare(password, user.password);
//     if (!valid) return res.status(400).json({ message: "Invalid credentials" });

//     const accessToken = signAccessToken({ id: user.id, role: user.role });
//     const refreshToken = signRefreshToken({ id: user.id, role: user.role });

//     return res.json({
//       accessToken,
//       refreshToken,
//       user: { id: user.id, email: user.email, name: user.name, role: user.role },
//     });
//   } catch (e) {
//     return res.status(500).json({ message: "Login failed", error: String(e) });
//   }
// };

// export const refreshToken = async (req: Request, res: Response) => {
//   try {
//     const { token } = req.body;
//     if (!token) return res.status(400).json({ message: "Refresh token required" });

//     const decoded = jwt.verify(token, JWT_REFRESH_SECRET) as { id: string; role: string };
//     const accessToken = signAccessToken({ id: decoded.id, role: decoded.role });
//     const refresh = signRefreshToken({ id: decoded.id, role: decoded.role });

//     return res.json({ accessToken, refreshToken: refresh });
//   } catch (e) {
//     return res.status(401).json({ message: "Invalid refresh token", error: String(e) });
//   }
// };

// export const me = async (req: Request, res: Response) => {
//   try {
//     if (!req.user) return res.status(401).json({ message: "Unauthorized" });
//     const user = await prisma.user.findUnique({
//       where: { id: req.user.id },
//       select: { id: true, email: true, name: true, role: true, createdAt: true },
//     });
//     return res.json({ user });
//   } catch (e) {
//     return res.status(500).json({ message: "Failed to get user", error: String(e) });
//   }
// };
