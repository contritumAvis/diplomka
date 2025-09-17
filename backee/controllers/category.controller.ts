// import { Request, Response } from "express";
// import prisma from "../prisma";

// export const createCategory = async (req: Request, res: Response) => {
//   try {
//     const { name } = req.body;
//     const category = await prisma.category.create({ data: { name } });
//     res.status(201).json(category);
//   } catch (error) {
//     res.status(400).json({ error: "Не удалось создать категорию" });
//   }
// };

// export const getCategories = async (_req: Request, res: Response) => {
//   try {
//     const categories = await prisma.category.findMany();
//     res.json(categories);
//   } catch (error) {
//     res.status(500).json({ error: "Ошибка при получении категорий" });
//   }
// };










// import { Request, Response } from "express";
// import prisma from "../prisma";

// // --- старое ---
// export const createCategory = async (req: Request, res: Response) => {
//   try {
//     const { name, slug } = req.body;
//     const category = await prisma.category.create({ data: { name, slug } });
//     res.status(201).json(category);
//   } catch (error) {
//     res.status(400).json({ error: "Не удалось создать категорию" });
//   }
// };

// export const getCategories = async (_req: Request, res: Response) => {
//   try {
//     const categories = await prisma.category.findMany();
//     res.json(categories);
//   } catch (error) {
//     res.status(500).json({ error: "Ошибка при получении категорий" });
//   }
// };

// // --- новое ---
// export const getProductsByCategory = async (req: Request, res: Response) => {
//   try {
//     const { slug } = req.params;

//     const category = await prisma.category.findUnique({
//       where: { slug },
//       include: {
//         products: {
//           include: { brand: true },
//         },
//       },
//     });

//     if (!category) return res.status(404).json({ error: "Категория не найдена" });

//     res.json(category.products);
//   } catch (error) {
//     res.status(500).json({ error: "Ошибка при получении продуктов категории" });
//   }
// };

// export const getProductsByCategoryAndBrand = async (req: Request, res: Response) => {
//   try {
//     const { categorySlug, brandSlug } = req.params;

//     const products = await prisma.product.findMany({
//       where: {
//         category: { slug: categorySlug },
//         brand: { slug: brandSlug },
//       },
//       include: { brand: true, category: true },
//     });

//     res.json(products);
//   } catch (error) {
//     res.status(500).json({ error: "Ошибка при получении продуктов категории и бренда" });
//   }
  
// };



// import { Request, Response } from "express";
// import prisma from "../prisma";

// // --- CRUD категории ---
// export const createCategory = async (req: Request, res: Response) => {
//   try {
//     const { name, slug } = req.body;
//     const category = await prisma.category.create({ data: { name, slug } });
//     res.status(201).json(category);
//   } catch (error) {
//     res.status(400).json({ error: "Не удалось создать категорию" });
//   }
// };

// export const getCategories = async (_req: Request, res: Response) => {
//   try {
//     const categories = await prisma.category.findMany();
//     res.json(categories);
//   } catch (error) {
//     res.status(500).json({ error: "Ошибка при получении категорий" });
//   }
// };

// // --- товары по категории ---
// export const getProductsByCategory = async (req: Request, res: Response) => {
//   try {
//     const { slug } = req.params;

//     const category = await prisma.category.findUnique({
//       where: { slug },
//       include: {
//         products: {
//           include: { brand: true },
//         },
//       },
//     });

//     if (!category) return res.status(404).json({ error: "Категория не найдена" });

//     res.json(category.products);
//   } catch (error) {
//     res.status(500).json({ error: "Ошибка при получении продуктов категории" });
//   }
// };

// // --- товары по категории + бренду ---
// export const getProductsByCategoryAndBrand = async (req: Request, res: Response) => {
//   try {
//     const { categorySlug, brandSlug } = req.params;

//     const products = await prisma.product.findMany({
//       where: {
//         category: { slug: categorySlug },
//         brand: { slug: brandSlug },
//       },
//       include: { brand: true, category: true },
//     });

//     res.json(products);
//   } catch (error) {
//     res.status(500).json({ error: "Ошибка при получении продуктов категории и бренда" });
//   }
// };

// // --- бренды внутри категории ---
// export const getBrandsByCategory = async (req: Request, res: Response) => {
//   try {
//     const { slug } = req.params;

//     const brands = await prisma.brand.findMany({
//       where: {
//         products: {
//           some: {
//             category: { slug },
//           },
//         },
//       },
//       include: {
//         products: {
//           where: { category: { slug } },
//           select: { id: true },
//         },
//       },
//     });

//     res.json(brands);
//   } catch (error) {
//     res.status(500).json({ error: "Ошибка при получении брендов категории" });
//   }
// };
import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// 🔹 Создать категорию
export const createCategory = async (req: Request, res: Response) => {
  try {
    const { name, slug } = req.body;
    
    if (!name) {
      return res.status(400).json({ error: "Название категории обязательно" });
    }

    const category = await prisma.category.create({
      data: {
        name,
        slug: slug || name.toLowerCase().replace(/\s+/g, "-"),
      },
    });

    res.status(201).json(category);
  } catch (error) {
    console.error("Ошибка при создании категории:", error);
    res.status(500).json({ error: "Ошибка сервера" });
  }
};

// 🔹 Получить все категории
export const getCategories = async (req: Request, res: Response) => {
  try {
    const categories = await prisma.category.findMany();
    res.json(categories);
  } catch (error) {
    console.error("Ошибка при получении категорий:", error);
    res.status(500).json({ error: "Ошибка сервера" });
  }
};

// 🔹 Получить категорию по slug
export const getCategoryBySlug = async (req: Request, res: Response) => {
  try {
    const { slug } = req.params;

    const category = await prisma.category.findUnique({
      where: { slug },
      include: { products: true },
    });

    if (!category) {
      return res.status(404).json({ error: "Категория не найдена" });
    }

    res.json(category);
  } catch (error) {
    console.error("Ошибка при получении категории:", error);
    res.status(500).json({ error: "Ошибка сервера" });
  }
};

// 🔹 Получить продукты внутри категории (по slug)
export const getProductsByCategory = async (req: Request, res: Response) => {
  try {
    const { slug } = req.params;

    const category = await prisma.category.findUnique({
  where: { slug },
  include: { 
    products: true,
    brands: true, // ✅ подтянет связанные бренды
  },
});


    if (!category) {
      return res.status(404).json({ error: "Категория не найдена" });
    }

    res.json(category.products);
  } catch (error) {
    console.error("Ошибка при получении продуктов по категории:", error);
    res.status(500).json({ error: "Ошибка сервера" });
  }
};

// 🔹 Получить продукты по категории + бренду
export const getProductsByCategoryAndBrand = async (req: Request, res: Response) => {
  try {
    const { categorySlug, brandSlug } = req.params;

    const category = await prisma.category.findUnique({
      where: { slug: categorySlug },
      include: {
        products: {
          where: {
            brand: { slug: brandSlug },
          },
        },
      },
    });

    if (!category) {
      return res.status(404).json({ error: "Категория не найдена" });
    }

    res.json(category.products);
  } catch (error) {
    console.error("Ошибка при получении товаров по категории и бренду:", error);
    res.status(500).json({ error: "Ошибка сервера" });
  }
};

// 🔹 Получить бренды по категории
export const getBrandsByCategory = async (req: Request, res: Response) => {
  try {
    const { slug } = req.params;

    const category = await prisma.category.findUnique({
      where: { slug },
      include: {
        products: {
          include: { brand: true },
        },
      },
    });

    if (!category) {
      return res.status(404).json({ error: "Категория не найдена" });
    }

    // Уникальные бренды
    const brands = Array.from(
      new Map(
        category.products
          .filter((p) => p.brand)
          .map((p) => [p.brand!.id, p.brand])
      ).values()
    );

    res.json(brands);
  } catch (error) {
    console.error("Ошибка при получении брендов категории:", error);
    res.status(500).json({ error: "Ошибка сервера" });
  }
};
