import express, { Request, Response } from 'express'
import { prisma } from '../server'

const router = express.Router()

router.post('/', async (req: Request, res: Response) => {
  try {
    const { items, total } = req.body
    const userId = req.userId

    const order = await prisma.order.create({
      data: {
        total,
        userId,
        items: {
          create: items.map((item: any) => ({
            dishId: item.id,
            quantity: 1,
          })),
        },
      },
    })

    res.status(201).json(order)
  } catch (error) {
    res.status(500).json({ error: 'Failed to create order' })
  }
})

router.get('/my-orders', async (req: Request, res: Response) => {
  try {
    const orders = await prisma.order.findMany({
      where: { userId: req.userId },
      include: { items: { include: { dish: true } } },
    })
    res.json(orders)
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch orders' })
  }
})

export default router
