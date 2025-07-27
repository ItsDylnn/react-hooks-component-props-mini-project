import React from "react";
import ProjectItem from "./ProjectItem";

const projects = [
  {
    id: 1,
    name: "Reciplease",
    about: "A recipe tracking app",
    technologies: ["Rails", "Bootstrap CSS"],
  },
  {
    id: 2,
    name: "Kibbles N Bitz",
    about: "Tinder for dogs",
    technologies: ["React", "Redux"],
  },
  {
    id: 3,
    name: "Alienwares",
    about: "Etsy for aliens",
    technologies: ["React", "Redux", "Rails"],
  },
];

function ProjectList() {
  return (
    <section>
      <h2>My Projects</h2>
      {projects.map((project) => (
        <ProjectItem key={project.id} {...project} />
      ))}
    </section>
  );
}

export default ProjectList;
