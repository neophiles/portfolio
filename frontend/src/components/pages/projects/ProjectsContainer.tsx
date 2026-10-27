import { PROJECTS } from "../../../data/projects";
import ProjectCard from "./ProjectCard";

export default function ProjectsContainer({
  featured = false,
}: {
  featured?: boolean
}) {
  const projectsDisplayed = featured
    ? PROJECTS.filter((project) => project.featured)
    : PROJECTS
  
  return (
    <div className="grid md:grid-cols-2 lg:flex lg:flex-row md:flex-wrap gap-2">
      {projectsDisplayed.map((project, index) => (
        <ProjectCard key={index} project={project} featured={featured} />
      ))}
    </div>
  )
}
