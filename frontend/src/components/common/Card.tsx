import { cn } from "cn";
import type { Props } from "../../types/props";

export default function Card({
  children,
  className,
}: Props) {
  return (
    <div className={cn(
      "rounded-lg",
      className
    )}>
      {children}
    </div>
  )
}
