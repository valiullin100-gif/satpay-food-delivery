import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './Pages.css'

interface Restaurant {
  id: number
  name: string
  rating: number
  emoji: string
}

function Home() {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([
    { id: 1, name: 'Пиццерия "Марко"', rating: 4.8, emoji: '🍕' },
    { id: 2, name: 'Суши бар "Токио"', rating: 4.9, emoji: '🍣' },
    { id: 3, name: 'Бургерная "Смак"', rating: 4.7, emoji: '🍔' },
    { id: 4, name: 'Кофейня "Арома"', rating: 4.6, emoji: '☕' },
  ])

  return (
    <div className="page">
      <h1>🍕 Доставка еды в Сатпаеве</h1>
      <p>Выберите ваш любимый ресторан и закажите вкусную еду с доставкой на дом!</p>
      <div className="restaurants-grid">
        {restaurants.map((restaurant) => (
          <Link
            key={restaurant.id}
            to={`/restaurant/${restaurant.id}`}
            className="restaurant-card"
          >
            <div className="restaurant-image">{restaurant.emoji}</div>
            <h3>{restaurant.name}</h3>
            <p>Быстрая доставка</p>
            <div className="restaurant-rating">⭐ {restaurant.rating}</div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Home
