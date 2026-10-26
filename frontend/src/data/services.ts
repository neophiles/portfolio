interface Service {
  name: string;
  description: string;
  includes: string;
}

const SERVICES: Service[] = [
  {
    name: "Static Websites",
    description: "Clean, fast-loading single-page or multi-page sites built to present information clearly without needing user accounts or database storage.",
    includes: "Personal portfolios, digital resumes, landing pages, announcements, and project or business showcases.",
  },
  {
    name: "Full-Stack Web Applications",
    description: "Custom and dynamic web platforms built with database storage and server logic so users can interact, save data, and manage records.",
    includes: "Web dashboards, management systems, inventory trackers, and interactive tools.",
  },
] as const

export type {
  Service,
}

export {
  SERVICES,
}
