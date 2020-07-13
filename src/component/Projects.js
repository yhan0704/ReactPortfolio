import React, { useState } from "react";
import "../css/Projects.css";
import projects from "../data/projects.json";
import { Route, Link } from "react-router-dom";
import ProjectDetail from "./ProjectDetail";

export default function Projects() {
  const [states] = useState(projects);
  return (
    <div className="projects">
      <h1 style={{ marginTop: "0", paddingTop: "2%" }}>Projects</h1>
      {window.innerHeight <= 568 ? (
        <div>Please scroll down after click</div>
      ) : null}
      <div className="projectMap">
        {states.projects.map((project) => (
          <div className="projectContainer" key={project.id}>
            <Link
              style={{ textDecoration: "none", color: "lightseagreen" }}
              to={{ pathname: `/projects/${project.name}`, state: project }}
            >
              <img
                className="image"
                style={{ width: "100px", height: "100px", borderRadius: "15%" }}
                src={project.image}
                alt={project.name}
              />
              <div className="subContents">
                <div className="text">{project.name}</div>
                <div className="text">{project.title}</div>
              </div>
            </Link>
          </div>
        ))}
      </div>
      <hr></hr>
      <Route
        path="/projects/"
        exact={true}
        render={() => <h3>Please choose one of my project.</h3>}
      />
      <Route path="/projects/:username" exact={true} render={ProjectDetail} />
    </div>
  );
}
