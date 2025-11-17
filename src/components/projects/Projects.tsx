import React from "react";
import "./Project.css";

export const Projects: React.FC = () => {
  const projects = [
    {
      id: 1,
      title: "Todo List App",
      description: "This is a simple Todo List application built with JS",
      image: "/todo.png",
      link: "https://tadeo199928.github.io/to-Do_List/",
    },
    {
      id: 2,
      title: "Snkake.js",
      description: "Game developed with JavaScript and HTML5 Canvas",
      image: "/snake_js.png",
      link: "https://tadeo199928.github.io/snake.js/",
    },
    {
      id: 3,
      title: "My first Portfolio",
      description: "This was my first page made with HTML and CSS, you can compare my progress",
      image: "/old_portfolio.png",
      link: "https://tadeo199928.github.io/Portfolio/",
    },
    {
      id: 4,
      title: "Movie App",
      description: "Movie App built with React and The Movie DB API",
      image: "/movie.png",
      link: "https://movie-web2025.vercel.app/",
    },
    {
      id: 5,
      title: "Responsive Website",
      description: "A professional website for psychological services, built with vite, React and CSS (waiting deployment)",
      image: "/psico_encuentros.png",
      link: "https://psico-encuentros.vercel.app/",
    },
    {
      id: 6,
      title: "Project Six",
      description: "In Progress...",
      image: "https://i.ytimg.com/vi/M0fUKOv2A04/hq720.jpg?sqp=-oaymwEXCK4FEIIDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLB26tEFuzfqwDCdMC-VqE_0gUe6Gg",
      link: "#",
    },
  ];

  return (
    <div className="project-list">
      {projects.map((project) => (
        <div key={project.id} className="project-card">
          <img
            src={project.image}
            alt={project.title}
            className="project-image"
          />
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <a href={project.link}>View Project</a>
        </div>
      ))}
    </div>
  );
};

export default Projects;