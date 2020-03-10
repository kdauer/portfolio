import React from "react";
import { Link } from "react-router-dom";

export const myProjects = [
  {
    id: "1a",
    name: "around the world in 100 clicks",
    year: 2020,
    technologies: "HTML, CSS, JavaScript",
    description: "1st Ironhack project. A country Quiz game"
  },
  {
    id: "2b",
    name: "Breakpoint",
    year: 2020,
    technologies:
      "Mongo DB, ExpressJS, NodeJS, JavaScript, HTML, CSS, handlebars, mongoose, passport, mapbox, Chart.js, Surfline-API",
    description:
      "Full Stack Web App that allows users to search for surf spots in portugal based on the break type and if they are logged in they can save them as favourites"
  },
  {
    id: "3c",
    name: "greenLine",
    year: 2020,
    technologies:
      "Mongo DB, ExpressJS, React, NodeJS, JavaScript, HTML, CSS, passport, Deutsche Bahn APIs",
    description:
      "A MERN Web App where you can search for low fare train tickets in the Deutsche Bahn train&ticketing system and show days around your selected date. Also loggedin users you can save the connections to search again"
  }
];

export const Projects = () => {
  return (
    <div>
      <h2>Projects:</h2>
      {myProjects.map(eachProject => {
        return (
          <div key={eachProject.id}>
            <h3>
              <Link to={`/projects/${eachProject.id}`}>{eachProject.name}</Link>
            </h3>
            <h4>{eachProject.technologies}</h4>
            <hr />
          </div>
        );
      })}
    </div>
  );
};

export default Projects;
