// import express from "express";
// import { createCategory, getCategories } from "../controllers/category.controller";

// const router = express.Router();

// router.post("/", createCategory);  // ✅ создание категории
// router.get("/", getCategories);    // ✅ список категорий

// export default router;


// import express from "express";
// import { createCategory, getCategories, getProductsByCategory, getProductsByCategoryAndBrand } from "../controllers/category.controller";

// const router = express.Router();

// // 🔹 CRUD (оставляем)
// router.post("/", createCategory);   // ✅ создание категории
// router.get("/", getCategories);     // ✅ список категорий

// // 🔹 Новый функционал
// router.get("/:slug", getProductsByCategory);                        // ✅ товары по категории
// router.get("/:categorySlug/:brandSlug", getProductsByCategoryAndBrand); // ✅ товары по категории + бренду

// export default router;



import express from "express";
import { 
  createCategory, 
  getCategories, 
  getCategoryBySlug,   // ✅ добавляем
  getProductsByCategory, 
  getProductsByCategoryAndBrand, 
  getBrandsByCategory 
} from "../controllers/category.controller";


const router = express.Router();

// 🔹 CRUD
router.post("/", createCategory);
router.get("/", getCategories);

// 🔹 функционал категорий
router.get("/:slug/brands", getBrandsByCategory);                       // бренды внутри категории
router.get("/:slug", getCategoryBySlug);
router.get("/:categorySlug/:brandSlug", getProductsByCategoryAndBrand); // товары по категории + бренду

export default router;
