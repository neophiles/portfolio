import { cn } from "cn";
import Button from "../../../common/Button";
import Text from "../../../common/Text";
import ToolsContainer from "./ToolsContainer";
import { useState } from "react";
import { TOOL_GROUPS, type ToolGroup } from "./tools";

export default function ToolsSection() {
  const [filter, setFilter] = useState<ToolGroup | "All">("All")

  return (
    <section className="w-full flex flex-col md:flex-row gap-12">
      <div className="w-full flex flex-col gap-4">
        <Text as="h2" size="lg">
          My Tools
        </Text>
        <div className="mb-4 flex flex-wrap gap-2">
          {(TOOL_GROUPS || "All").flatMap((group) => (
            <Button
              key={group}
              className={cn(
                "px-2 py-0.5 rounded-xl shadow font-medium",
                group == filter ? "bg-secondary text-secondary-content" : "bg-base-300 text-base-content-muted"
              )}
              onClick={() => setFilter(group)}
            >
              <Text size="sm" className="">{group}</Text>
            </Button>
          ))}
        </div>
        <ToolsContainer filter={filter} />
      </div>
    </section>
  )
}
