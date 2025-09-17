// import express from 'express'
// // import { getUsers, createUser } from '../controllers/user.controller'
// import { registerUser } from '../controllers/auth.controller'

// const router = express.Router()

// // router.get('/', getUsers)
// // router.post('/', createUser)
// router.post('/register', registerUser)


// export default router

// routes/auth.routes.ts
import express from "express";
import { registerUser, loginUser } from "../controllers/auth.controller";

const router = express.Router();

// 📌 Регистрация
router.post("/register", registerUser);

// 📌 Логин
router.post("/login", loginUser);

export default router;

// import express from "express";
// import { registerUser, loginUser, refreshToken, me } from "../controllers/user.controller";
// import { authMiddleware } from "../middlewares/auth";

// const router = express.Router();

// router.post("/register", registerUser); // public
// router.post("/login", loginUser);       // public
// router.post("/refresh", refreshToken);  // public
// router.get("/me", authMiddleware, me);  // protected

// export default router;