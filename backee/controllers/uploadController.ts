import { Request, Response } from "express";
import cloudinary from "../cloudinaryConfig";
import multer from "multer";

const storage = multer.memoryStorage();
const upload = multer({ storage });

export const uploadImage = [
  upload.single("image"),
  async (req: Request, res: Response): Promise<void> => {
    try {
      if (!req.file) {
        res.status(400).json({ error: "Файл не найден" });
        return;
      }

      const uploadPromise = new Promise<any>((resolve, reject) => {
  const stream = cloudinary.uploader.upload_stream(
    { folder: "products" },   
    (error: any, result: any) => {
      if (error) return reject(error);
      if (result) return resolve(result);
    }
  );
  stream.end(req.file!.buffer);
});


      const result: any = await uploadPromise;
      res.json({ url: result.secure_url });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Ошибка загрузки" });
    }
  },
];
