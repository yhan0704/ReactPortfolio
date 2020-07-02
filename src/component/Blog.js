import React, {useState} from "react";
import projects from "../data/projects.json";
import '../css/Blog.css'

export default function Blog() {
  const [states] = useState(projects)
  return (
    <div className="blog">
      <h1 style={{ marginTop: "0", paddingTop: "2%" }}>Blogs</h1>
      <div className="contents">
      {states.blogs.map((blog)=> (
      <div className="blogMap" key={blog.id}>
        <a
          rel="noopener noreferrer"
          href={blog.blogUrl}
          target="_blank"
        >
          <img
            style={{ width: "300px", height: "250px" }}
            src={blog.image}
            alt={blog.name}
          />
          <div className="subContents">
            <p>{blog.name}</p>
            <p>{blog.title}</p>
          </div>
        </a>
      </div>
      ))}
      </div>
    </div>
    
  );
}
