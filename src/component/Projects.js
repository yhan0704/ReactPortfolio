import React, { useState } from "react";
import "../css/Projects.css";
import projects from "../data/projects.json";
import { Link  } from 'react-router-dom';

export default function Projects() {
  const [states] = useState(projects);
  return (
    <div className="projects">
      <h1 style={{marginTop: "0", paddingTop:"2%"}}>Projects</h1>
      <div className="projectMap">
          {states.projects.map((project) => (
            <div className="projectContainer" key={project.id}>
            <Link to={ {pathname:`/projects/${project.name}`, state: project } }>
              <img
                className="image"
                style={{ width: "300px", height: "250px" }}
                src={project.image}
                alt={project.name}
              />
              <div className="overlay">
                <div className="text">{project.name}</div>
                <div className="text">{project.title}</div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
