import React from "react";
import "../css/ProjectDetail.css";
import todo from "../picture/todolist.png";

export default function ProjectDetail(props) {
  const {
    id,
    name,
    built,
    paragraph,
    demo,
    front,
    back,
    youTube,
  } = props.location.state;
  return (
    <div className="projectDetailContainer">
      <h1>{name}</h1>
      <div className="demoFrontBack">
        {demo ? <a href={demo}>Demo|</a> : null}
        <a href={front}>Front-End</a>
        {back ? <a href={back}>|Back-End</a> : null}
      </div>
      <div className="todoImage">
        {id === 5 ? <img src={todo} alt="todo" /> : null}
      </div>
      <div className="contents">
        <div className="unorderLink">
          <h3 style={{ textAlign: "left", marginLeft: "13%" }}>Built with:</h3>
          {built.map((built, index) => (
            <ul style={{ textAlign: "left", marginLeft: "20px" }} key={index}>
              <li>{built}</li>
            </ul>
          ))}
          <br />
        </div>
        <div className="para">
          <h3>Discription of this project:</h3>
          {paragraph.map((para, index) => (
            <p key={index}>-{para}</p>
          ))}
        </div>
      </div>
      {youTube ? (
        <iframe
          title="goparkVideo"
          width="600"
          height="315"
          src={youTube}
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      ) : null}
    </div>
  );
}
