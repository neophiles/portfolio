import ToolCard from "./ToolCard";
import { TOOLS, type ToolGroup } from "../../../../data/tools";

export default function ToolsContainer({
  filter,
}: {
  filter: ToolGroup | "All",
}) {
  const toolsDisplay = filter != "All"
    ? TOOLS.filter((tool) => tool.groups.includes(filter))
    : TOOLS

  return (
    <div className="grid grid-cols-4 md:grid-cols-6 lg:flex lg:flex-wrap gap-2">
      {toolsDisplay.filter((tool) => tool.display).map((tool, index) => (
        <ToolCard key={index} tool={tool} />
      ))}
    </div>
  )
}
