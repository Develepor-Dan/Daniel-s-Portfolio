import { useState } from 'react';
import Project from '../Project';
import projectData from './projectData'; 

function Portfolio() {
  const [projects] = useState(projectData);

  return (
    <div>
      <div className="flex-row">
        {projects.map((project) => (
          <Project key={project.id} {...project} />
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
