# E-Commerce Application

A full-stack e-commerce platform built with Node.js, Express, MongoDB, and React. This application provides a complete shopping experience with user authentication, product management, shopping cart functionality, and secure payment processing through Cashfree Payment Gateway.

## 🚀 Features

### Core Functionality
- **User Authentication**: JWT-based authentication with registration and login
- **Product Management**: Browse products by categories (Mouse, Shoes, etc.)
- **Shopping Cart**: Add, remove, and manage cart items
- **User Profile**: View and manage user information and orders
- **Responsive Design**: Mobile-friendly interface built with Tailwind CSS

### Payment Integration
- **Cashfree Payment Gateway**: Secure payment processing
- **Sandbox Environment**: Safe testing environment for payments
- **Order Management**: Complete order lifecycle tracking
- **Payment Verification**: Automatic payment status verification and updates

## 🛠️ Technology Stack

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **JWT** - JSON Web Tokens for authentication
- **Cashfree PG SDK** - Payment gateway integration
- **EJS** - Template engine for server-side rendering

### Frontend
- **React** - UI library
- **Redux** - State management
- **React Router** - Client-side routing
- **Axios** - HTTP client
- **Tailwind CSS** - Utility-first CSS framework
- **Cashfree JS SDK** - Frontend payment integration

## 📁 Project Structure

```
/
├── Backend-V3/
│   ├── controller/          # Business logic controllers
│   │   ├── authController.js
│   │   ├── cartController.js
│   │   ├── payController.js
│   │   ├── prodController.js
│   │   └── profileController.js
│   ├── db/
│   │   └── mongodb.js       # Database connection
│   ├── middleware/
│   │   └── authMidware.js   # Authentication middleware
│   ├── routes/              # API route handlers
│   │   ├── authRoutes.js
│   │   ├── cartRoutes.js
│   │   ├── homeRoutes.js
│   │   ├── payRoutes.js
│   │   ├── prodRoutes.js
│   │   └── profileRoutes.js
│   ├── schema/              # MongoDB schemas
│   │   ├── Cart.js
│   │   ├── orders.js
│   │   ├── payment.js
│   │   ├── product.js
│   │   └── user.js
│   ├── views/               # EJS templates
│   ├── app.js               # Main server file
│   └── package.json
├── Frontend-V3/
│   ├── public/              # Static assets
│   ├── src/
│   │   ├── components/      # Reusable React components
│   │   ├── pages/           # Page components
│   │   ├── context/         # React context
│   │   ├── helpers/         # Utility functions
│   │   └── assets/          # Images and media
│   └── package.json
└── README.md
```

## 🔧 Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- MongoDB
- npm or yarn

### Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd Backend-V3
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the Backend-V3 directory with the following variables:
   ```env
   PORT=3000
   MONGODB_URI=mongodb://localhost:27017/ecommerce
   JWT_SECRET=your_jwt_secret_key
   CASHFREE_CLIENT_ID=your_cashfree_client_id
   CASHFREE_CLIENT_SECRET=your_cashfree_client_secret
   ```

4. Start the backend server:
   ```bash
   npm run dev  # For development with nodemon
   # or
   npm start    # For production
   ```

### Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd Frontend-V3
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

The frontend will run on `http://localhost:5173` and the backend on `http://localhost:3000`.

## 💳 Payment Integration Setup

### Cashfree Configuration

1. **Create a Cashfree Account**: Sign up at [Cashfree](https://www.cashfree.com/)

2. **Get API Keys**:
   - Go to Dashboard → Payment Gateway → API Keys
   - Copy your Client ID and Client Secret

3. **Environment Setup**:
   - The application uses Cashfree's **Sandbox** environment for testing
   - For production, change `Cashfree.XEnvironment = Cashfree.Environment.PRODUCTION` in `payController.js`

### Payment Flow

1. **Order Creation**: User initiates payment with order details
2. **Session Generation**: Backend creates payment session with Cashfree
3. **Payment Processing**: Frontend handles payment through Cashfree JS SDK
4. **Verification**: Backend verifies payment status and updates database
5. **Order Completion**: Payment details stored in MongoDB

### Payment Schema

```javascript
{
  order_id: String,
  customer_details: {
    customer_id: String,
    customer_name: String,
    customer_email: String,
    customer_phone: String
  },
  payment_receipt: {
    cf_payment_id: String,
    payment_amount: Number,
    payment_time: Date,
    payment_status: String
  },
  order_date: Date
}
```

## 🔐 API Endpoints

### Authentication
- `POST /auth/register` - User registration
- `POST /auth/login` - User login

### Products
- `GET /product` - Get all products
- `GET /product/:id` - Get product by ID
- `GET /product/category/:category` - Get products by category

### Cart
- `POST /cart/add` - Add item to cart
- `GET /cart` - Get user's cart
- `DELETE /cart/remove/:id` - Remove item from cart

### Payment
- `POST /payment/createOrder` - Create payment order
- `GET /payment?order_id={id}` - Get payment session ID
- `POST /payment/process` - Process and save payment data
- `POST /payment/verify?order_id={id}` - Verify payment status

### Profile
- `GET /profile` - Get user profile
- `PUT /profile/update` - Update user profile

## 🗄️ Database Schema

### User
```javascript
{
  name: String,
  email: String,
  password: String,
  phone: String,
  address: String
}
```

### Product
```javascript
{
  name: String,
  price: Number,
  description: String,
  category: String,
  image: String,
  asin: String
}
```

### Cart
```javascript
{
  userId: ObjectId,
  products: [{
    productId: ObjectId,
    quantity: Number
  }],
  totalAmount: Number
}
```

### Order
```javascript
{
  userId: ObjectId,
  products: [Object],
  totalAmount: Number,
  status: String,
  paymentId: String
}
```

## 🚀 Deployment

### Backend Deployment
1. Set environment variables for production
2. Change Cashfree environment to PRODUCTION
3. Deploy to services like Heroku, AWS, or DigitalOcean

### Frontend Deployment
1. Build the production bundle:
   ```bash
   npm run build
   ```
2. Deploy the `build` folder to static hosting services like Netlify, Vercel, or AWS S3

## 🧪 Testing

### Payment Testing
- Use Cashfree's test cards for payment testing
- Test both successful and failed payment scenarios
- Verify webhook handling for payment confirmations

### API Testing
- Use tools like Postman or Insomnia for API testing
- Test all CRUD operations
- Verify authentication and authorization

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📝 License

This project is licensed under the ISC License.

## 📞 Support

For support or questions, please contact the development team.

## 🔄 Future Enhancements

- [ ] Multi-vendor support
- [ ] Advanced search and filtering
- [ ] Order tracking system
- [ ] Email notifications
- [ ] Admin dashboard
- [ ] Inventory management
- [ ] Wishlist functionality
- [ ] Product reviews and ratings
