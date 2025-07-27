import React from "react";

function ProjectItem({ name, about, technologies }) {
  return (
    <div>
      <h3>{name}</h3>
      <p>{about}</p>
      <div>
        {technologies.map((tech) => (
          <span key={tech}>{tech}</span>
        ))}
      </div>
    </div>
  );
}

export default ProjectItem;
