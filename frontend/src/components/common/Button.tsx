import type { ButtonProps } from '../../types/props'
import { cn } from 'cn'

export default function Button({
  children,
  className,
  onClick
}: ButtonProps) {
  return (
    <button
      className={cn(
        "cursor-pointer overflow-hidden hover:brightness-90 transition-[filter] ease-in-out duration-500",
        className
      )}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
