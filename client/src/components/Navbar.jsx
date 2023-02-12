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
          <Link to="/">
            <img src={Logo} alt="" />
          </Link>
        </div>

        <div className="links">
          <Link className="link" to="/?category=art">
            <h6>ART</h6>
          </Link>
          <Link className="link" to="/?category=science">
            <h6>SCIENCE</h6>
          </Link>
          <Link className="link" to="/?category=technology">
            <h6>technology</h6>
          </Link>
          <Link className="link" to="/?category=cinema">
            <h6>cinema</h6>
          </Link>
          <Link className="link" to="/?category=design">
            <h6>design</h6>
          </Link>
          <Link className="link" to="/?category=food">
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
