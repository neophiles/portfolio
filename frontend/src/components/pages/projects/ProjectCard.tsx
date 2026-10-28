import Card from "../../common/Card";
import Text from "../../common/Text";
import ToolIcon from "../home/tools/ToolIcon";
import { TOOLS } from "../../../data/tools";
import type { Project } from "../../../data/projects";
import githubIconDark from "../../../assets/contacts/github-icon-dark.png"
import githubIconLight from "../../../assets/contacts/github-icon-light.png"
import Tag from "../../common/Tag";
import Divider from "../../layout/Divider";
import Icon from "../../common/Icon";
import { Award } from "lucide-react";

export default function FeaturedProjectCard({
  project,
  featured = false,
}: {
  project: Project,
  featured?: boolean
}) {
  const {
    name,
    description,
    context,
    recognition,
    role,
    tools,
    imgSrc,
    githubHref,
  } = project

  const thumbnail = imgSrc[0] || undefined

  return (
    <Card className="group flex-1 lg:flex-none lg:w-80 flex flex-col bg-base-100/50 text-base-content shadow overflow-hidden">
      <div className="relative flex-none aspect-video bg-base-300 overflow-hidden">
        {thumbnail && (
          <img
            src={imgSrc[0]}
            draggable={false}
            loading="lazy"
            className="object-cover aspect-video select-none group-hover:scale-110 transition-transform duration-200"
          />
        )}
        {recognition && (
          <Tag className="absolute bottom-2 left-2 flex items-center gap-1 bg-secondary/90 text-secondary-content">
            <Icon icon={Award} className="size-5" />
            <Text size="sm" className="text-secondary-content font-medium">
              {recognition}
            </Text>
          </Tag>
        )}
      </div>
      <div className="h-full p-4 flex flex-col justify-between gap-4">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <Text as="h3">{name}</Text>
            <Text size="sm">{description}</Text>
          </div>
          {!featured && (
            <>
              <Divider />
              <div className="flex flex-col gap-1">
                <Text size="sm" className="font-medium">
                  Built for:
                </Text>
                <Text size="sm">
                  {context}
                </Text>
              </div>
              <div className="flex flex-col gap-1">
                <Text size="sm" className="font-medium">
                  My role:
                </Text>
                <Text size="sm">
                  {role}
                </Text>
              </div>

            </>
          )}
        </div>
        <div className="flex gap-2 justify-self-end">
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
