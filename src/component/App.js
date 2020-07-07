import React from "react";
import "../css/App.css";
import { Route, Switch } from "react-router-dom";
import NavigationBar from "./NavigationBar";
import Sidebar from "./Sidebar";
import About from "./About";
import Projects from "./Projects";
import Footer from "./Footer";
import Blog from "./Blog";
import Contact from "./Contact";

function App() {
  return (
    <div className="app">
      <NavigationBar />
      <div className="mainContainer">
        <div className="sidebar">
          <Sidebar />
        </div>
        <div className="mainContents">
          <Switch>
            <Route path="/" exact={true} component={About} />
            <Route path="/projects"  component={Projects} />
            <Route path="/blog" component={Blog} />
            <Route path="/contact" component={Contact} />
            <Route render={()=> <h1>Erorr Not Found</h1>} />
          </Switch>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
