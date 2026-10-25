import type { LucideIcon } from "lucide-react";
import type { ButtonHTMLAttributes, ReactNode } from "react";

interface Props {
  children?: ReactNode;
  className?: string;
}

type Size = "2xs" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl"

type TextType = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p"

interface TextProps extends Props {
  as?: TextType;
  size?: Size;
}

type ButtonProps = Props & ButtonHTMLAttributes<HTMLButtonElement>

interface IconProps {
  icon: LucideIcon;
  className?: string;
}

export type {
  Props,
  Size,
  TextType,
  TextProps,
  ButtonProps,
  IconProps,
}
