// import express from "express";
// import { createProduct, upload, getProducts } from "../controllers/product.controller";


// const router = express.Router();

// router.post("/", upload.array("images", 5), createProduct);
// router.get("/products", getProducts); // <-- добавь

// export default router;

// backee/routes/product.routes.ts

import express from "express";
import { createProduct, upload, getProducts, getProductById } from "../controllers/product.controller";

const router = express.Router();

// POST /api/products
router.post("/", upload.array("images", 5), createProduct);

// GET /api/products
router.get("/", getProducts);

//  GET /api/products/:id
router.get("/:id", getProductById);

export default router;

// import express from "express";
// import { createProduct, upload, getProducts, getProductById } from "../controllers/product.controller";

// const router = express.Router();

// // POST /api/products
// router.post("/", upload.array("images", 5), createProduct);

// // GET /api/products
// router.get("/", getProducts);

// // GET /api/products/:id
// router.get("/:id", getProductById);

// export default router;

