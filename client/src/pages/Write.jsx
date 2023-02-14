import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import moment from "moment";

function Write() {
  const state = useLocation().state;

  const [value, setValue] = useState(state?.title || "");
  const [title, setTitle] = useState(state?.desc || "");
  const [file, setFile] = useState(null);
  const [category, setCategory] = useState(state?.category || "");
  const navigate = useNavigate();

  const upload = async () => {
    try {
      const formData = new FormData();
      formData.append("file", file);
      const res = await axios.post("/upload", formData);
      return res.data;
    } catch (err) {
      console.log(err);
    }
  };

  const handleClick = async (e) => {
    e.preventDefault();
    const imageUrl = await upload();

    try {
      state
        ? await axios.put(`/posts/${state.id}`, {
            title,
            desc: value,
            category,
            img: file ? imageUrl : "",
          })
        : await axios.post(`/posts/`, {
            title,
            desc: value,
            category,
            img: file ? imageUrl : "",
            date: moment(Date.now()).format("YYYY-MM-DD HH:mm:ss"),
          });
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  console.log(value);
  return (
    <div className="add">
      <div className="content">
        <input
          type="text"
          value={title}
          placeholder="title"
          onChange={(e) => setTitle(e.target.value)}
        />
        <div className="editorContainer">
          <ReactQuill theme="snow" value={value} onChange={setValue} />
        </div>
      </div>
      <div className="menu">
        <div className="item">
          <h1>Publish</h1>
          <span>
            <b>Status:</b> Draft
          </span>
          <span>
            <b>Visibility:</b> Public
          </span>
          <input
            style={{ display: "none" }}
            type="file"
            id="file"
            name=""
            onChange={(e) => setFile(e.target.files[0])}
          />
          <label className="file" htmlFor="file">
            Upload Image
          </label>
          <div className="buttons">
            <button>save as a draf</button>
            <button onClick={handleClick}>Publish</button>
          </div>
        </div>
        <div className="item">
          <h1>Category</h1>
          <div className="category">
            <input
              checked={category === "art"}
              type="radio"
              name="category"
              id="art"
              value="art"
              onChange={(e) => setCategory(e.target.value)}
            />
            <label htmlFor="art">Art</label>
          </div>
          <div className="category">
            <input
              checked={category === "science"}
              type="radio"
              name="category"
              id="science"
              value="science"
              onChange={(e) => setCategory(e.target.value)}
            />
            <label htmlFor="science">science</label>
          </div>
          <div className="category">
            <input
              checked={category === "technology"}
              type="radio"
              name="category"
              id="technology"
              value="technology"
              onChange={(e) => setCategory(e.target.value)}
            />
            <label htmlFor="technology">technology</label>
          </div>
          <div className="category">
            <input
              checked={category === "cinema"}
              type="radio"
              name="category"
              id="cinema"
              value="cinema"
              onChange={(e) => setCategory(e.target.value)}
            />
            <label htmlFor="cinema">cinema</label>
          </div>
          <div className="category">
            <input
              checked={category === "design"}
              type="radio"
              name="category"
              id="design"
              value="design"
              onChange={(e) => setCategory(e.target.value)}
            />
            <label htmlFor="design">design</label>
          </div>
          <div className="category">
            <input
              checked={category === "food"}
              type="radio"
              name="category"
              id="food"
              value="food"
              onChange={(e) => setCategory(e.target.value)}
            />
            <label htmlFor="food">food</label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Write;
