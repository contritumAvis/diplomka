// // backee/middlewares/auth.ts
// import { Request, Response, NextFunction } from "express";
// import jwt from "jsonwebtoken";

// const JWT_SECRET = process.env.JWT_SECRET as string;

// interface JwtPayload {
//   id: string;
//   role: string;
//   iat?: number;
//   exp?: number;
// }

// export function authMiddleware(req: Request, res: Response, next: NextFunction) {
//   try {
//     const header = req.headers.authorization;
//     if (!header) return res.status(401).json({ message: "No authorization header" });

//     const [scheme, token] = header.split(" ");
//     if (scheme !== "Bearer" || !token) return res.status(401).json({ message: "Invalid authorization header" });

//     const payload = jwt.verify(token, JWT_SECRET) as JwtPayload;
//     req.user = { id: payload.id, role: payload.role };
//     return next();
//   } catch (err) {
//     return res.status(401).json({ message: "Unauthorized", error: String(err) });
//   }
// }

// export function isAdmin(req: Request, res: Response, next: NextFunction) {
//   if (!req.user) return res.status(401).json({ message: "Unauthorized" });
//   if (req.user.role !== "admin") return res.status(403).json({ message: "Admins only" });
//   next();
// }
