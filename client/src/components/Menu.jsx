import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
// const posts = [
//   {
//     title: "per234ra",
//     img: "https://www.lanc.org.uk/wp-content/uploads/2011/07/ASD.png",
//     id: "1",
//     desc: "hola",
//   },
//   {
//     title: "perra",
//     img: "https://www.lanc.org.uk/wp-content/uploads/2011/07/ASD.png",
//     id: "3333333333",
//     desc: "hola",
//   },
// ];

function Menu({ category }) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/posts/?category=${category}`);
        setPosts(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [category]);
  return (
    <div className="menu">
      <h1>Other posts you may have</h1>
      {posts.map((post) => (
        <div className="post" key={post.id}>
          <img src={`../upload/${post?.img}`} alt="" />
          <h2>{post.title}</h2>
          <button>read more</button>
        </div>
      ))}
    </div>
  );
}

export default Menu;
