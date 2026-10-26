import Card from "../../../common/Card";
import Text from "../../../common/Text";
import ToolIcon from "../tools/ToolIcon";
import { TOOLS } from "../../../../data/tools";
import type { Project } from "../../../../data/projects";
import githubIconDark from "../../../../assets/contacts/github-icon-dark.png"
import githubIconLight from "../../../../assets/contacts/github-icon-light.png"

export default function FeaturedProjectCard({
  project
}: {
  project: Project
}) {
  const {
    name,
    description,
    tools,
    imgSrc,
    githubHref,
  } = project

  const thumbnail = imgSrc[0] || undefined

  return (
    <Card className="group flex-1 lg:flex-none lg:w-80 flex flex-col bg-base-100/50 shadow overflow-hidden">
      <div className="flex-none aspect-video bg-base-300 overflow-hidden">
        {thumbnail && (
          <img
            src={imgSrc[0]}
            draggable={false}
            className="object-cover aspect-video select-none group-hover:scale-110 transition-transform duration-200"
          />
        )}
      </div>
      <div className="h-full p-4 flex flex-col justify-between gap-4">
        <div className="flex flex-col gap-2">
          <Text as="h3" size="sm">{name}</Text>
          <Text size="sm">{description}</Text>
        </div>
        <div className="flex gap-2 -end">
          {TOOLS.filter((tool) => tools.includes(tool.name)).map((tool, index) => (
            <ToolIcon key={index} imgSrc={tool.imgSrc} />
          ))}
          <div className="flex-1" />
          <a
            href={githubHref}
            target="_blank"
          >
            <ToolIcon imgSrc={[githubIconDark, githubIconLight]} />
          </a>
        </div>
      </div>
    </Card>
  )
}
