// import { Request, Response } from "express";
// import prisma from "../prisma";

// // POST /api/variants
// export const createVariant = async (req: Request, res: Response) => {
//   try {
//     const { productId, price, stock, color, memory, storage, size, sku, imageUrl } = req.body;

//     if (!productId || !price) {
//       return res.status(400).json({ message: "productId и price обязательны" });
//     }

//     const variant = await prisma.productVariant.create({
//       data: {
//         productId: Number(productId),
//         price: Number(price),
//         stock: stock ? Number(stock) : 0,
//         color,
//         memory,
//         storage,
//         size,
//         sku,
//         imageUrl,
//       },
//     });

//     res.status(201).json(variant);
//   } catch (err) {
//     console.error("Ошибка при создании варианта:", err);
//     res.status(500).json({ message: "Ошибка сервера" });
//   }
// };

import { Request, Response } from "express";
import prisma from "../prisma";

export const createVariant = async (req: Request, res: Response) => {
  try {
    console.log("BODY:", req.body);

    const { productId, price, stock, color, memory, storage, size, sku, imageUrl } = req.body;

    if (!productId || !price) {
      return res.status(400).json({ message: "productId и price обязательны" });
    }

    const variant = await prisma.productVariant.create({
      data: {
        productId: Number(productId),
        price: Number(price),
        stock: stock ? Number(stock) : 0,
        color,
        memory,
        storage,
        size,
        sku,
        imageUrl,
      },
    });

    res.status(201).json(variant);
  } catch (err: any) {
    console.error("Ошибка при создании варианта:", err);
    res.status(500).json({ message: err.message, stack: err.stack });
  }
};
