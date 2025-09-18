
// import { PrismaClient, Prisma } from "@prisma/client";
// import { Request, Response } from "express";
// import multer from "multer";
// import cloudinary from "../cloudinary";

// const prisma = new PrismaClient();

// // multer для временных файлов
// const upload = multer({ dest: "uploads/" });
// export const uploadMiddleware = upload.single("image");

// // Тело запроса
// interface ProductBody {
//   name: string;
//   description?: string;
//   price: string;        // приходит строкой
//   brandId?: string;     // необязательно
//   categoryId?: string;  // необязательно
// }

// // Расширенный Request
// interface MulterRequest extends Request {
//   file?: Express.Multer.File;
//   body: ProductBody;
// }

// // список
// export const getProducts = async (req: Request, res: Response) => {
//   try {
//     const products = await prisma.product.findMany();

//     // Переименуем basePrice -> price для фронта
//     const formatted = products.map((p) => ({
//       ...p,
//       price: p.basePrice,
//     }));

//     res.json(formatted);
//   } catch (err) {
//     res.status(500).json({ error: 'Ошибка при получении товаров' });
//   }
// };

// // по id (для страницы товара)
// export const getProductById = async (req: Request, res: Response) => {
//   try {
//     const id = Number(req.params.id);
//     const product = await prisma.product.findUnique({
//       where: { id },
//       include: { variants: true, brand: true, category: true },
//     });
//     if (!product) return res.status(404).json({ message: "Товар не найден" });
//     res.json(product);
//   } catch (error) {
//     res.status(500).json({ message: "Ошибка получения товара", error: (error as Error).message });
//   }
// };

// // создать
// export const createProduct = async (req: MulterRequest, res: Response) => {
//   try {
//     const { name, description, price, brandId, categoryId } = req.body;
//     if (!name || !price) return res.status(400).json({ message: "Название и цена обязательны" });

//     // загрузка в Cloudinary (если файл есть)
//     let imageUrl = "";
//     if (req.file) {
//       const uploadResult = await cloudinary.uploader.upload(req.file.path, { folder: "products" });
//       imageUrl = uploadResult.secure_url;
//     }

//     // формируем данные для Prisma
//    const data: Prisma.ProductCreateInput = {
//   name,
//   description: description ?? "",
//   basePrice: parseFloat(price), // 👈 правильное поле
//   imageUrl,
// };

//     // связи — опционально
//     if (brandId) {
//       data.brand = { connect: { id: Number(brandId) } };
//     }
//     if (categoryId) {
//       data.category = { connect: { id: Number(categoryId) } };
//     }

//     const product = await prisma.product.create({ data, include: { brand: true, category: true } });
//     res.status(201).json(product);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: "Ошибка создания продукта", error: (error as Error).message });
//   }
// };


// import { Request, Response } from "express";
// import prisma from "../prisma";       // ✅ правильный импорт
// import cloudinary from "../cloudinary";

// export const getProducts = async (req: Request, res: Response) => {
//   try {
//     const products = await prisma.product.findMany();

//     const formatted = products.map((p) => ({
//       ...p,
//       price: p.basePrice,   // 👈 тут p нормально типизируется
//     }));

//     res.json(formatted);
//   } catch (err) {
//     res.status(500).json({ error: "Ошибка при получении товаров" });
//   }
// };

// export const createProduct = async (req: Request, res: Response) => {
//   try {
//     if (!req.file) {
//       return res.status(400).json({ error: "Файл не загружен" });
//     }

//     // загружаем в Cloudinary
//     const result = await cloudinary.uploader.upload(req.file.path, {
//       folder: "products",
//     });

//     const product = await prisma.product.create({
//       data: {
//         name: req.body.title,               // ⚡️ скорее всего у тебя поле называется name
//         basePrice: Number(req.body.basePrice),
//         imageUrl: result.secure_url,
//       },
//     });

//     res.json(product);
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: "Ошибка при создании товара" });
//   }
// };


// import { Request, Response } from "express";
// import prisma from "../prisma";
// import multer from "multer";

// import cloudinary from "../cloudinaryConfig";
// import type { UploadApiResponse, UploadApiErrorResponse } from "cloudinary";

// // --- Настройка Multer для загрузки ---
// const storage = multer.memoryStorage();
// export const upload = multer({ storage });

// // Вспомогательная функция для загрузки в Cloudinary
// const uploadToCloudinary = (buffer: Buffer, folder = "products"): Promise<string> =>
//   new Promise((resolve, reject) => {
//     const stream = cloudinary.uploader.upload_stream(
//       { folder },
//       (
//         error: UploadApiErrorResponse | undefined,
//         result: UploadApiResponse | undefined
//       ) => {
//         if (error) return reject(error);
//         if (!result) return reject(new Error("Cloudinary result is empty"));
//         resolve(result.secure_url);
//       }
//     );
//     stream.end(buffer);
//   });

// // --- Создание товара ---
// export const createProduct = async (req: Request, res: Response) => {
//   try {
//     const { name, description, basePrice, categoryId, brandId } = req.body;

//     const files = (req.files as Express.Multer.File[]) ?? [];
//     if (files.length === 0) {
//       return res.status(400).json({ message: "Загрузите хотя бы одну картинку" });
//     }

//     const imageUploads = await Promise.all(
//       files.map((file) => uploadToCloudinary(file.buffer))
//     );

//     const product = await prisma.product.create({
//       data: {
//         name,
//         description,
//         basePrice: parseFloat(basePrice),
//         thumbnail: imageUploads[0],
//         categoryId: categoryId ? Number(categoryId) : null,
//         brandId: brandId ? Number(brandId) : null,
//         images: {
//           create: imageUploads.map((url) => ({ url })),
//         },
//       },
//       include: {
//         images: true,
//         brand: true,
//         category: true,
//       },
//     });

//     res.status(201).json(product);
//   } catch (err) {
//     const error = err as Error;
//     console.error("Ошибка при добавлении товара:", error.message, error);
//     res.status(500).json({ message: error.message });
//   }
// };

// // --- Получение всех товаров ---
// export const getProducts = async (req: Request, res: Response) => {
//   try {
//     const products = await prisma.product.findMany({
//       include: {
//         images: true,
//         brand: true,
//         category: true,
//       },
//       orderBy: { createdAt: "desc" }, // чтобы новые шли первыми
//     });

//     res.json(products);
//   } catch (err) {
//     const error = err as Error;
//     console.error("Ошибка при получении товаров:", error.message, error);
//     res.status(500).json({ message: error.message });
//   }
// };
import { Request, Response } from "express";
import prisma from "../prisma";
import multer from "multer";

import cloudinary from "../cloudinaryConfig";
import type { UploadApiResponse, UploadApiErrorResponse } from "cloudinary";

// --- Настройка Multer для загрузки ---
const storage = multer.memoryStorage();
export const upload = multer({ storage });

// Вспомогательная функция для загрузки в Cloudinary
const uploadToCloudinary = (buffer: Buffer, folder = "products"): Promise<string> =>
  new Promise((resolve, reject) => {
    const stream = cloudinary.uploader.upload_stream(
      { folder },
      (error: UploadApiErrorResponse | undefined, result: UploadApiResponse | undefined) => {
        if (error) return reject(error);
        if (!result) return reject(new Error("Cloudinary result is empty"));
        resolve(result.secure_url);
      }
    );
    stream.end(buffer);
  });

// --- Создание товара ---
export const createProduct = async (req: Request, res: Response) => {
  try {
    const { name, description, basePrice, categoryId, brandId } = req.body;

    const files = (req.files as Express.Multer.File[]) ?? [];
    if (files.length === 0) {
      return res.status(400).json({ message: "Загрузите хотя бы одну картинку" });
    }

    const imageUploads = await Promise.all(files.map((file) => uploadToCloudinary(file.buffer)));

    const product = await prisma.product.create({
      data: {
        name,
        description,
        basePrice: parseFloat(basePrice),
        thumbnail: imageUploads[0],
        categoryId: categoryId ? Number(categoryId) : null,
        brandId: brandId ? Number(brandId) : null,
        images: {
          create: imageUploads.map((url) => ({ url })),
        },
        variants: {
          create: [{ price: parseFloat(basePrice) }], // создаём один вариант по умолчанию
        },
      },
      include: {
        images: true,
        brand: true,
        category: true,
        variants: true, // ✅ теперь отдаём варианты
      },
    });

    res.status(201).json(product);
  } catch (err) {
    const error = err as Error;
    console.error("Ошибка при добавлении товара:", error.message, error);
    res.status(500).json({ message: error.message });
  }
};

// --- Получение всех товаров ---
export const getProducts = async (req: Request, res: Response) => {
  try {
    const { category } = req.query;

    let products;

    if (category === "electronics-devices") {
      products = await prisma.product.findMany({
        include: {
          images: true,
          brand: true,
          category: true,
          variants: true, // ✅ сразу отдаём варианты
        },
        orderBy: { createdAt: "desc" },
      });
    } else {
      products = await prisma.product.findMany({
        where: category ? { category: { slug: String(category) } } : undefined,
        include: {
          images: true,
          brand: true,
          category: true,
          variants: true, // ✅ сразу отдаём варианты
        },
        orderBy: { createdAt: "desc" },
      });
    }

    res.json(products);
  } catch (error) {
    console.error("Ошибка при получении товаров:", error);
    res.status(500).json({ message: "Ошибка при получении продуктов" });
  }
};

// --- Получение товара по ID ---
export const getProductById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const product = await prisma.product.findUnique({
      where: { id: Number(id) },
      include: {
        images: true,
        brand: true,
        category: true,
        variants: true, // ✅ отдаём варианты
      },
    });

    if (!product) {
      return res.status(404).json({ message: "Товар не найден" });
    }

    res.json(product);
  } catch (err) {
    console.error("Ошибка при получении товара по ID:", err);
    res.status(500).json({ message: "Ошибка сервера" });
  }
};


// import { Request, Response } from "express";
// import prisma from "../prisma";
// import multer from "multer";

// import cloudinary from "../cloudinaryConfig";
// import type { UploadApiResponse, UploadApiErrorResponse } from "cloudinary";

// // --- Настройка Multer для загрузки ---
// const storage = multer.memoryStorage();
// export const upload = multer({ storage });

// // Вспомогательная функция для загрузки в Cloudinary
// const uploadToCloudinary = (buffer: Buffer, folder = "products"): Promise<string> =>
//   new Promise((resolve, reject) => {
//     const stream = cloudinary.uploader.upload_stream(
//       { folder },
//       (
//         error: UploadApiErrorResponse | undefined,
//         result: UploadApiResponse | undefined
//       ) => {
//         if (error) return reject(error);
//         if (!result) return reject(new Error("Cloudinary result is empty"));
//         resolve(result.secure_url);
//       }
//     );
//     stream.end(buffer);
//   });

// // --- Создание товара ---
// export const createProduct = async (req: Request, res: Response) => {
//   try {
//     const { name, description, basePrice, categoryId, brandId } = req.body;

//     const files = (req.files as Express.Multer.File[]) ?? [];
//     if (files.length === 0) {
//       return res.status(400).json({ message: "Загрузите хотя бы одну картинку" });
//     }

//     const imageUploads = await Promise.all(
//       files.map((file) => uploadToCloudinary(file.buffer))
//     );

//     const product = await prisma.product.create({
//       data: {
//         name,
//         description,
//         basePrice: parseFloat(basePrice),
//         thumbnail: imageUploads[0],
//         categoryId: categoryId ? Number(categoryId) : null,
//         brandId: brandId ? Number(brandId) : null,
//         images: {
//           create: imageUploads.map((url) => ({ url })),
//         },
//       },
//       include: {
//         images: true,
//         brand: true,
//         category: true,
//       },
//     });

//     res.status(201).json(product);
//   } catch (err) {
//     const error = err as Error;
//     console.error("Ошибка при добавлении товара:", error.message, error);
//     res.status(500).json({ message: error.message });
//   }
// };

// // --- Получение всех товаров ---
// export const getProducts = async (req: Request, res: Response) => {
//   try {
//     const products = await prisma.product.findMany({
//       include: {
//         images: true,
//         brand: true,
//         category: true,
//       },
//       orderBy: { createdAt: "desc" }, // чтобы новые шли первыми
//     });

//     res.json(products);
//   } catch (err) {
//     const error = err as Error;
//     console.error("Ошибка при получении товаров:", error.message, error);
//     res.status(500).json({ message: error.message });
//   }
// };

// // --- Получение товара по ID ---
// export const getProductById = async (req: Request, res: Response) => {
//   try {
//     const { id } = req.params;

//     const product = await prisma.product.findUnique({
//       where: { id: Number(id) },
//       include: {
//         images: true, // ✅ добавил, чтобы и картинки шли
//         brand: true,
//         category: true,
//       },
//     });

//     if (!product) {
//       return res.status(404).json({ message: "Товар не найден" });
//     }

//     res.json(product);
//   } catch (err) {
//     console.error("Ошибка при получении товара по ID:", err);
//     res.status(500).json({ message: "Ошибка сервера" });
//   }
// };
