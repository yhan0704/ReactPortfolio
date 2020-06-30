import React, { useState } from "react";
import "../css/Projects.css";
import projects from "../data/projects.json";

export default function Projects() {
  const [states] = useState(projects);

  return (
    <div className="projects">
      <h1>Projects</h1>
      <div className="projectMap">
        {states.map((project) => (
          <div className="projectContainer">
            <a href="/">
              <img
                className="image"
                style={{ width: "300px", height: "300px" }}
                src={project.image}
                alt="park"
              />
              <div className="overlay">
                <div className="text">{project.name}</div>
                <div className="text">{project.title}</div>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
