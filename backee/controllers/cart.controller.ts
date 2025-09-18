// import { Request, Response } from "express";
// import prisma from "../prisma";

// // --- Добавить товар в корзину ---
// export const addToCart = async (req: Request, res: Response) => {
//   try {
//     const { userId, variantId, quantity } = req.body;

//     if (!userId || !variantId) {
//       return res.status(400).json({ message: "userId и variantId обязательны" });
//     }

//     const existingItem = await prisma.cartItem.findFirst({
//       where: { userId, variantId },
//     });

//     let cartItem;
//     if (existingItem) {
//       cartItem = await prisma.cartItem.update({
//         where: { id: existingItem.id },
//         data: { quantity: existingItem.quantity + (quantity || 1) },
//       });
//     } else {
//       cartItem = await prisma.cartItem.create({
//         data: {
//           userId,
//           variantId,
//           quantity: quantity || 1,
//         },
//       });
//     }

//     res.status(201).json(cartItem);
//   } catch (err) {
//     console.error("Ошибка при добавлении в корзину:", err);
//     res.status(500).json({ message: "Ошибка сервера" });
//   }
// };

// // --- Получить корзину юзера ---
// export const getCart = async (req: Request, res: Response) => {
//   try {
//     const { userId } = req.query;
//     if (!userId) return res.status(400).json({ message: "userId обязателен" });

//     const cart = await prisma.cartItem.findMany({
//       where: { userId: String(userId) },
//       include: {
//         variant: {
//           include: { product: true },
//         },
//       },
//     });

//     res.json(cart);
//   } catch (err) {
//     console.error("Ошибка при получении корзины:", err);
//     res.status(500).json({ message: "Ошибка сервера" });
//   }
// };

// // --- Изменить количество ---
// export const updateCartItem = async (req: Request, res: Response) => {
//   try {
//     const { id } = req.params;
//     const { quantity } = req.body;

//     const updated = await prisma.cartItem.update({
//       where: { id: Number(id) },
//       data: { quantity },
//     });

//     res.json(updated);
//   } catch (err) {
//     console.error("Ошибка при изменении количества:", err);
//     res.status(500).json({ message: "Ошибка сервера" });
//   }
// };

// // --- Удалить товар из корзины ---
// export const removeFromCart = async (req: Request, res: Response) => {
//   try {
//     const { id } = req.params;

//     await prisma.cartItem.delete({
//       where: { id: Number(id) },
//     });

//     res.json({ message: "Товар удален из корзины" });
//   } catch (err) {
//     console.error("Ошибка при удалении из корзины:", err);
//     res.status(500).json({ message: "Ошибка сервера" });
//   }
// };













// import { Request, Response } from "express";
// import prisma from "../prisma";

// // --- Добавить товар в корзину ---
// export const addToCart = async (req: Request, res: Response) => {
//   try {
//     const userId = (req as any).userId; // 👈 берём из токена
//     const { variantId, quantity } = req.body;

//     if (!variantId) {
//       return res.status(400).json({ message: "variantId обязателен" });
//     }

//     const existingItem = await prisma.cartItem.findFirst({
//       where: { userId, variantId },
//     });

//     let cartItem;
//     if (existingItem) {
//       cartItem = await prisma.cartItem.update({
//         where: { id: existingItem.id },
//         data: { quantity: existingItem.quantity + (quantity || 1) },
//       });
//     } else {
//       cartItem = await prisma.cartItem.create({
//         data: {
//           userId,
//           variantId,
//           quantity: quantity || 1,
//         },
//       });
//     }

//     res.status(201).json(cartItem);
//   } catch (err) {
//     console.error("Ошибка при добавлении в корзину:", err);
//     res.status(500).json({ message: "Ошибка сервера" });
//   }
// };

// // --- Получить корзину юзера ---
// export const getCart = async (req: Request, res: Response) => {
//   try {
//     const userId = (req as any).userId; // 👈 из токена

//     const cart = await prisma.cartItem.findMany({
//       where: { userId },
//       include: {
//         variant: {
//           include: { product: true },
//         },
//       },
//     });

//     res.json(cart);
//   } catch (err) {
//     console.error("Ошибка при получении корзины:", err);
//     res.status(500).json({ message: "Ошибка сервера" });
//   }
// };

// // --- Изменить количество ---
// export const updateCartItem = async (req: Request, res: Response) => {
//   try {
//     const userId = (req as any).userId;
//     const { id } = req.params;
//     const { quantity } = req.body;

//     const cartItem = await prisma.cartItem.findUnique({
//       where: { id: Number(id) },
//     });

//     if (!cartItem || cartItem.userId !== userId) {
//       return res.status(403).json({ message: "Нет доступа к этой записи" });
//     }

//     const updated = await prisma.cartItem.update({
//       where: { id: Number(id) },
//       data: { quantity },
//     });

//     res.json(updated);
//   } catch (err) {
//     console.error("Ошибка при изменении количества:", err);
//     res.status(500).json({ message: "Ошибка сервера" });
//   }
// };

// // --- Удалить товар из корзины ---
// export const removeFromCart = async (req: Request, res: Response) => {
//   try {
//     const userId = (req as any).userId;
//     const { id } = req.params;

//     const cartItem = await prisma.cartItem.findUnique({
//       where: { id: Number(id) },
//     });

//     if (!cartItem || cartItem.userId !== userId) {
//       return res.status(403).json({ message: "Нет доступа к этой записи" });
//     }

//     await prisma.cartItem.delete({
//       where: { id: Number(id) },
//     });

//     res.json({ message: "Товар удален из корзины" });
//   } catch (err) {
//     console.error("Ошибка при удалении из корзины:", err);
//     res.status(500).json({ message: "Ошибка сервера" });
//   }
// };
import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// --- Добавить товар в корзину ---
export const addToCart = async (req: Request, res: Response) => {
  try {
    const userId = (req as any).userId;
    const { productId } = req.body;

    if (!productId) {
      return res.status(400).json({ message: "productId обязателен" });
    }

    const pid = Number(productId);

    // проверяем, есть ли уже товар в корзине
    const existing = await prisma.cartItem.findFirst({
      where: { userId, productId: pid },
    });

    if (existing) {
      const updated = await prisma.cartItem.update({
        where: { id: existing.id },
        data: { quantity: existing.quantity + 1 },
        include: { product: true },
      });
      return res.json(updated);
    }

    const newItem = await prisma.cartItem.create({
      data: { userId, productId: pid, quantity: 1 },
      include: { product: true },
    });

    res.status(201).json(newItem);
  } catch (err) {
    console.error("Ошибка добавления в корзину:", err);
    res.status(500).json({ message: "Не удалось добавить в корзину" });
  }
};

// --- Получить корзину ---
export const getCart = async (req: Request, res: Response) => {
  try {
    const userId = (req as any).userId;

    const cart = await prisma.cartItem.findMany({
      where: { userId },
      include: { product: true },
    });

    res.json(cart);
  } catch (err) {
    console.error("Ошибка получения корзины:", err);
    res.status(500).json({ message: "Не удалось получить корзину" });
  }
};

// --- Удалить из корзины ---
export const removeFromCart = async (req: Request, res: Response) => {
  try {
    const userId = (req as any).userId;
    const productId = Number(req.params.productId);

    const existing = await prisma.cartItem.findFirst({
      where: { userId, productId },
    });

    if (!existing) {
      return res.status(404).json({ message: "Товар не найден в корзине" });
    }

    await prisma.cartItem.delete({ where: { id: existing.id } });
    res.json({ message: "Товар удален из корзины" });
  } catch (err) {
    console.error("Ошибка удаления из корзины:", err);
    res.status(500).json({ message: "Не удалось удалить товар" });
  }
};

// --- Обновить количество ---
export const updateCartItem = async (req: Request, res: Response) => {
  try {
    const userId = (req as any).userId;
    const productId = Number(req.params.productId);
    const qty = Number(req.body.quantity);

    if (!qty || qty < 1) {
      return res.status(400).json({ message: "Количество должно быть >= 1" });
    }

    const existing = await prisma.cartItem.findFirst({
      where: { userId, productId },
    });

    if (!existing) {
      return res.status(404).json({ message: "Товар не найден в корзине" });
    }

    const updated = await prisma.cartItem.update({
      where: { id: existing.id },
      data: { quantity: qty },
      include: { product: true },
    });

    res.json(updated);
  } catch (err) {
    console.error("Ошибка обновления корзины:", err);
    res.status(500).json({ message: "Не удалось обновить количество" });
  }
};



// import { Request, Response } from "express";
// import prisma from "../prisma";

// // Добавить в корзину
// export const addToCart = async (req: Request, res: Response) => {
//   try {
//     const userId = (req as any).user.id;
//     const { variantId, quantity = 1 } = req.body;

//     if (!variantId) {
//       return res.status(400).json({ message: "variantId обязателен" });
//     }

//     // проверим, есть ли уже этот вариант товара в корзине
//     const existing = await prisma.cartItem.findFirst({
//       where: { userId, variantId },
//     });

//     if (existing) {
//       const updated = await prisma.cartItem.update({
//         where: { id: existing.id },
//         data: { quantity: existing.quantity + quantity },
//         include: { variant: { include: { product: true } } },
//       });
//       return res.json(updated);
//     }

//     const newItem = await prisma.cartItem.create({
//       data: {
//         userId,
//         variantId,
//         quantity,
//       },
//       include: { variant: { include: { product: true } } },
//     });

//     res.json(newItem);
//   } catch (err) {
//     console.error("Ошибка добавления в корзину:", err);
//     res.status(400).json({ message: "Не удалось добавить в корзину" });
//   }
// };

// // Получить корзину
// export const getCart = async (req: Request, res: Response) => {
//   try {
//     const userId = (req as any).user.id;
//     const cart = await prisma.cartItem.findMany({
//       where: { userId },
//       include: {
//         variant: {
//           include: { product: true },
//         },
//       },
//     });
//     res.json(cart);
//   } catch (err) {
//     console.error("Ошибка получения корзины:", err);
//     res.status(400).json({ message: "Не удалось получить корзину" });
//   }
// };

// // Удалить из корзины по variantId
// export const removeFromCart = async (req: Request, res: Response) => {
//   try {
//     const userId = (req as any).user.id;
//     const variantId = parseInt(req.params.variantId);

//     const existing = await prisma.cartItem.findFirst({
//       where: { userId, variantId },
//     });

//     if (!existing) {
//       return res.status(404).json({ message: "Товар не найден в корзине" });
//     }

//     await prisma.cartItem.delete({
//       where: { id: existing.id },
//     });

//     res.json({ message: "Удалено из корзины" });
//   } catch (err) {
//     console.error("Ошибка удаления из корзины:", err);
//     res.status(400).json({ message: "Не удалось удалить товар" });
//   }
// };

// // Обновить количество по variantId
// export const updateCartItem = async (req: Request, res: Response) => {
//   try {
//     const userId = (req as any).user.id;
//     const variantId = parseInt(req.params.variantId);
//     const { quantity } = req.body;

//     if (!quantity || quantity < 1) {
//       return res.status(400).json({ message: "Количество должно быть >= 1" });
//     }

//     const existing = await prisma.cartItem.findFirst({
//       where: { userId, variantId },
//     });

//     if (!existing) {
//       return res.status(404).json({ message: "Товар не найден в корзине" });
//     }

//     const updated = await prisma.cartItem.update({
//       where: { id: existing.id },
//       data: { quantity },
//       include: { variant: { include: { product: true } } },
//     });

//     res.json(updated);
//   } catch (err) {
//     console.error("Ошибка обновления корзины:", err);
//     res.status(400).json({ message: "Не удалось обновить количество" });
//   }
// };




// import { Request, Response } from "express";
// import prisma from "../prisma";

// // --- Добавить товар в корзину ---
// export const addToCart = async (req: Request, res: Response) => {
//   try {
//     const userId = (req as any).userId; // из токена
//     const { variantId, quantity } = req.body;

//     if (!variantId) {
//       return res.status(400).json({ message: "variantId обязателен" });
//     }

//     const existingItem = await prisma.cartItem.findFirst({
//       where: { userId, variantId },
//     });

//     const cartItem = existingItem
//       ? await prisma.cartItem.update({
//           where: { id: existingItem.id },
//           data: { quantity: existingItem.quantity + (quantity || 1) },
//         })
//       : await prisma.cartItem.create({
//           data: { userId, variantId, quantity: quantity || 1 },
//         });

//     res.status(201).json(cartItem);
//   } catch (err) {
//     console.error("Ошибка при добавлении в корзину:", err);
//     res.status(500).json({ message: "Ошибка сервера" });
//   }
// };

// // --- Получить корзину юзера ---
// export const getCart = async (req: Request, res: Response) => {
//   try {
//     const userId = (req as any).userId;

//     const cart = await prisma.cartItem.findMany({
//       where: { userId },
//       include: {
//         variant: {
//           include: { product: true },
//         },
//       },
//     });

//     res.json(cart);
//   } catch (err) {
//     console.error("Ошибка при получении корзины:", err);
//     res.status(500).json({ message: "Ошибка сервера" });
//   }
// };

// // --- Изменить количество ---
// export const updateCartItem = async (req: Request, res: Response) => {
//   try {
//     const userId = (req as any).userId;
//     const { id } = req.params;
//     const { quantity } = req.body;

//     const cartItem = await prisma.cartItem.findUnique({
//       where: { id: Number(id) },
//     });

//     if (!cartItem || cartItem.userId !== userId) {
//       return res.status(403).json({ message: "Нет доступа к этой записи" });
//     }

//     const updated = await prisma.cartItem.update({
//       where: { id: Number(id) },
//       data: { quantity },
//     });

//     res.json(updated);
//   } catch (err) {
//     console.error("Ошибка при изменении количества:", err);
//     res.status(500).json({ message: "Ошибка сервера" });
//   }
// };

// // --- Удалить товар из корзины ---
// export const removeFromCart = async (req: Request, res: Response) => {
//   try {
//     const userId = (req as any).userId;
//     const { id } = req.params;

//     const cartItem = await prisma.cartItem.findUnique({
//       where: { id: Number(id) },
//     });

//     if (!cartItem || cartItem.userId !== userId) {
//       return res.status(403).json({ message: "Нет доступа к этой записи" });
//     }

//     await prisma.cartItem.delete({
//       where: { id: Number(id) },
//     });

//     res.json({ message: "Товар удален из корзины" });
//   } catch (err) {
//     console.error("Ошибка при удалении из корзины:", err);
//     res.status(500).json({ message: "Ошибка сервера" });
//   }
// };
