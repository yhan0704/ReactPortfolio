import React from "react";
import "../css/ProjectDetail.css";

export default function ProjectDetail(props) {
  console.log(props);
  const {
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
      <h1 style={{ marginTop: 0, paddingTop: "2%", textAlign: "left" }}>
        {name}
      </h1>

      <div className="contents">
        <div className="ul">
          <h4>Built with:</h4>
          {built.map((built) => (
            <ul>
              <li>{built}</li>
            </ul>
          ))}
          <br />
        </div>
        <div className="p">
        <h2>Discription of this project:</h2>
          {paragraph.map((para) => (
            <p>-{para}</p>
          ))}
        </div>
      </div>
      <div className="demoFrontBack">
        <a href={demo}>Demo</a>|<a href={front}>Front-End</a>|
        <a href={back}>Back-End</a>
      </div>
      {youTube ? (
        <iframe
          title="goparkVideo"
          width="600"
          height="315"
          src={youTube}
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      ) : null}
    </div>
  );
}
// https://www.youtube.com/watch?v=MPAlPKZIVcw&feature=emb_title
