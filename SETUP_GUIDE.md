# SOMMY'S PLACE - Quick Start Guide

## What's Been Created

This is a fully-featured MERN stack e-commerce application with:

### ✅ Frontend (React + Vite)
- **Pages**: Home, Products, Product Details, Cart, Checkout, Login, Register, Account
- **Components**: Navbar, Footer, ProductCard
- **Features**: Shopping cart, user authentication, order history, responsive design
- **State Management**: React Context API
- **Styling**: Custom CSS with responsive design

### ✅ Backend (Node.js + Express)
- **Models**: User, Product, Order, Cart
- **Authentication**: JWT-based auth with password hashing (bcryptjs)
- **Routes**: Auth, Products, Orders
- **Database**: MongoDB with Mongoose ODM

---

## Installation & Setup

### Step 1: Install Dependencies

**Frontend:**
```bash
npm install
```

**Backend:**
```bash
cd server
npm install
cd ..
```

### Step 2: Setup MongoDB

You have two options:

**Option A: Local MongoDB**
```bash
# Install MongoDB Community Edition
# Start MongoDB service
mongod
```

**Option B: MongoDB Atlas (Cloud)**
1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a free account and cluster
3. Get your connection string

### Step 3: Configure Environment Variables

**Create `/server/.env` file:**
```env
MONGODB_URI=mongodb://localhost:27017/sommy-place
JWT_SECRET=your_super_secret_key_here_change_this
PORT=5000
NODE_ENV=development
```

Or if using MongoDB Atlas:
```env
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/sommy-place
JWT_SECRET=your_super_secret_key_here_change_this
PORT=5000
NODE_ENV=development
```

### Step 4: Run the Application

**Terminal 1 - Start Backend:**
```bash
cd server
npm run dev
```
Backend runs on: `http://localhost:5000`

**Terminal 2 - Start Frontend:**
```bash
npm run dev
```
Frontend runs on: `http://localhost:3000`

---

## Project Structure Overview

```
Sommy/
├── server/
│   ├── models/
│   │   ├── User.js          # User schema & password hashing
│   │   ├── Product.js       # Product schema with reviews
│   │   ├── Order.js         # Order schema
│   │   └── Cart.js          # Cart schema
│   ├── routes/
│   │   ├── auth.js          # Register, login, profile
│   │   ├── products.js      # CRUD + reviews
│   │   └── orders.js        # Order management
│   ├── middleware/
│   │   └── auth.js          # JWT verification
│   ├── server.js            # Express server entry
│   └── package.json
│
├── src/
│   ├── components/
│   │   ├── Navbar.jsx       # Navigation bar
│   │   ├── Footer.jsx       # Footer
│   │   └── ProductCard.jsx  # Product card
│   ├── pages/
│   │   ├── Home.jsx         # Landing page
│   │   ├── Products.jsx     # Products listing
│   │   ├── ProductDetails.jsx  # Single product
│   │   ├── Cart.jsx         # Shopping cart
│   │   ├── Checkout.jsx     # Order placement
│   │   ├── Login.jsx        # User login
│   │   ├── Register.jsx     # User registration
│   │   └── Account.jsx      # User profile & orders
│   ├── context/
│   │   └── AppContext.jsx   # Global state (user, cart, auth)
│   ├── api/
│   │   └── api.js           # Axios instance + API calls
│   ├── styles/
│   │   ├── Global.css
│   │   ├── Navbar.css
│   │   ├── Footer.css
│   │   ├── Home.css
│   │   ├── Products.css
│   │   ├── ProductCard.css
│   │   ├── ProductDetails.css
│   │   ├── Cart.css
│   │   ├── Checkout.css
│   │   ├── Auth.css
│   │   └── Account.css
│   ├── App.jsx              # Main app with routing
│   └── main.jsx             # React entry point
│
├── vite.config.js
├── package.json
├── index.html
└── README.md
```

---

## Key Features Implemented

### 1. **User Authentication**
- Register: POST `/api/auth/register`
- Login: POST `/api/auth/login`
- JWT tokens stored in localStorage
- Protected routes require authentication

### 2. **Product Management**
- Browse all products
- Search products
- Filter by category
- Pagination (10 products per page)
- View product details
- Add product reviews (authenticated users)

### 3. **Shopping Cart**
- Add/remove products
- Update quantities
- Calculate totals
- Persistent state with Context API

### 4. **Order Processing**
- Place orders with shipping address
- Select payment method (Credit Card, Debit Card, PayPal, COD)
- Order history in user account
- Track order status

### 5. **User Account**
- View profile information
- Update personal details
- View order history
- Track order status

### 6. **Responsive Design**
- Mobile-first approach
- Tested on desktop, tablet, and mobile
- Flexible grids and layouts
- Touch-friendly UI

---

## API Endpoints Reference

### Authentication
```
POST   /api/auth/register     - Create new user
POST   /api/auth/login        - Login user
GET    /api/auth/me           - Get current user (requires token)
PUT    /api/auth/profile      - Update profile (requires token)
```

### Products
```
GET    /api/products          - Get all products (supports pagination, search, filter)
GET    /api/products/:id      - Get single product
POST   /api/products          - Create product (admin only)
PUT    /api/products/:id      - Update product (admin only)
DELETE /api/products/:id      - Delete product (admin only)
POST   /api/products/:id/review - Add review (requires token)
```

### Orders
```
POST   /api/orders            - Create order (requires token)
GET    /api/orders            - Get user's orders (requires token)
GET    /api/orders/:id        - Get order details (requires token)
PUT    /api/orders/:id/status - Update order status (admin only)
```

---

## Testing the Application

### 1. Test Authentication
1. Go to http://localhost:3000/register
2. Create a new account
3. You'll be redirected to home and logged in
4. Click "My Account" to see your profile

### 2. Test Products
1. Click "Products" in navbar
2. Browse products, search, filter by category
3. Click "View Details" to see full product info
4. Add a review as authenticated user

### 3. Test Shopping
1. Click "Add to Cart" on any product
2. Go to Cart page
3. Adjust quantities or remove items
4. Click "Checkout"
5. Fill shipping details and complete order

### 4. Test Orders
1. After placing order, go to Account
2. View your order history
3. See order status and details

---

## Customization Guide

### Change Colors
Edit `/src/styles/Global.css`:
```css
:root {
  --primary-color: #ff6b6b;      /* Change this to your brand color */
  --secondary-color: #4ecdc4;    /* Change this too */
  --dark-color: #2c3e50;
  --light-color: #ecf0f1;
}
```

### Add New Pages
1. Create page in `/src/pages/YourPage.jsx`
2. Add route in `/src/App.jsx`:
```jsx
<Route path="/your-page" element={<YourPage />} />
```

### Add New API Routes
1. Create route file in `/server/routes/yourroute.js`
2. Import and use in `/server/server.js`
3. Add API calls in `/src/api/api.js`

### Modify Product Schema
Edit `/server/models/Product.js` and add fields, then update frontend accordingly.

---

## Production Deployment

### Frontend (Netlify/Vercel)
```bash
npm run build
# Deploy 'dist' folder to Netlify/Vercel
```

### Backend (Heroku/Railway)
```bash
# Set environment variables on hosting platform
# Deploy 'server' folder
```

---

## Troubleshooting

| Problem | Solution |
|---------|----------|
| "Cannot connect to MongoDB" | Ensure mongod is running or check Atlas connection string |
| "Port 5000/3000 already in use" | Change port in .env or vite.config.js |
| "CORS error" | Ensure backend is running on correct port |
| "API calls failing" | Check if backend is running and network tab in DevTools |
| "Styling not applied" | Clear browser cache, restart dev server |

---

## Next Steps

1. ✅ Run the application
2. ✅ Test all features
3. ✅ Add sample products to database
4. ✅ Customize colors and branding
5. 🔄 Implement payment gateway (Stripe/PayPal)
6. 🔄 Add email notifications
7. 🔄 Deploy to production

---

## Need Help?

- Check [MongoDB Docs](https://docs.mongodb.com/)
- Check [Express Docs](https://expressjs.com/)
- Check [React Docs](https://react.dev/)
- Check error messages in browser console and terminal

---

**Happy Coding! 🚀 Your SOMMY'S PLACE e-commerce platform is ready!**
