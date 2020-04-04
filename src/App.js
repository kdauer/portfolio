import React from "react";
import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import ProjectDetails from "./components/ProjectDetail";
import ContactForm from "./components/ContactForm";
import Impress from "./components/legalnotice";
import DSGVO from "./components/privacypolicy";
import Footer from "./components/Footer";
import vCard from "./components/vCard";
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
        <Route exact path="/contact" component={ContactForm} />
        <Route path="/legalnotice" component={Impress} />
        <Route path="/privacypolicy" component={DSGVO} />
        <Route path="/k" component={vCard} />
      </Switch>
      <div className="space"></div>
      <Footer />
    </div>
  );
}

export default App;
