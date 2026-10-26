import { cn } from "cn"
import type { Props } from "../../types/props"

export default function Divider({
  className
}: Props) {
  return (
    <hr className={cn(
      "border-2 border-base-300",
      className
    )} />
  )
}
