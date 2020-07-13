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
        <div>
      </div>
        <p>
          Hi, My name is Young Chan Han. I am a driven full-stack engineer with
          an outstanding work ethic open to contributing my diverse skill set in
          a junior-level position.
        </p>
        <p>
          I hold an Associate’s Degree in Computer Science and recently
          graduated from the University of Maryland, Baltimore County with a
          Bachelor of Science Degree in Information Systems. From there I
          attended Flatiron School where I honed my skills as a developer.
          During FlatIron School’s 15-Week Intensive Software Engineering
          Program, I’ve built web applications using Redux, React, Ruby, and
          Ruby on Rails programming.
        </p>
        <p>
          I am passionate about coding because of my drive to solve problems and
          create a final product. Beyond my academic qualifications, I continue
          to advance my skills as a developer by enhancing projects within my
          portfolio and preparing for the AWS practitioner certification. I
          welcome you to take a look at my portfolio and please contact me with
          any questions you may have.
        </p>
      </div>

    </div>
  );
}
