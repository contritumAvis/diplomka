// import { Request, Response } from "express";
// import prisma from "../prisma";

// // --- Добавить товар в избранное ---
// export const addFavorite = async (req: Request, res: Response) => {
//   try {
//     const { userId, productId } = req.body;

//     if (!userId || !productId) {
//       return res.status(400).json({ message: "userId и productId обязательны" });
//     }

//     const favorite = await prisma.favorite.upsert({
//       where: {
//         userId_productId: {
//           userId,
//           productId,
//         },
//       },
//       update: {},
//       create: { userId, productId },
//     });

//     res.status(201).json(favorite);
//   } catch (err) {
//     console.error("Ошибка при добавлении в избранное:", err);
//     res.status(500).json({ message: "Ошибка сервера" });
//   }
// };

// // --- Получить избранное юзера ---
// export const getFavorites = async (req: Request, res: Response) => {
//   try {
//     const { userId } = req.query;
//     if (!userId) return res.status(400).json({ message: "userId обязателен" });

//     const favorites = await prisma.favorite.findMany({
//       where: { userId: String(userId) },
//       include: { product: true },
//     });

//     res.json(favorites);
//   } catch (err) {
//     console.error("Ошибка при получении избранного:", err);
//     res.status(500).json({ message: "Ошибка сервера" });
//   }
// };

// // --- Удалить из избранного ---
// export const removeFavorite = async (req: Request, res: Response) => {
//   try {
//     const { userId, productId } = req.params;

//     await prisma.favorite.delete({
//       where: {
//         userId_productId: {
//           userId,
//           productId: Number(productId),
//         },
//       },
//     });

//     res.json({ message: "Товар удален из избранного" });
//   } catch (err) {
//     console.error("Ошибка при удалении из избранного:", err);
//     res.status(500).json({ message: "Ошибка сервера" });
//   }
// };






// import { Request, Response } from "express";
// import prisma from "../prisma";

// // --- Добавить товар в избранное ---
// export const addFavorite = async (req: Request, res: Response) => {
//   try {
//     const userId = (req as any).userId; // 👈 из токена
//     const { productId } = req.body;

//     if (!productId) {
//       return res.status(400).json({ message: "productId обязателен" });
//     }

//     const favorite = await prisma.favorite.upsert({
//       where: {
//         userId_productId: {
//           userId,
//           productId,
//         },
//       },
//       update: {},
//       create: { userId, productId },
//     });

//     res.status(201).json(favorite);
//   } catch (err) {
//     console.error("Ошибка при добавлении в избранное:", err);
//     res.status(500).json({ message: "Ошибка сервера" });
//   }
// };

// // --- Получить избранное юзера ---
// export const getFavorites = async (req: Request, res: Response) => {
//   try {
//     const userId = (req as any).userId; // 👈 из токена

//     const favorites = await prisma.favorite.findMany({
//       where: { userId },
//       include: { product: true },
//     });

//     res.json(favorites);
//   } catch (err) {
//     console.error("Ошибка при получении избранного:", err);
//     res.status(500).json({ message: "Ошибка сервера" });
//   }
// };

// // --- Удалить из избранного ---
// export const removeFavorite = async (req: Request, res: Response) => {
//   try {
//     const userId = (req as any).userId;
//     const { productId } = req.params;

//     const favorite = await prisma.favorite.findUnique({
//       where: {
//         userId_productId: {
//           userId,
//           productId: Number(productId),
//         },
//       },
//     });

//     if (!favorite) {
//       return res.status(404).json({ message: "Товар не найден в избранном" });
//     }

//     await prisma.favorite.delete({
//       where: {
//         userId_productId: {
//           userId,
//           productId: Number(productId),
//         },
//       },
//     });

//     res.json({ message: "Товар удален из избранного" });
//   } catch (err) {
//     console.error("Ошибка при удалении из избранного:", err);
//     res.status(500).json({ message: "Ошибка сервера" });
//   }
// };



import { Request, Response } from "express";
import prisma from "../prisma";

// --- Добавить товар в избранное ---
export const addFavorite = async (req: Request, res: Response) => {
  try {
    const userId = (req as any).userId;
    const { productId } = req.body;

    if (!productId) {
      return res.status(400).json({ message: "productId обязателен" });
    }

    const favorite = await prisma.favorite.upsert({
      where: {
        userId_productId: {
          userId,
          productId,
        },
      },
      update: {},
      create: { userId, productId },
    });

    res.status(201).json(favorite);
  } catch (err) {
    console.error("Ошибка при добавлении в избранное:", err);
    res.status(500).json({ message: "Ошибка сервера" });
  }
};

// --- Получить избранное юзера ---
export const getFavorites = async (req: Request, res: Response) => {
  try {
    const userId = (req as any).userId;

    const favorites = await prisma.favorite.findMany({
      where: { userId },
      include: { product: true },
    });

    res.json(favorites);
  } catch (err) {
    console.error("Ошибка при получении избранного:", err);
    res.status(500).json({ message: "Ошибка сервера" });
  }
};

// --- Удалить из избранного ---
export const removeFavorite = async (req: Request, res: Response) => {
  try {
    const userId = (req as any).userId;
    const { productId } = req.params;

    const favorite = await prisma.favorite.findUnique({
      where: {
        userId_productId: {
          userId,
          productId: Number(productId),
        },
      },
    });

    if (!favorite) {
      return res.status(404).json({ message: "Товар не найден в избранном" });
    }

    await prisma.favorite.delete({
      where: {
        userId_productId: {
          userId,
          productId: Number(productId),
        },
      },
    });

    res.json({ message: "Товар удален из избранного" });
  } catch (err) {
    console.error("Ошибка при удалении из избранного:", err);
    res.status(500).json({ message: "Ошибка сервера" });
  }
};
