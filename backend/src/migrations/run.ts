import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('Creating seed data...')

  // Create restaurants
  const restaurant1 = await prisma.restaurant.create({
    data: {
      name: 'Пиццерия "Марко"',
      rating: 4.8,
      emoji: '🍕',
    },
  })

  const restaurant2 = await prisma.restaurant.create({
    data: {
      name: 'Суши бар "Токио"',
      rating: 4.9,
      emoji: '🍣',
    },
  })

  // Create dishes
  await prisma.dish.createMany({
    data: [
      {
        name: 'Маргарита',
        price: 450,
        description: 'Классическая пицца',
        emoji: '🍕',
        restaurantId: restaurant1.id,
      },
      {
        name: 'Пепперони',
        price: 520,
        description: 'С острой колбасой',
        emoji: '🍕',
        restaurantId: restaurant1.id,
      },
      {
        name: 'Филадельфия',
        price: 650,
        description: 'Суши с лососем',
        emoji: '🍣',
        restaurantId: restaurant2.id,
      },
    ],
  })

  console.log('✅ Seed data created successfully')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
