// backee/controllers/subscribeController.ts
import { Request, Response } from "express";
import nodemailer from "nodemailer";

export const subscribe = async (req: Request, res: Response) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ message: "Email is required" });
  }

  try {
    
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.SMTP_USER, // мне лень
        pass: process.env.SMTP_PASS, 
      },
    });

    await transporter.sendMail({
      from: `"My Shop" <${process.env.SMTP_USER}>`,
      to: email,
      subject: "Welcome to our newsletter 🎉",
      text: "Привет! Спасибо, что подписался на нашу рассылку.",
      html: "<h1>Привет!</h1><p>Спасибо, что подписался на нашу рассылку 🎉</p>",
    });

    res.json({ message: "Email sent successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to send email" });
  }
};
