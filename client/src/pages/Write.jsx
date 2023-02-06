import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

function Write() {
  const [value, setValue] = useState("");
  console.log(value);
  return (
    <div className="add">
      <div className="content">
        content
        <input placeholder="title" />
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
          <input style={{ display: "none" }} type="file" id="name" name="" />
          <label className="file" htmlFor="file">
            Upload Image
          </label>
          <div className="buttons">
            <button>save as a draf</button>
            <button>Update</button>
          </div>
        </div>
        <div className="item">
          <h1>Category</h1>
          <div className="category">
            <input type="radio" name="category" id="art" value="art" />
            <label htmlFor="art">Art</label>
          </div>
          <div className="category">
            <input type="radio" name="category" id="science" value="science" />
            <label htmlFor="science">science</label>
          </div>
          <div className="category">
            <input
              type="radio"
              name="category"
              id="technology"
              value="technology"
            />
            <label htmlFor="technology">technology</label>
          </div>
          <div className="category">
            <input type="radio" name="category" id="cinema" value="cinema" />
            <label htmlFor="cinema">cinema</label>
          </div>
          <div className="category">
            <input type="radio" name="category" id="design" value="design" />
            <label htmlFor="design">design</label>
          </div>
          <div className="category">
            <input type="radio" name="category" id="food" value="food" />
            <label htmlFor="food">food</label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Write;

<span>
  <p></p>
</span>;
