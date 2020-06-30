import React from "react";
import "../css/App.css";
import { Route  } from 'react-router-dom';
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import About from "./About";
import Projects from "./Projects";
import Footer from "./Footer";
function App() {
  return (
    //<Route path="/" component={Home} />
    <div className="app">
      <Navbar />
      <div className="mainContainer">
        <div className="sidebar">
          <Sidebar />
        </div>
        <div className="mainContents">
          <Route path="/" exact={true} component={About} />
          <Route path="/projects"  component={Projects} />
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
