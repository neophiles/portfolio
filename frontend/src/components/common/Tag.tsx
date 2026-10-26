import { cn } from "cn";
import type { Props } from "../../types/props";

export default function Tag({
  children,
  className,
}: Props) {
  return (
    <div className={cn(
      "px-4 py-1 rounded-lg",
      className
    )}>
      {children}
    </div>
  )
}
