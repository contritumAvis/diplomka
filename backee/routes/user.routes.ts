import express from 'express'
// import { getUsers, createUser } from '../controllers/user.controller'
import { registerUser } from '../controllers/user.controller'

const router = express.Router()

// router.get('/', getUsers)
// router.post('/', createUser)
router.post('/register', registerUser)


export default router

// import express from "express";
// import { registerUser, loginUser, refreshToken, me } from "../controllers/user.controller";
// import { authMiddleware } from "../middlewares/auth";

// const router = express.Router();

// router.post("/register", registerUser); // public
// router.post("/login", loginUser);       // public
// router.post("/refresh", refreshToken);  // public
// router.get("/me", authMiddleware, me);  // protected

// export default router;