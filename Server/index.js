import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();
import cookieParser from 'cookie-parser';
import morgan from 'morgan';
import helmet from 'helmet';
import connectDB from './config/connectDB.js';
import userRouter from './route/user.route.js';
import categoryRouter from './route/category.route.js';
import productRouter from './route/product.route.js';
import cartRouter from './route/cart.route.js';
import myListRouter from './route/mylist.route.js';
import addressRouter from './route/address.route.js';

const app = express();

// Modify CORS setup
const corsOptions = {
  origin: true,
  credentials: true
};
app.use(cors(corsOptions));

// Parse JSON and cookies
app.use(express.json());
app.use(cookieParser());

// Logging
app.use(morgan('dev'));

// Security headers
app.use(helmet({
  crossOriginOpenerPolicy: false
}));

// Basic test route
app.get("/", (request, response) => {
  response.json({
    message: "Server is running on port " + process.env.PORT
  });
});

app.use('/api/user',userRouter)
app.use('/api/category',categoryRouter)
app.use('/api/product',productRouter)
app.use('/api/cart',cartRouter)
app.use('/api/myList',myListRouter)
app.use('/api/address',addressRouter)

// Connect to database and start server
connectDB().then(() => {
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}).catch(err => {
  console.error("Database connection failed:", err);
});