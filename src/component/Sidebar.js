import React from "react";
import "../css/Sidebar.css";
import mainPic from "../picture/picture1.jpg";
import resume from "../resume/YoungChan Han_Resume.pdf"

export default function Sidebar() {
  return (
    <div className="sidebarMain">
      <div className="sideBarContainer">
        <img src={mainPic} alt="passion" />
        <br />
        <p>
          I am a driven full-stack engineer with an outstanding work ethic
          seeking a web development position.
        </p>
          <a
            href={resume}
            download
          >
            My Resume{" "}
          </a>
        <p>Thank you for visiting my webpage.</p>
        <br />
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://www.linkedin.com/in/yhan1205/"
        >
          <img
            className="linkSocial"
            style={{ width: "50", height: "50" }}
            src="https://img.icons8.com/doodle/48/000000/linkedin--v2.png"
            alt="LinkedIn"
          />
        </a>
        <br />
        <br />
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://www.linkedin.com/in/yhan1205/"
        >
          <img
            className="linkSocial"
            style={{ width: "50", height: "50" }}
            src="https://img.icons8.com/ios-glyphs/20/000000/github.png"
            alt="LinkedIn"
          />
        </a>
        <div className="sideBorderSize">
          built with:
          <br />
          <img
            src="https://img.icons8.com/office/48/000000/react.png"
            alt="react"
          />
          <img
            src="https://img.icons8.com/color/48/000000/html-5.png"
            alt="html"
          />
          <img
            src="https://img.icons8.com/color/48/000000/css3.png"
            alt="css"
          />
        </div>
      </div>
    </div>
  );
}
