import Text from "../../common/Text";
import ProjectsContainer from "./ProjectsContainer";

export default function ProjectsPage() {
  return (
    <div className="max-w-5xl flex flex-col gap-8">
      <Text as="h2" size="xl">
        My Projects
      </Text>
      <ProjectsContainer />
    </div>
  )
}
