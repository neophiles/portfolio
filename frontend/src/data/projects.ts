import euventure1 from "../assets/projects/euventure-1.png"
import presko1 from "../assets/projects/presko-1.png"
import leap1 from "../assets/projects/leap-1.png"
import sidekick1 from "../assets/projects/sidekick-1.webp"
import ligtas1 from "../assets/projects/ligtas-1.png"
import confisense1 from "../assets/projects/confisense-1.png"

interface Project {
  name: string;
  description: string;
  context: string;
  recognition?: string;
  role: string;
  tools: string[];
  imgSrc: string[];
  githubHref: string;
  featured: boolean;
}

const PROJECTS: Project[] = [
  {
    name: "Sidekick",
    description: "A web application built to help working students and student freelancers in the Philippines exchange their skills for extra income to combat rising tuition costs.",
    context: "Open iT Applied Full Stack and Data Science Bootcamp 2026",
    role: "Backend Developer",
    recognition: "Best in Capstone Project",
    tools: [".NET", "PostgreSQL"],
    imgSrc: [sidekick1],
    githubHref: "https://github.com/lucifron28/openit-bootcamp-capstone",
    featured: true,
  },
  {
    name: "PRESKO",
    description: "A mobile-first web application providing real-time local heat indices and an interactive map to help users locate nearby cooling and hydration spots.",
    context: "Philippine Junior Data Science Competition 2025",
    role: "Project Lead, Frontend Developer",
    recognition: "Top 10 National Finalist",
    tools: ["React", "Tailwind", "Chakra UI"],
    imgSrc: [presko1],
    githubHref: "https://github.com/neophiles/KlimaTech",
    featured: true,
  },
  {
    name: "EUventure",
    description: "A mobile-first platform that gamifies MSEUF university orientation through physical campus exploration, QR check-ins, and interactive quizzes.",
    context: "CP105: Application Development Final Project",
    role: "Backend Developer",
    tools: ["Express", "Prisma", "PostgreSQL", "Supabase"],
    imgSrc: [euventure1],
    githubHref: "https://github.com/pak-pow/AdaVizion",
    featured: true,
  },
  {
    name: "LEAP",
    description: "A predictive dashboard that forecasts Metro Manila leptospirosis outbreaks in advance using spatio-temporal health, climate, and infrastructure data.",
    context: "Philippine Junior Data Science Challenge 2026",
    role: "Project Lead, Frontend Developer",
    tools: ["React", "Tailwind", "FastAPI", "PostgreSQL"],
    imgSrc: [leap1],
    githubHref: "https://github.com/eigenlambda123/AIconic-PJDSC-26",
    featured: false,
  },
  {
    name: "LIGTAS",
    description: "A mobile-first web application that delivers earthquake data, safety guides, and evacuation center mapping to help users stay safe during seismic events.",
    context: "OpeniT Hackathon CodeFest 2025",
    role: "Project Lead, Frontend Developer",
    tools: ["React", "Tailwind", "Chakra UI"],
    imgSrc: [ligtas1],
    githubHref: "https://github.com/eigenlambda123/OpenIT",
    featured: false,
  },
  {
    name: "ConFiSense",
    description: "An AI-powered financial sandbox that lets users model real-life scenarios, adjust variables, and visualize outcomes tailored for Filipinos.",
    context: "BPI DATA Wave 2025",
    role: "Project Lead, Frontend Developer",
    tools: ["HTML", "CSS", "JavaScript"],
    imgSrc: [confisense1],
    githubHref: "https://github.com/eigenlambda123/ConFisense",
    featured: false,
  },
]

export type {
  Project,
}

export {
  PROJECTS,
}
