import useTheme from "../../../../stores/theme";
import Card from "../../../common/Card";
import Text from "../../../common/Text";
import type { Tool } from "./tools";

export default function ToolCard({
  tool,
}: {
  tool: Tool,
}) {
  const {
    name,
    imgSrc,
  } = tool

  const { isDark } = useTheme()

  return (
    <Card className="flex-none aspect-square w-20 lg:w-24 p-1 flex flex-col items-center justify-center gap-1 bg-base-100/50 shadow">
      <img
        src={isDark && imgSrc[1] ? imgSrc[1] : imgSrc[0]}
        draggable={false}
        className="flex-none size-8"
      />
      <Text size="sm" className="text-base-content-muted">
        {name}
      </Text>
    </Card>
  )
}
