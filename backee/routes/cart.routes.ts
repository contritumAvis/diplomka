// import express from "express";
// import {
//   addToCart,
//   getCart,
//   updateCartItem,
//   removeFromCart,
// } from "../controllers/cart.controller";

// const router = express.Router();

// router.post("/", addToCart);          // POST /api/cart
// router.get("/", getCart);             // GET /api/cart?userId=xxx
// router.patch("/:id", updateCartItem); // PATCH /api/cart/:id
// router.delete("/:id", removeFromCart);// DELETE /api/cart/:id

// export default router;

import express from "express";
import {
  addToCart,
  getCart,
  updateCartItem,
  removeFromCart,
} from "../controllers/cart.controller";
import { authMiddleware } from "../middlewares/auth";

const router = express.Router();

// 👇 добавляем защиту токеном
router.post("/", authMiddleware, addToCart);          // POST /api/cart
router.get("/", authMiddleware, getCart);             // GET /api/cart
router.patch("/:id", authMiddleware, updateCartItem); // PATCH /api/cart/:id
router.delete("/:id", authMiddleware, removeFromCart);// DELETE /api/cart/:id

export default router;
