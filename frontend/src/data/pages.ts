import { type LucideIcon, Certificate, Folder, Home, Rocket } from "lucide-react";

interface Page {
  name: string;
  path: string;
  icon: LucideIcon;
}

const PAGES: Page[] = [
  { name: "Home", path: "/home", icon: Home },
  { name: "Projects", path: "/projects", icon: Folder },
  { name: "Certificates", path: "/certificates", icon: Certificate },
  { name: "More", path: "/more", icon: Rocket },
] as const

export {
  PAGES
}
