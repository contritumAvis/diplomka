// controllers/auth.controller.ts
import { Request, Response } from 'express'
import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcrypt'

const prisma = new PrismaClient()

export const registerUser = async (req: Request, res: Response) => {
  const { name, email, password } = req.body

  try {
    const existingUser = await prisma.user.findUnique({ where: { email } })

    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' })
    }

    const hashedPassword = await bcrypt.hash(password, 10)

    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
        role: 'client', 
      },
    })

    return res.status(201).json({ message: 'User created', user })
  } catch (error) {
    console.error(error)
    return res.status(500).json({ message: 'Internal Server Error' })
  }
}
