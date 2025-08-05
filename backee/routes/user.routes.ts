import express from 'express'
// import { getUsers, createUser } from '../controllers/user.controller'
import { registerUser } from '../controllers/user.controller'

const router = express.Router()

// router.get('/', getUsers)
// router.post('/', createUser)
router.post('/register', registerUser)


export default router
