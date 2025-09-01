import express from "express";
import { createBrand, getBrands } from "../controllers/brand.controller";

const router = express.Router();

router.post("/", createBrand);  // ✅ создание бренда
router.get("/", getBrands);     // ✅ список брендов

export default router;
