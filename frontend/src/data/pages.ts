import { type LucideIcon, Award, Certificate, Folder, Home, Phone, Rocket } from "lucide-react";

interface Page {
  name: string;
  path: string;
  icon: LucideIcon;
}

const PAGES: Page[] = [
  { name: "Home", path: "/home", icon: Home },
  { name: "Projects", path: "/projects", icon: Folder },
  { name: "Certificates", path: "/certificates", icon: Certificate },
  { name: "Awards", path: "/awards", icon: Award },
  { name: "Contact", path: "/contact", icon: Phone },
  { name: "More", path: "/more", icon: Rocket },
] as const

export type {
  Page,
}

export {
  PAGES,
}
