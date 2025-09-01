import { Request, Response } from "express";
import prisma from "../prisma";

export const createBrand = async (req: Request, res: Response) => {
  try {
    const { name } = req.body;
    const brand = await prisma.brand.create({ data: { name } });
    res.status(201).json(brand);
  } catch (error) {
    res.status(400).json({ error: "Не удалось создать бренд" });
  }
};

export const getBrands = async (_req: Request, res: Response) => {
  try {
    const brands = await prisma.brand.findMany();
    res.json(brands);
  } catch (error) {
    res.status(500).json({ error: "Ошибка при получении брендов" });
  }
};
