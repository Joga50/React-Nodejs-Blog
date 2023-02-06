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
          aaaaaaaaaaaaaaaaaaaaaaaaaaaaaasdkjadsglkjasdgkajdsgñlkadsjgñlkadg
          jasgsgasdgaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaasdkjadsglkjasdgkajdsgñlk
          adsjgñlkadgjasgsgasdgaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaasdkjadsglkjas
          dgkajdsgñlkadsjgñlkadgjasgsgasdgaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaasd
          kjadsglkjasdgkajdsgñlkadsjgñlkadgjasgsgasdgaaaaaaaaaaaaaaaaaaaaaa
          aaaaaaaaasdkjadsglkjasdgkajdsgñlkadsjgñlkadgjasgsgasdgaaaaaaaaaaa
          aaaaaaaaaaaaaaaaaaaasdkjadsglkjasdgkajdsgñlkadsjgñlkadgjasgsgasdg
          aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaasdkjadsglkjasdgkajdsgñlkadsjgñlkad
          gjasgsgasdgaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaasdkjadsglkjasdgkajdsgñl
          kadsjgñlkadgjasgsgasdgaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaasdkjadsglkja
          sdgkajdsgñlkadsjgñlkadgjasgsgasdgaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaas
          dkjadsglkjasdgkajdsgñlkadsjgñlkadgjasgsgasdgaaaaaaaaaaaaaaaaaaaaa
          aaaaaaaaaasdkjadsglkjasdgkajdsgñlkadsjgñlkadgjasgsgasdgaaaaaaaaaaa
          aaaaaaaaaaaaaaaaaaaasdkjadsglkjasdgkajdsgñlkadsjgñlkadgjasgsgasdga
          aaaaaaaaaaaaaaaaaaaaaaaaaaaaaasdkjadsglkjasdgkajdsgñlkadsjgñlkadgj
          <br></br>
          asgsgasdgaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaasdkjadsglkjasdgkajdsgñlkad
          sjgñlkadgjasgsgasdgaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaasdkjadsglkjasdgk
          ajdsgñlkadsjgñlkadgjasgsgasdgaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaasdkjad
          sglkjasdgkajdsgñlkadsjgñlkadgjasgsgasdgaaaaaaaaaaaaaaaaaaaaaaaaaaa
          aaaasdkjadsglkjasdgkajdsgñlkadsjgñlkadgjasgsgasdgaaaaaaaaaaaaaaaaa
          aaaaaaaaaaaaaasdkjadsglkjasdgkajdsgñlkadsjgñlkadgjasgsgasdgaaaaaaa
          aaaaaaaaaaaaaaaaaaaaaaaasdkjadsglkjasdgkajdsgñlkadsjgñlkadgjasgsga
          sdgaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaasdkjadsglkjasdgkajdsgñlkadsjgñlk
          adgjasgsgasdgaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaasdkjadsglkjasdgkajdsgñ
          lkadsjgñlkadgjasgsgasdgaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaasdkjadsglkja
          sdgkajdsgñlkadsjgñlkadgjasgsgasdgaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaasd
          kjadsglkjasdgkajdsgñlkadsjgñlkadgjasgsgasdgaaaaaaaaaaaaaaaaaaaaaaa
          aaaaaaaasdkjadsglkjasdgkajdsgñlkadsjgñlkadgjasgsgasdgaaaaaaaaaaaaa
          aaaaaaaaaaaaaaaaaasdkjadsglkjasdgkajdsgñlkadsjgñlkadgjasgsgasdgaaa
          aaaaaaaaaaaaaaaaaaaaaaaaaaaasdkjadsglkjasdgkajdsgñlkadsjgñlkadgjas
          gsgasdgaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaasdkjadsglkjasdgkajdsgñlkadsj
          gñlkadgjasgsgasdgaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaasdkjadsglkjasdgkaj
          dsgñlkadsjgñlkadgjasgsgasdgaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaasdkjadsg
          lkjasdgkajdsgñlkadsjgñlkadgjasgsgasdgaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
          aasdkjadsglkjasdgkajdsgñlkadsjgñlkadgjasgsgasdgaaaaaaaaaaaaaaaaaaa
          aaaaaaaaaaaasdkjadsglkjasdgkajdsgñlkadsjgñlkadgjasgsgasdgaaaaaaaaa
          aaaaaaaaaaaaaaaaaaaasdkjadsglkjasdgkajdsgñlkadsjgñlkadgjasgsgasdga
        </p>
        <Menu />
      </div>
      <div className="menu"></div>
    </div>
  );
}

export default Single;
