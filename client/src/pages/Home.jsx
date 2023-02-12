import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";

function Home() {
  const [posts, setPosts] = useState([]);

  const category = useLocation().search;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/posts${category}`);
        setPosts(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [category]);

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
  return (
    <div className="home">
      <div className="posts">
        {posts.map((post) => (
          <div className="post" key={post.id}>
            <div className="img">
              <img src={post.img} alt="dgfggf" />
            </div>
            <div className="content">
              <Link className="link" to={`/post/${post.id}`}>
                <h1>{post.title}</h1>
              </Link>
              <p>{post.desc}</p>
              <button>Read More</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
