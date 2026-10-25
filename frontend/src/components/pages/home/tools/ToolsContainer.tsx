import ToolCard from "./ToolCard";
import { TOOLS, type ToolGroup } from "./tools";


export default function ToolsContainer({
  filter,
}: {
  filter: ToolGroup | "All",
}) {
  const toolsDisplay = filter != "All"
    ? TOOLS.filter((tool) => tool.groups.includes(filter))
    : TOOLS

  return (
    <div className="flex flex-wrap gap-2">
      {toolsDisplay.map((tool, index) => (
        <ToolCard key={index} tool={tool} />
      ))}
    </div>
  )
}
