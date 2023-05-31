import React from 'react';
import './Projects.css'; 
import image1 from '../assets/images/image-1.jpg';
import image2 from '../assets/images/image-2.jpg';
import image3 from '../assets/images/image-3.jpg';

const projects = [
  {
    id: 1,
    title: 'Real~Estate',
    description: 'Built using React App',
    image: image1,
    link: 'https://6474fd4e1619084b57f2eaa8--teal-starlight-158dfc.netlify.app/',
  },
  {
    id: 2,
    title: 'Amazon',
    description: 'Amazon Shopping App',
    image: image2,
    link: 'https://645b12caa65b9f713bae1bc3--beamish-queijadas-c4c9e9.netlify.app/',
  },
  {
    id: 3,
    title: 'Make~up',
    description: 'Make up Search',
    image: image3,
    link: 'https://64758071cc5035191a6b257e--guileless-gumption-d321e0.netlify.app/',
  },
];

function Projects() {
  return (
    <div className="projects-container">
      {projects.map((project) => (
        <div key={project.id} className="project-card">
          <h2 className="project-title">{project.title}</h2>
          <p className="project-description">{project.description}</p>
          <img
            className="project-image"
            src={project.image}
            alt={project.title}
          />
          <a className="project-link" href={project.link}>View Project</a>
        </div>
      ))}
    </div>
  );
}

export default Projects;
