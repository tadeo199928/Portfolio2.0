import React from "react";
import "./Project.css";

export const Projects: React.FC = () => {
  const projects = [
    {
      id: 1,
      title: "Project One",
      description: "A brief description of Project One.",
      image: "https://i.ytimg.com/vi/M0fUKOv2A04/hq720.jpg?sqp=-oaymwEXCK4FEIIDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLB26tEFuzfqwDCdMC-VqE_0gUe6Gg",
      link: "#",
    },
    {
      id: 2,
      title: "Project Two",
      description: "A brief description of Project Two.",
      image: "https://i.ytimg.com/vi/M0fUKOv2A04/hq720.jpg?sqp=-oaymwEXCK4FEIIDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLB26tEFuzfqwDCdMC-VqE_0gUe6Gg",
      link: "#",
    },
    {
      id: 3,
      title: "Project Three",
      description: "A brief description of Project Three.",
      image: "https://i.ytimg.com/vi/M0fUKOv2A04/hq720.jpg?sqp=-oaymwEXCK4FEIIDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLB26tEFuzfqwDCdMC-VqE_0gUe6Gg",
      link: "#",
    },
    {
      id: 4,
      title: "Project Four",
      description: "A brief description of Project Four.",
      image: "https://i.ytimg.com/vi/M0fUKOv2A04/hq720.jpg?sqp=-oaymwEXCK4FEIIDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLB26tEFuzfqwDCdMC-VqE_0gUe6Gg",
      link: "#",
    },
    {
      id: 5,
      title: "Project Five",
      description: "A brief description of Project Five.",
      image: "https://i.ytimg.com/vi/M0fUKOv2A04/hq720.jpg?sqp=-oaymwEXCK4FEIIDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLB26tEFuzfqwDCdMC-VqE_0gUe6Gg",
      link: "#",
    },
    {
      id: 6,
      title: "Project Six",
      description: "A brief description of Project Six.",
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