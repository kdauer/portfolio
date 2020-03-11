import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div style={{ height: "100vh" }} className="Page">
      <h2 className="Intro">Full Stack Web Developer based in Berlin</h2>
      <div className="container">
        <img width="50%" height="auto" src="/media.jpg" alt="media" />
        <h3>Fully responsive custom designed websites</h3>
        <div className="LinkDiv">
          <Link to="/projects" style={{ textDecoration: "none" }}>
            view Projects
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
