# 🍕 Satpay Food Delivery

Сервис доставки еды в Сатпаеве с интеграцией платежной системы Satpay.

## 📁 Структура проекта

```
satpay-food-delivery/
├── frontend/                 # React приложение
│   ├── src/
│   │   ├── components/      # React компоненты
│   │   ├── pages/          # Страницы приложения
│   │   ├── App.tsx         # Главный компонент
│   │   └── main.tsx        # Entry point
│   ├── vite.config.ts      # Vite конфигурация
│   └── package.json
├── backend/                  # Express сервер
│   ├── src/
│   │   ├── routes/         # API routes
│   │   ├── middleware/     # Middleware
│   │   ├── migrations/     # Database migrations
│   │   └── server.ts       # Главный файл
│   ├── prisma/
│   │   └── schema.prisma   # Database schema
│   └── package.json
└── README.md
```

## 🚀 Установка

### Frontend

```bash
cd frontend
npm install
npm run dev
```

### Backend

```bash
cd backend
npm install
npm run migrate
npm run dev
```

## 📦 Зависимости

### Frontend
- React 18
- React Router DOM
- Vite

### Backend
- Express
- Prisma ORM
- PostgreSQL
- JWT для аутентификации
- bcryptjs для хеширования паролей

## 🔧 Конфигурация

### Backend .env

```
PORT=3001
NODE_ENV=development
DATABASE_URL="postgresql://user:password@localhost:5432/satpay"
JWT_SECRET="your-secret-key"
```

## 📝 API Endpoints

### Authentication
- `POST /api/auth/register` - Регистрация
- `POST /api/auth/login` - Вход

### Restaurants
- `GET /api/restaurants` - Список ресторанов
- `GET /api/restaurants/:id` - Детали ресторана

### Orders
- `POST /api/orders` - Создать заказ
- `GET /api/orders/my-orders` - Мои заказы

## 🗄️ Database

Проект использует PostgreSQL с Prisma ORM.

Модели:
- User
- Restaurant
- Dish
- Order
- OrderItem

## 📱 Функциональность

✅ Просмотр ресторанов
✅ Просмотр блюд ресторана
✅ Добавление блюд в корзину
✅ Оформление заказа
✅ Аутентификация пользователя
✅ История заказов

## 🔐 Безопасность

- JWT токены для аутентификации
- Хеширование паролей bcryptjs
- CORS для защиты API
- Валидация данных

## 📄 Лицензия

MIT
