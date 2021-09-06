import React from "react";
import "../Image.css";

function About() {
  return (
    <div>
      <img
        className="photo-sample"
        src="/images/Profile.jpg"
        alt="/images/Profile.jpg"
      />
      <p className="intro-text-header">
        <strong>Min Goo Choi</strong>
      </p>
      <div className="logo-align">
        <a href="https://www.linkedin.com/in/min-goo-choi-735242158/">
          <img
            className="icon-logo"
            src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png"
            alt="not working"
          ></img>
        </a>
        <a href="https://github.com/mgchoi239/Archive">
          <img
            className="icon-logo"
            src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"
            alt="not working"
          ></img>
        </a>
      </div>
      <p className="intro-text">
        <strong>mingoo.choi@berkeley.edu</strong>
      </p>
      <p className="intro-text">
        <strong>Education: </strong>
        Pursuing a B.S in Computer Science at <br />
        University of California, Berkeley ('23)
      </p>
      <p className="intro-text">
        <strong>Update 1: </strong>Discharged from the military on May
      </p>
      <p className="intro-text">
        <strong>Update 2: </strong>Completed Summer Semester Data Structures
        course on August
      </p>
    </div>
  );
}

export default About;
