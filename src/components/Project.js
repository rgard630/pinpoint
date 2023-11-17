import React from 'react';

const Project = ({ title, description, deployedLink, githubLink, imageUrl }) => {
  return (
    <div className="project">
      <h2>{title}</h2>
      <p>{description}</p>
      <div className="project-links">
        <a href={deployedLink} target="_blank" rel="noopener noreferrer">Deployed App</a>
        <a href={githubLink} target="_blank" rel="noopener noreferrer">GitHub Repository</a>
      </div>
      <img src={imageUrl} alt={title} />
    </div>
  );
};

export default Project;
