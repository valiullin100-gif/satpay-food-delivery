import { useParams } from 'react-router-dom'
import { useState } from 'react'
import './Pages.css'

interface Dish {
  id: number
  name: string
  price: number
  description: string
  emoji: string
}

function Restaurant() {
  const { id } = useParams()
  const [dishes] = useState<Dish[]>([
    { id: 1, name: 'Маргарита', price: 450, description: 'Классическая пицца', emoji: '🍕' },
    { id: 2, name: 'Пепперони', price: 520, description: 'С острой колбасой', emoji: '🍕' },
    { id: 3, name: 'Сыр четырех видов', price: 580, description: 'Сырная пицца', emoji: '🧀' },
  ])

  const handleAddToCart = (dish: Dish) => {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]')
    cart.push(dish)
    localStorage.setItem('cart', JSON.stringify(cart))
    alert(`${dish.name} добавлено в корзину!`)
  }

  return (
    <div className="page">
      <h1>📍 Ресторан #{id}</h1>
      <p>Выберите блюда для заказа</p>
      <div className="dishes-grid">
        {dishes.map((dish) => (
          <div key={dish.id} className="dish-card">
            <div className="dish-image">{dish.emoji}</div>
            <h3>{dish.name}</h3>
            <p>{dish.description}</p>
            <p className="dish-price">{dish.price} ₸</p>
            <button onClick={() => handleAddToCart(dish)}>Добавить в корзину</button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Restaurant
