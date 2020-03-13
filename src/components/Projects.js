import React, { useState } from "react";
import { Link } from "react-router-dom";

export const myProjects = [
  {
    id: "1",
    name: "around the world in 100 clicks",
    year: 2020,
    img: "/project1.png",
    technologies: "HTML, CSS, JavaScript",
    description: "1st Ironhack project. A country Quiz game"
  },
  {
    id: "2",
    name: "Breakpoint",
    year: 2020,
    img: "/project2.png",
    technologies:
      "Mongo DB, ExpressJS, NodeJS, JavaScript, HTML, CSS, handlebars, mongoose, passport, mapbox, Chart.js, Surfline-API",
    description:
      "Full Stack Web App that allows users to search for surf spots in portugal based on the break type and if they are logged in they can save them as favourites"
  },
  {
    id: "3",
    name: "greenLine",
    year: 2020,
    img: "/project3.png",
    technologies:
      "Mongo DB, ExpressJS, React, NodeJS, JavaScript, HTML, CSS, passport, Deutsche Bahn APIs",
    description:
      "A MERN Web App where you can search for low fare train tickets in the Deutsche Bahn train&ticketing system and show days around your selected date. Also loggedin users you can save the connections to search again"
  }
];

export const Projects = () => {
  const [hover, setHover] = useState(false);

  return (
    <div className="projectContainer">
      {myProjects.map(eachProject => {
        return (
          <div
            key={eachProject.id}
            onMouseEnter={() => setHover(!hover)}
            onMouseLeave={() => setHover(hover)}
          >
            {!hover ? (
              <img
                className="projectImg"
                src={eachProject.img}
                alt="Projectpicture"
              />
            ) : (
              <div className="hover">
                <Link to={`/projects/${eachProject.id}`}>view Details</Link>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Projects;
