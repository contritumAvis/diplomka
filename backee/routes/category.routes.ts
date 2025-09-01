import express from "express";
import { createCategory, getCategories } from "../controllers/category.controller";

const router = express.Router();

router.post("/", createCategory);  // ✅ создание категории
router.get("/", getCategories);    // ✅ список категорий

export default router;
