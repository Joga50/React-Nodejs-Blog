import express from "express";
import postRoutes from "./routes/posts.js";
// import userRoutes from "./routes/users.js";
// import authRoutes from "./routes/auth.js";

const app = express();

app.use(express.json());

// POSTS ROUTE
app.use("/api/posts", postRoutes);
// USER ROUTE
// app.use("/api/users", userRoutes);
// AUTH ROUTE
// app.use("/api/auth", authRoutes);

app.get("/test", (req, res) => {
  res.json("working");
});

app.listen(8800, () => {
  console.log("connected");
});
