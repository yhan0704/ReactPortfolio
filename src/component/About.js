import React from "react";
import "../css/About.css";
import passion from "../picture/passion1.png";
export default function About() {
  return (
    <div className="about">
      <div className="aboutContainer">
        <h1 style={{ marginTop: "0", paddingBottom: "2%", paddingTop: "3%" }}>
          About
        </h1>
        <div className="aboutImage">
          <img src={passion} alt="passion" />
        </div>
        <p>Hi, My name is Young Chan Han.</p>
        <p>
          I am a driven full-stack engineer with an outstanding work ethic
          seeking a junior level developer position. 
          I am also passionate about coding because of my drive to solve problems and perfect a final product. 
        </p>
        <p>
          I've recently completed FlatIron School, 15months web development
          bootcamp.           
          I've built web applications using Redux, React, Ruby and Ruby on Rails
          programming.
        </p>
        <p>
          Performed a wide range of design and coding projects utilizing HTML,
          CSS, API, and JavaScript.
        </p>
      </div>
    </div>
  );
}
