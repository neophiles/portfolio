import { type LucideIcon, Certificate, Folder, Home, Phone, User } from "lucide-react";

interface Page {
  name: string;
  path: string;
  icon: LucideIcon;
}

const PAGES: Page[] = [
  { name: "Home", path: "/home", icon: Home },
  { name: "Credentials", path: "/credentials", icon: Certificate },
  { name: "Projects", path: "/projects", icon: Folder },
  { name: "About", path: "/about", icon: User },
  { name: "Contact", path: "/contact", icon: Phone },
] as const

export type {
  Page,
}

export {
  PAGES,
}
