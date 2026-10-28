import type { Props } from "../../../../types/props"
import useTheme from "../../../../stores/theme"
import { cn } from "cn"

interface ToolIconProps extends Props {
  imgSrc: string[];
}

export default function ToolIcon({
  className,
  imgSrc
}: ToolIconProps) {
  const { isDark } = useTheme()

  return (
    <img
      src={isDark && imgSrc[1] ? imgSrc[1] : imgSrc[0]}
      draggable={false}
      loading="lazy"
      className={cn(
        "flex-none select-none size-5 md:size-6",
        className
      )}
    />
  )
}
