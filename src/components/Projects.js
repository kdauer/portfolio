import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { projectsData } from '../assets/data';

export const Projects = () => {
  const { t } = useTranslation('projects');
  return (
    <div className="projectContainer">
      {projectsData.map(eachProject => {
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
                {t('projects:details')}
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Projects;
