import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import Menu from "../components/Menu";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import moment from "moment";
import { AuthContext } from "../context/authContext";

function Single() {
  const [post, setPost] = useState({});

  const category = useLocation();
  const navigate = useNavigate();

  const postId = category.pathname.split("/")[2];

  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/posts/${postId}`);
        setPost(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [postId]);

  const handleDelete = async () => {
    try {
      await axios.delete(`/posts/${postId}`);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="single">
      <div className="content">
        <img src={post?.img} alt="asdasda" />
        <div className="user">
          {post.userImg && <img src={post.userImg} alt="" />}
          <div className="info">
            <span>{post.username}</span>
            <p>Posted {moment(post.date).fromNow()}</p>
          </div>
          {currentUser.username === post.username && (
            <div className="edit">
              <Link to={`/write?edit=2`} state={post}>
                <i class="bx bx-edit" style={{ fontSize: "30px" }}></i>
              </Link>
              <i
                onClick={handleDelete}
                class="bx bx-trash"
                style={{ fontSize: "30px", marginLeft: "5px" }}
              ></i>
            </div>
          )}
        </div>
        <h1>{post.title}</h1>
        <p>{post.desc}</p>
      </div>
      <Menu category={post.category} />
    </div>
  );
}

export default Single;
