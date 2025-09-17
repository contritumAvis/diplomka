import express from "express";
import { createVariant } from "../controllers/variant.controller";

const router = express.Router();

// POST /api/variants
router.post("/", createVariant);

export default router;
