import Card from "../../../common/Card";
import Text from "../../../common/Text";
import ToolIcon from "./ToolIcon";
import type { Tool } from "../../../../data/tools";

export default function ToolCard({
  tool,
}: {
  tool: Tool,
}) {
  const {
    name,
    imgSrc,
  } = tool

  return (
    <Card className="flex-1 aspect-square lg:flex-none lg:w-22 p-1 flex flex-col items-center justify-center gap-1 bg-base-100/50 shadow">
      <ToolIcon imgSrc={imgSrc} className="size-8" />
      <Text size="sm" className="hidden md:block text-base-content-muted">
        {name}
      </Text>
    </Card>
  )
}
