import React from "react";
import "../IconLogo.css";
import "./Readings.css";
function Readings() {
  return (
    <div>
      <p className="intro-text">
        I read for leisure, though I frankly read at a pace of 𝛩(N) while adding
        books to to-read list is 𝛩(N^2). <br />
        Feel free to look over my Goodreads and recommend me any books of your
        taste!
      </p>
      <div className="logo-align">
        <a href="https://www.goodreads.com/user/show/116837080-aubear">
          <img
            className="icon-logo"
            src="https://upload.wikimedia.org/wikipedia/commons/5/5a/Goodreads_logo_-_SuperTinyIcons.svg"
            alt="https://upload.wikimedia.org/wikipedia/commons/5/5a/Goodreads_logo_-_SuperTinyIcons.svg"
          />
        </a>
      </div>
    </div>
  );
}

export default Readings;
