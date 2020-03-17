import React from "react";
import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import ProjectDetails from "./components/ProjectDetail";
import Footer from "./components/Footer";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/projects/:id" component={ProjectDetails} />
      </Switch>
      <div className="space"></div>
      <Footer />
    </div>
  );
}

export default App;
