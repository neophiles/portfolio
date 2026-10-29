import type { Props } from "../../../../types/props"
import useTheme from "../../../../stores/theme"
import { cn } from "cn"
import type { Tool } from "../../../../data/tools";

interface ToolIconProps extends Props {
  tool: Tool;
}

export default function ToolIcon({
  className,
  tool
}: ToolIconProps) {
  const {
    name,
    imgSrc,
  } = tool
  
  const { isDark } = useTheme()

  return (
    <img
      src={isDark && imgSrc[1] ? imgSrc[1] : imgSrc[0]}
      alt={name}
      draggable={false}
      loading="lazy"
      className={cn(
        "flex-none select-none size-5 md:size-6",
        className
      )}
    />
  )
}
