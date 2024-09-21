import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import foodRouter from "./routes/foodRoute.js";
import userRouter from "./routes/userRoute.js";
import "dotenv/config";
import cartRouter from "./routes/cartRoute.js";
import orderRouter from "./routes/orderRoute.js";
import path from "path";
import { fileURLToPath } from "url";

// app config
const app = express();
const port = 4000;

// Fix for __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middleware
app.use(express.json());
app.use(cors());

// DB connection
connectDB();


app.get("/", (req, res) => {
    res.redirect("/app");
});


// Serve the frontend static files



// Serve the admin panel static files


// API Endpoints
app.use("/api/food", foodRouter);
app.use("/images", express.static("uploads"));
app.use("/api/user", userRouter);
app.use("/api/cart", cartRouter);
app.use("/api/order", orderRouter);

// Frontend SPA catch-all route for /app
app.use('/app', express.static(path.join(__dirname, "../frontend/dist")));
app.use('/admin', express.static(path.join(__dirname, "../admin/dist")));

app.get("/app/*", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend/dist/index.html"));
});

app.get("/admin/*", (req, res) => {
    res.sendFile(path.join(__dirname, "../admin/dist/index.html"));
});
// Start the server
app.listen(port, () => {
    console.log(`Server Started on http://localhost:${port}`);
});
