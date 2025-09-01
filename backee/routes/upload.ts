import { Router } from "express";
import { uploadImage } from "../controllers/uploadController";

const router = Router();

// конечный путь: POST http://localhost:5000/api/upload
router.post("/", uploadImage);

export default router;
