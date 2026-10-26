import euventure1 from "../assets/projects/euventure-1.png"
import presko1 from "../assets/projects/presko-1.png"
import leap1 from "../assets/projects/leap-1.png"

interface Project {
  name: string;
  description: string;
  tools: string[];
  imgSrc: string[];
  githubHref: string;
}

const PROJECTS: Project[] = [
  {
    name: "EUventure",
    description: "A mobile-first platform that gamifies MSEUF university orientation through physical campus exploration, QR check-ins, and interactive quizzes.",
    tools: ["Express", "PostgreSQL", "Supabase"],
    imgSrc: [euventure1],
    githubHref: "https://github.com/pak-pow/AdaVizion",
  },
  {
    name: "PRESKO",
    description: "A mobile-first web application providing real-time local heat indices and an interactive map to help users locate nearby cooling and hydration spots.",
    tools: ["React", "Tailwind"],
    imgSrc: [presko1],
    githubHref: "https://github.com/neophiles/KlimaTech",
  },
  {
    name: "LEAP",
    description: "A predictive dashboard that forecasts Metro Manila leptospirosis outbreaks in advance using spatio-temporal health, climate, and infrastructure data.",
    tools: ["React", "FastAPI", "PostgreSQL"],
    imgSrc: [leap1],
    githubHref: "https://github.com/eigenlambda123/AIconic-PJDSC-26",
  },
]

export type {
  Project,
}

export {
  PROJECTS,
}
