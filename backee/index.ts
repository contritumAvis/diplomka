// import express, { Application } from 'express'
// import dotenv from 'dotenv'
// import userRoutes from './routes/user.routes'

// dotenv.config()

// const app: Application = express()
// const PORT = process.env.PORT || 5000

// app.use(express.json())

// app.use('/api/users', userRoutes)

// app.listen(PORT, () => {
//   console.log(`\u{1F680} Server is running on port ${PORT}`)
// })


import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'

import authRoutes from './routes/user.routes'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 5000

app.use(cors())
app.use(express.json())

app.use('/api', authRoutes)

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})
