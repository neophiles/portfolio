import { cn } from "cn"
import type { IconProps } from "../../types/props"

export default function Icon({
  icon: Icon,
  className
}: IconProps) {
  return (
    <Icon
      className={cn(
      "shrink-0",
      className
    )} />
  )
}
