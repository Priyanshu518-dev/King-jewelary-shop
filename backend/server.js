
 import express from "express";
 import dotenv from "dotenv";
 import authRoutes from "./routes/auth.route.js";
 import productRoutes from "./routes/product.route.js";
 import cookieParser from "cookie-parser";
 import { connect } from "mongoose";
 import { connectDB } from "./lib/db.js";
 import couponRoutes from "./routes/coupon.route.js";
 import cartRoutes from "./routes/cart.route.js";
 import paymentRoutes from "./routes/payment.route.js";
 import analyticsRoutes from "./routes/analytics.route.js"
 dotenv.config();
 const app =express();
 const PORT =process.env.PORT||5000;
 console.log(process.env.PORT);
 app.use(express.json());  
 app.use(cookieParser());
 app.use("/api/auth",authRoutes);
 app.use("/api/products",productRoutes);
 app.use("/api/cart",cartRoutes);
 app.use("/api/coupons",couponRoutes);
 app.use("/api/payments",paymentRoutes);     
 app.use("/api/analytics",analyticsRoutes);

 app.listen(PORT,()=>{
    console.log("server is running on http://localhost:"+PORT);
    connectDB();
 });
 //refreshToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2OTViNGY0NTY2Y2UzYzQ1NWYwNTgxYzYiLCJpYXQiOjE3Njc2MjAzODYsImV4cCI6MTc2ODIyNTE4Nn0.hz1bzhM7hgtKuyVLcHR4CnG1ygcAtMlg77SV2-a18KQ; Path=/; HttpOnly; Expires=Mon, 12 Jan 2026 13:39:46 GMT;
 //accessToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2OTViNGY0NTY2Y2UzYzQ1NWYwNTgxYzYiLCJpYXQiOjE3Njc2MjAzOTksImV4cCI6MTc2NzYyMTI5OX0.9jNoSs_BdqEXDQ2lX0dLvCdaYoiOx6Gqi1HcN9b7lZw; Path=/; HttpOnly; Expires=Mon, 05 Jan 2026 13:54:59 GMT;