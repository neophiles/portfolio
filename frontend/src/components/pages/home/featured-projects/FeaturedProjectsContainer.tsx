import { PROJECTS } from "../../../../data/project";
import FeaturedProjectCard from "./FeaturedProjectCard";

export default function FeaturedProjectsContainer() {
  return (
    <div className="grid md:grid-cols-2 lg:flex lg:flex-row md:flex-wrap gap-2">
      {PROJECTS.map((project, index) => (
        <FeaturedProjectCard key={index} project={project} />
      ))}
    </div>
  )
}
