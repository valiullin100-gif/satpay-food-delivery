import { useState, useEffect } from 'react'
import './Pages.css'

interface CartItem {
  id: number
  name: string
  price: number
  emoji: string
}

function Order() {
  const [cartItems, setCartItems] = useState<CartItem[]>([])
  const [total, setTotal] = useState(0)

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]')
    setCartItems(cart)
    const sum = cart.reduce((acc: number, item: CartItem) => acc + item.price, 0)
    setTotal(sum)
  }, [])

  const handleRemove = (index: number) => {
    const newCart = cartItems.filter((_, i) => i !== index)
    setCartItems(newCart)
    localStorage.setItem('cart', JSON.stringify(newCart))
    const sum = newCart.reduce((acc: number, item: CartItem) => acc + item.price, 0)
    setTotal(sum)
  }

  const handleCheckout = async () => {
    if (cartItems.length === 0) {
      alert('Корзина пуста!')
      return
    }

    try {
      const response = await fetch('/api/orders', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          items: cartItems,
          total,
          timestamp: new Date().toISOString(),
        }),
      })

      if (response.ok) {
        alert('Заказ успешно создан! Ждите доставку.')
        localStorage.removeItem('cart')
        setCartItems([])
        setTotal(0)
      }
    } catch (error) {
      console.error('Ошибка при оформлении заказа:', error)
      alert('Ошибка при оформлении заказа')
    }
  }

  return (
    <div className="page">
      <h1>🛒 Ваш заказ</h1>
      {cartItems.length === 0 ? (
        <p>Корзина пуста. Начните заказ с главной страницы!</p>
      ) : (
        <>
          <div className="order-items">
            {cartItems.map((item, index) => (
              <div key={index} className="order-item">
                <span>{item.emoji} {item.name}</span>
                <span>{item.price} ₸</span>
                <button onClick={() => handleRemove(index)}>Удалить</button>
              </div>
            ))}
          </div>
          <div className="order-total">
            <h2>Итого: {total} ₸</h2>
            <button onClick={handleCheckout} className="checkout-btn">
              Оформить заказ
            </button>
          </div>
        </>
      )}
    </div>
  )
}

export default Order
