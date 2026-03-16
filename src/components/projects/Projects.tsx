import React from "react";
import "./Project.css";

export const Projects: React.FC = () => {
  const projects = [
    {
      id: 1,
      title: "Full-stack digital sandtray therapy app",
      description:
        " Features patient management, drag-and-drop figure placement on an interactive sandbox, and session tracking with a secure login.(To try the app, contact me for demo credentials.)",
      image: "/dioses.png",
      link: "https://caja-de-arena.vercel.app/",
      tech: "React, TypeScript, Vite, Node.js, Express, CSS",
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
      title: "LicitaNow (Design Prototype)",
      description:
        "Design prototype for a bidding platform, showcasing UI/UX concepts.",
      image: "/licitanow.png",
      link: "https://licitanow.vercel.app/",
      tech: "Angular, TypeScript, SCSS",
    },

    {
      id: 4,
      title: "Movie App",
      description:
        "Responsive movie search UI consuming TMDB REST API with clear loading/error states.",
      image: "/movie.png",
      link: "https://movie-web2025.vercel.app/",
      tech: "React, TypeScript, TMDB API, Vercel",
    },
    {
      id: 5,
      title: "Snake.js",
      description: "Classic Snake game built with JavaScript and HTML5 Canvas.",
      image: "/snake_js.png",
      link: "https://tadeo199928.github.io/snake.js/",
      tech: "JavaScript, HTML5 Canvas",
    },
    {
      id: 6,
      title: "Todo List App",
      description:
        "Simple task manager; add, mark complete, and remove tasks with a clean UI.",
      image: "/todo.png",
      link: "https://tadeo199928.github.io/to-Do_List/",
      tech: "JavaScript, HTML, CSS",
    },
    {
      id: 7,
      title: "My First Portfolio",
      description: "My first HTML/CSS portfolio—to compare progress over time.",
      image: "/old_portfolio.png",
      link: "https://tadeo199928.github.io/Portfolio/",
      tech: "HTML, CSS",
    },

    {
      id: 8,
      title: "Work in Progress",
      description:
        "More projects coming soon as I continue to learn and grow as a developer!",
      image: "/iconimg.png",
      link: "https://tadeo199928.github.io/Portfolio/",
      tech: "Stay tuned!",
    },
    {
      id: 9,
      title: "Work in Progress",
      description:
        "More projects coming soon as I continue to learn and grow as a developer!",
      image: "/iconimg.png",
      link: "https://tadeo199928.github.io/Portfolio/",
      tech: "Stay tuned!",
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
          <p>
            <strong>Tech:</strong> {project.tech}
          </p>
          <a href={project.link}>View Project</a>
        </div>
      ))}
    </div>
  );
};

export default Projects;
