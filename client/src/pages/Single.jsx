import React from "react";
import { Link } from "react-router-dom";
import Menu from "../components/Menu";

function Single() {
  return (
    <div className="single">
      <div className="content">
        <img
          src="https://www.lanc.org.uk/wp-content/uploads/2011/07/ASD.png"
          alt=""
        />
        <div className="user">
          <img
            src="https://www.lanc.org.uk/wp-content/uploads/2011/07/ASD.png"
            alt=""
          />
          <div className="info">
            <span>jose</span>
            <p>Postaed 2 days ago</p>
          </div>
          <div className="edit">
            <Link to={`/write?edit=2`}>
              <i class="bx bx-edit"></i>
            </Link>
            <i class="bx bx-trash"></i>
          </div>
        </div>
        <h1>
          aaaaaaaaaaaaaaaaaaaaaaaaaaaaaasdkjadsglkjasdgkajdsgñlkadsjgñlkadgjasgsgasdga
        </h1>
        <p>
          aaaaaaaaaaaaaaaaaaaaaaaaaaaaaasdkjadsglkjasdgkajdsgñlkadsjgñlkadgjasgsgasdgaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaasdkjadsglkjasdgkajdsgñlkadsjgñlkadgjasgsgasdgaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaasdkjadsglkjasdgkajdsgñlkadsjgñlkadgjasgsgasdgaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaasdkjadsglkjasdgkajdsgñlkadsjgñlkadgjasgsgasdgaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaasdkjadsglkjasdgkajdsgñlkadsjgñlkadgjasgsgasdgaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaasdkjadsglkjasdgkajdsgñlkadsjgñlkadgjasgsgasdgaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaasdkjadsglkjasdgkajdsgñlkadsjgñlkadgjasgsgasdgaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaasdkjadsglkjasdgkajdsgñlkadsjgñlkadgjasgsgasdgaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaasdkjadsglkjasdgkajdsgñlkadsjgñlkadgjasgsgasdgaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaasdkjadsglkjasdgkajdsgñlkadsjgñlkadgjasgsgasdgaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaasdkjadsglkjasdgkajdsgñlkadsjgñlkadgjasgsgasdgaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaasdkjadsglkjasdgkajdsgñlkadsjgñlkadgjasgsgasdgaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaasdkjadsglkjasdgkajdsgñlkadsjgñlkadgjasgsgasdgaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaasdkjadsglkjasdgkajdsgñlkadsjgñlkadgjasgsgasdgaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaasdkjadsglkjasdgkajdsgñlkadsjgñlkadgjasgsgasdgaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaasdkjadsglkjasdgkajdsgñlkadsjgñlkadgjasgsgasdgaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaasdkjadsglkjasdgkajdsgñlkadsjgñlkadgjasgsgasdgaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaasdkjadsglkjasdgkajdsgñlkadsjgñlkadgjasgsgasdgaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaasdkjadsglkjasdgkajdsgñlkadsjgñlkadgjasgsgasdgaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaasdkjadsglkjasdgkajdsgñlkadsjgñlkadgjasgsgasdgaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaasdkjadsglkjasdgkajdsgñlkadsjgñlkadgjasgsgasdgaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaasdkjadsglkjasdgkajdsgñlkadsjgñlkadgjasgsgasdgaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaasdkjadsglkjasdgkajdsgñlkadsjgñlkadgjasgsgasdgaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaasdkjadsglkjasdgkajdsgñlkadsjgñlkadgjasgsgasdgaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaasdkjadsglkjasdgkajdsgñlkadsjgñlkadgjasgsgasdgaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaasdkjadsglkjasdgkajdsgñlkadsjgñlkadgjasgsgasdgaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaasdkjadsglkjasdgkajdsgñlkadsjgñlkadgjasgsgasdgaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaasdkjadsglkjasdgkajdsgñlkadsjgñlkadgjasgsgasdgaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaasdkjadsglkjasdgkajdsgñlkadsjgñlkadgjasgsgasdgaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaasdkjadsglkjasdgkajdsgñlkadsjgñlkadgjasgsgasdgaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaasdkjadsglkjasdgkajdsgñlkadsjgñlkadgjasgsgasdgaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaasdkjadsglkjasdgkajdsgñlkadsjgñlkadgjasgsgasdga
        </p>
        <Menu />
      </div>
      <div className="menu"></div>
    </div>
  );
}

export default Single;
