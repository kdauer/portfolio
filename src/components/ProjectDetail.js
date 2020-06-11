import React from "react";
import { myProjects } from "./Projects";
import { useTranslation } from "react-i18next";

const ProjectDetails = props => {
  const { t } = useTranslation("projectdetails");
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
        <h3>{t("projectdetails:description")}</h3>
        <p>{foundProject.description}</p>
        <h3>{t("projectdetails:development")}</h3>
        <p>{foundProject.development}</p>
        <p style={{ color: "rgb(129, 179, 175)" }}>
          {t("projectdetails:created")} {foundProject.year}
        </p>
      </div>
      <div className="sitecontainer">
        <div className="webLink">
          <h2>{foundProject.name}</h2>
          <a href={foundProject.weblink} className="link">
            {t("projectdetails:link")}
          </a>
        </div>
        <div className="techSpec">
          <h3>{t("projectdetails:technologies")}</h3>
          <p>{foundProject.technologies}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
