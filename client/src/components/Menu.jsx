import React from "react";
const posts = [
  {
    title: "per234ra",
    img: "https://www.lanc.org.uk/wp-content/uploads/2011/07/ASD.png",
    id: "1",
    desc: "hola",
  },
  {
    title: "perra",
    img: "https://www.lanc.org.uk/wp-content/uploads/2011/07/ASD.png",
    id: "3333333333",
    desc: "hola",
  },
];

function Menu() {
  return (
    <div className="menu">
      <h1>Other posts you may have</h1>
      {posts.map((post) => (
        <div className="post" key={post.id}>
          <img src={post.img} alt="" />
          <h2>{post.title}</h2>
          <button>read more</button>
        </div>
      ))}
    </div>
  );
}

export default Menu;
