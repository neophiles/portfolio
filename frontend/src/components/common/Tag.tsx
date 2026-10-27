import { cn } from "cn";
import type { Props } from "../../types/props";

export default function Tag({
  children,
  className,
}: Props) {
  return (
    <div className={cn(
      "px-2 py-1 rounded-lg",
      className
    )}>
      {children}
    </div>
  )
}
