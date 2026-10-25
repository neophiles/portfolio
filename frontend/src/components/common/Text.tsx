import { cn } from "cn";
import type { Size, TextProps } from "../../types/props";

export default function Text({
  children,
  className,
  as: Component = "p",
  size = "md",
}: TextProps) {
  const sizeClasses: Record<Size, string> = {
    "2xs": "",
    "xs": "",
    "sm": "text-xs md:text-sm lg:text-base",
    "md": "text-sm md:text-base lg:text-lg",
    "lg": "text-base md:text-lg lg:text-xl",
    "xl": "text-lg md:text-xl lg:text-2xl",
    "2xl": "text-xl md:text-2xl lg:text-3xl",
    "3xl": "text-2xl md:text-3xl lg:text-4xl",
  }

  const isHeading = Component != "p" ? "font-bold" : ""
  
  return (
    <Component className={cn(
      "leading-none",
      isHeading,
      sizeClasses[size],
      className
    )}>
      {children}
    </Component>
  )
}
