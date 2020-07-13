import React from "react";
import "../css/Sidebar.css";
import resume from "../resume/YoungChan Han_Resume.pdf";
import me from "../picture/me.jpeg";

export default function Sidebar() {
  return (
    <div className="sidebarMain">
      <div className="sideBarContainer">
        <img src={me} alt="me" />
        <br />
        <p style={{ paddingTop: "5%" }}>Young's Portfolio</p>
        <p>Thank you for visiting my portfolio.</p>
        <div style={{ marginTop: "25%" }}>
          <a href={resume} download>
            My Resume
          </a>
        </div>

        <div className="sideBorderSize">
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.linkedin.com/in/yhan1205/"
          >
            <img
              className="linkSocial"
              style={{ width: "35", height: "35" }}
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
              style={{ width: "35", height: "35" }}
              src="https://img.icons8.com/ios-glyphs/20/000000/github.png"
              alt="LinkedIn"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
