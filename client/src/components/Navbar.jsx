import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/authContext";
import Logo from "../img/Logo.png";

function Navbar() {
  const { currentUser, logout } = useContext(AuthContext);

  return (
    <div className="navbar">
      <div className="container">
        <div className="logo">
          <img src={Logo} alt="" />
        </div>
        <div className="links">
          <Link className="link" to="/cat=art">
            <h6>ART</h6>
          </Link>
          <Link className="link" to="/cat=science">
            <h6>SCIENCE</h6>
          </Link>
          <Link className="link" to="/cat=technology">
            <h6>technology</h6>
          </Link>
          <Link className="link" to="/cat=cinema">
            <h6>cinema</h6>
          </Link>
          <Link className="link" to="/cat=design">
            <h6>design</h6>
          </Link>
          <Link className="link" to="/cat=food">
            <h6>food</h6>
          </Link>
          <span>{currentUser?.username}</span>
          {currentUser ? (
            <span onClick={logout}>Logout</span>
          ) : (
            <Link to="/login" className="link">
              Login
            </Link>
          )}
          <span className="write">
            <Link to="/write" className="link">
              Write
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
