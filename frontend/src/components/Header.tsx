import { Link } from 'react-router-dom'
import './Header.css'

function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo">
          🍕 Satpay Food Delivery
        </Link>
        <nav className="nav">
          <Link to="/">Главная</Link>
          <Link to="/order">Мой заказ</Link>
        </nav>
      </div>
    </header>
  )
}

export default Header
