import React from "react";
import { myProjects } from "./Projects";
import { Link } from "react-router-dom";

const ProjectDetails = props => {
  console.log(props);

  const getProject = id => {
    const theProject = oneProject => {
      return oneProject.id === id;
    };
    return myProjects.find(theProject);
  };

  const { params } = props.match;
  const foundProject = getProject(params.id, 10);

  return (
    <div className="detailcontainer">
      <div className="projectDetail">
        <img src={foundProject.img} alt="projectImage" />
        <h3>Description</h3>
        <p>{foundProject.description}</p>
        <h3>Development</h3>
        <p>{foundProject.development}</p>
        <p style={{ color: "rgb(129, 179, 175)" }}>
          created in {foundProject.year}
        </p>
      </div>
      <div className="sitecontainer">
        <div className="webLink">
          <h2>{foundProject.name}</h2>
          <Link to={foundProject.weblink} className="link">
            view Website
          </Link>
        </div>
        <div className="techSpec">
          <h3>Technologies</h3>
          <p>{foundProject.technologies}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
