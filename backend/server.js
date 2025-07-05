import express from "express";
import cors from "cors";
import 'dotenv/config';
import connectDB from "./config/mongodb.js";
import connectCloudinary from "./config/cloudinary.js";

import userRouter from "./routes/userRoute.js";
import doctorRouter from "./routes/doctorRoute.js";
import adminRouter from "./routes/adminRoute.js";

// Connect to DB & Cloudinary
await connectDB();           // Ensure connection before anything else
connectCloudinary();         // Optional: can also be awaited if needed

// App config
const app = express();
const port = process.env.PORT || 4000;

// Middlewares
app.use(cors());
app.use(express.json());

// API Routes
app.use("/api/user", userRouter);
app.use("/api/admin", adminRouter);
app.use("/api/doctor", doctorRouter);

// Health check route
app.get("/", (req, res) => {
  res.send("✅ API Working");
});

// Start server
app.listen(port, () => {
  console.log(`🚀 Server started on PORT: ${port}`);
});
