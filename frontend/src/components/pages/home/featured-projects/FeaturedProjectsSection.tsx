import Button from "../../../common/Button";
import Text from "../../../common/Text";
import ProjectsContainer from "../../projects/ProjectsContainer";
import useAppNavigation from "../../../../hooks/useAppNavigation";
import Icon from "../../../common/Icon";
import { ChevronRight } from "lucide-react";

export default function FeaturedProjectsSection() {
  const { handleNavigate } = useAppNavigation()

  return (
    <section className="flex flex-col md:flex-row gap-8 md:gap-12">
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <Text as="h2" size="xl">
            Featured Projects
          </Text>
          <Button
            onClick={() => handleNavigate("/projects")}
            className="flex items-center justify-center gap-0.1 text-base-content-muted"
          >
            <Text size="sm">
              See more
            </Text>
            <Icon icon={ChevronRight} className="size-4" />
          </Button>
        </div>
        <ProjectsContainer featured={true} />
      </div>
    </section>
  )
}
