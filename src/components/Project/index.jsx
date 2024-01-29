import React from 'react';
import { removeHyphensAndCapitalize } from '../../utils/helpers';
import * as projects from '../../assets';

const Project = ({ name, description, link, repo }) => {

  const formattedName = removeHyphensAndCapitalize(name);

  return (
    <div className="project flex-row flex-center" key={name}>
      <img
        src={projects[name]}
        alt={formattedName}
        className="project-bg"
      />
      <div className="project-text">
        <h3>
          <a href={link}>{formattedName}</a>
          &nbsp;
          <a href={repo}>
            <i className="fab fa-github" />
          </a>
        </h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default Project;
