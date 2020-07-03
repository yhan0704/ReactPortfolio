import React from "react";
import "../css/About.css";
import passion from '../picture/passion1.png'
export default function About() {
  return (
    <div className="about">
      <div className="aboutContainer">
        <h1 style={{marginTop: "0", paddingBottom:"2%", paddingTop:"3%"}}>About</h1>
        <div>
        <img src={passion} alt="passion" style={{ width: "700px", height: "250px" }} />
        </div>
        <h3>
          I am a driven full-stack engineer with an outstanding work ethic
          seeking a junior level developer position. I've built web applications
          using Redux, React, Ruby and Ruby on Rails programming. I've recently
          completed FlatIron School, 15months web development bootcamp.
          Performed a wide range of design and coding projects utilizing HTML,
          CSS, API, and JavaScript.
        </h3>
      </div>
    </div>
  );
}
