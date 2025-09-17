// import express from "express";
// import {
//   addFavorite,
//   getFavorites,
//   removeFavorite,
// } from "../controllers/favorite.controller";

// const router = express.Router();

// router.post("/", addFavorite);              // POST /api/favorites
// router.get("/", getFavorites);              // GET /api/favorites?userId=xxx
// router.delete("/:userId/:productId", removeFavorite); // DELETE /api/favorites/:userId/:productId

// export default router;

import express from "express";
import {
  addFavorite,
  getFavorites,
  removeFavorite,
} from "../controllers/favorite.controller";
import { authMiddleware } from "../middlewares/auth";

const router = express.Router();

// 👇 защита токеном
router.post("/", authMiddleware, addFavorite);         // POST /api/favorites
router.get("/", authMiddleware, getFavorites);         // GET /api/favorites
router.delete("/:productId", authMiddleware, removeFavorite); // DELETE /api/favorites/:productId

export default router;
