import React from "react";
import "./Project.css";

export const Projects: React.FC = () => {
  const projects = [

    {
      id: 1,
      title: "Movie App",
      description:
        "Responsive movie search UI consuming TMDB REST API with clear loading/error states.",
      image: "/movie.png",
      link: "https://movie-web2025.vercel.app/",
      tech: "React, TypeScript, TMDB API, Vercel",
    },
    {
      id: 2,
      title: "Professional Contact Page",
      description:
        "One‑page site for a psychology service with responsive layout and clear CTAs.",
      image: "/psico_encuentros.png",
      link: "https://psico-encuentros.vercel.app/",
      tech: "React, TypeScript, Vite, CSS",
    },
    {
      id: 3,
      title: "Todo List App",
      description:
        "Simple task manager; add, mark complete, and remove tasks with a clean UI.",
      image: "/todo.png",
      link: "https://tadeo199928.github.io/to-Do_List/",
      tech: "JavaScript, HTML, CSS",
    },
    {
      id: 4,
      title: "Snake.js",
      description:
        "Classic Snake game built with JavaScript and HTML5 Canvas.",
      image: "/snake_js.png",
      link: "https://tadeo199928.github.io/snake.js/",
      tech: "JavaScript, HTML5 Canvas",
    },
    {
      id: 5,
      title: "My First Portfolio",
      description:
        "My first HTML/CSS portfolio—to compare progress over time.",
      image: "/old_portfolio.png",
      link: "https://tadeo199928.github.io/Portfolio/",
      tech: "HTML, CSS",
    },
    {
            id: 6,
      title: "In Progress",
      description:
        "More Work In Progress",
      image: "/iconimg.png",
      link: "#",
      tech: "...",
    }

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
          <p><strong>Tech:</strong> {project.tech}</p>
          <a href={project.link}>View Project</a>
        </div>
      ))}
    </div>
  );
};

export default Projects;