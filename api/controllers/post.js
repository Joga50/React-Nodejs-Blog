import { database } from "../database.js";
import jwt from "jsonwebtoken";

export const getPosts = (req, res) => {
  const q = req.query.category
    ? "SELECT * FROM posts WHERE category=?"
    : "SELECT * FROM posts";

  database.query(q, [req.query.category], (err, data) => {
    if (err) return res.status(500).send(err);

    return res.status(200).json(data);
  });
};
export const getPost = (req, res) => {
  const q =
    "SELECT p.id, `username`, `title`, `desc`, p.img, u.img AS userImg, `category`, `date` FROM users u JOIN posts p ON u.id = p.uid WHERE p.id = ?";

  database.query(q, [req.params.id], (err, data) => {
    if (err) return res.json(err);

    return res.status(500).json(data[0]);
  });
};

export const addPost = (req, res) => {
  res.json(" fromcontroller");
};
// DELETE
export const deletePost = (req, res) => {
  const token = req.cookies.access_token;
  if (!token) return res.status(401).json("Noth authenitcated!");

  jwt.verify(token, "jwtkey", (err, userInfo) => {
    if (err) return res.status(403).json("token not valid");

    const postId = req.params.id;
    const q = "DELETE FROM posts WHERE `id` = ? AND `uid` = ?";

    database.query(q, [postId, userInfo.id], (err, data) => {
      if (err) return res.status(403).json("you can delete");

      return res.json("post deleted");
    });
  });
};
export const updatePost = (req, res) => {
  res.json(" fromcontroller");
};
