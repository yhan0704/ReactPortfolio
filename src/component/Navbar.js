import React from "react";
import "../css/Navbar.css";
import { Link  } from 'react-router-dom';

export default function Navbar() {
  return (
    <div className="navMain">
      <div className="navContainer">

        <a href="/" className="navbarMyName"><h1>Young Chan Han</h1></a>
        
        <div className="navigationBar">
          <img src="https://img.icons8.com/ios-filled/50/000000/menu.png" alt="hamburger"/>
        </div>
        <div style={{marginBottom:0}} className="navLink">
          <Link to="/">About</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/blog">Blogs</Link>
          <a href="/">Contact</a>
        </div>
      </div>
    </div>
  );
}

