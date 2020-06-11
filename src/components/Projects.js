import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export const myProjects = [
  {
    id: "1",
    name: "around the world in 100 clicks",
    year: 2020,
    img: "/project1.png",
    development: "1st Ironhack project, created in 4 days",
    technologies: "HTML CSS JavaScript",
    description:
      "a Quizgame where you have to guess the countryname based on the shape",
    weblink: "https://kdauer.github.io/around-the-world-in-100-clicks/"
  },
  {
    id: "2",
    name: "Breakpoint",
    year: 2020,
    img: "/project2.png",
    development: "2nd Ironhack project, created in 4 days",
    technologies:
      "mongoDB expressJS nodeJS JavaScript HTML CSS handlebars mongoose passport mapbox Chart.js SurflineAPI",
    description:
      "Full Stack Web App that allows users to search for surf spots in portugal based on the break type and if they are logged in they can save them as favourites",
    weblink: "https://break-point-app.herokuapp.com/"
  },
  {
    id: "3",
    name: "greenLine",
    year: 2020,
    img: "/project3.png",
    development: "3rd and final project for Ironhack, created in 7 days",
    technologies:
      "mongoDB expressJS React nodeJS JavaScript HTML CSS passport DeutscheBahnAPIs",
    description:
      "A MERN Web App where you can search for low fare train tickets in the Deutsche Bahn train&ticketing system and show days around your selected date. Also loggedin users you can save the connections to search again",
    weblink: "http://green-line.herokuapp.com/"
  }
];

export const Projects = () => {
  const { t } = useTranslation("projects");
  return (
    <div className="projectContainer">
      {myProjects.map(eachProject => {
        return (
          <div className="box" key={eachProject.id}>
            <img
              className="projectImg"
              src={eachProject.img}
              alt="Projectpicture"
            />
            <div className="mask">
              <p className="project_title">{eachProject.name}</p>
              <Link
                to={`/projects/${eachProject.id}`}
                props={eachProject.img}
                className="link"
              >
                {t("projects:details")}
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Projects;
