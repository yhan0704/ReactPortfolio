import React from "react";
import "../css/App.css";
import { Route, Switch } from "react-router-dom";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import About from "./About";
import Projects from "./Projects";
import Footer from "./Footer";
import ProjectDetail from "./ProjectDetail";
import Blog from "./Blog";

function App() {
  return (

    <div className="app">
      <Navbar />
      <div className="mainContainer">
        <div className="sidebar">
          <Sidebar />
        </div>
        <div className="mainContents">
          <Switch>
            <Route path="/" exact={true} component={About} />
            <Route path="/projects" exact={true} component={Projects} />
            <Route path="/projects/:username" exact={true} component={ProjectDetail} />
            <Route path="/blog" exact={true} component={Blog} />
          </Switch>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
