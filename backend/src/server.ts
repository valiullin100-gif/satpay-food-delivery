import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { PrismaClient } from '@prisma/client'
import authRoutes from './routes/auth'
import restaurantRoutes from './routes/restaurants'
import orderRoutes from './routes/orders'
import { errorHandler } from './middleware/errorHandler'
import { authenticateToken } from './middleware/auth'

dotenv.config()

const app = express()
const prisma = new PrismaClient()
const PORT = process.env.PORT || 3001

// Middleware
app.use(cors())
app.use(express.json())

// Routes
app.use('/api/auth', authRoutes)
app.use('/api/restaurants', restaurantRoutes)
app.use('/api/orders', authenticateToken, orderRoutes)

// Error handler
app.use(errorHandler)

// Start server
app.listen(PORT, () => {
  console.log(`✅ Server is running on port ${PORT}`)
})

export { prisma }
