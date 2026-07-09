import express, { Request, Response } from 'express'
import { prisma } from '../server'

const router = express.Router()

router.get('/', async (req: Request, res: Response) => {
  try {
    const restaurants = await prisma.restaurant.findMany()
    res.json(restaurants)
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch restaurants' })
  }
})

router.get('/:id', async (req: Request, res: Response) => {
  try {
    const restaurant = await prisma.restaurant.findUnique({
      where: { id: parseInt(req.params.id) },
      include: { dishes: true },
    })
    if (!restaurant) {
      return res.status(404).json({ error: 'Restaurant not found' })
    }
    res.json(restaurant)
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch restaurant' })
  }
})

export default router
