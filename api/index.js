import express from "express";
import postRoutes from "./routes/posts.js";
import userRoutes from "./routes/users.js";
import authRoutes from "./routes/auth.js";
import cookieParser from "cookie-parser";

const app = express();

app.use(express.json());
app.use(cookieParser());

// POSTS ROUTE
app.use("/api/posts", postRoutes);
// USER ROUTE
app.use("/api/users", userRoutes);
// AUTH ROUTE
app.use("/api/auth", authRoutes);

app.listen(8800, () => {
  console.log("connected");
});
