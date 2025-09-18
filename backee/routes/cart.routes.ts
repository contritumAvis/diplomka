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

// 🔹 Все действия через productId, как в избранном
router.post("/", authMiddleware, addToCart);                  // POST /api/cart
router.get("/", authMiddleware, getCart);                     // GET /api/cart
router.patch("/:productId", authMiddleware, updateCartItem);  // PATCH /api/cart/:productId
router.delete("/:productId", authMiddleware, removeFromCart); // DELETE /api/cart/:productId

export default router;

// import express from "express";
// import {
//   addToCart,
//   getCart,
//   updateCartItem,
//   removeFromCart,
// } from "../controllers/cart.controller";
// import { authMiddleware } from "../middlewares/auth";

// const router = express.Router();

// // теперь всё по productId
// router.post("/", authMiddleware, addToCart);                  // POST /api/cart
// router.get("/", authMiddleware, getCart);                     // GET /api/cart
// router.patch("/:productId", authMiddleware, updateCartItem);  // PATCH /api/cart/:productId
// router.delete("/:productId", authMiddleware, removeFromCart); // DELETE /api/cart/:productId

// export default router;

// import express from "express";
// import {
//   addToCart,
//   getCart,
//   updateCartItem,
//   removeFromCart,
// } from "../controllers/cart.controller";
// import { authMiddleware } from "../middlewares/auth";

// const router = express.Router();

// // 👇 добавляем защиту токеном
// router.post("/", authMiddleware, addToCart);          // POST /api/cart
// router.get("/", authMiddleware, getCart);             // GET /api/cart
// router.patch("/:id", authMiddleware, updateCartItem); // PATCH /api/cart/:id
// router.delete("/:id", authMiddleware, removeFromCart);// DELETE /api/cart/:id

// export default router;
