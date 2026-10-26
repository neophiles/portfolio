import reactIcon from "../assets/tools/react.svg"
import typescriptIcon from "../assets/tools/typescript.svg"
import tailwindIcon from "../assets/tools/tailwindcss.svg"
import expressIconDark from "../assets/tools/expressjs-dark.svg"
import expressIconLight from "../assets/tools/expressjs-light.svg"
import fastapiIcon from "../assets/tools/fastapi.svg"
import postgresIcon from "../assets/tools/postgresql.svg"
import prismaIcon from "../assets/tools/prisma.svg"
import supabaseIcon from "../assets/tools/supabase.svg"
import gitIcon from "../assets/tools/git.svg"
import dockerIcon from "../assets/tools/docker.svg"
import vercelIcon from "../assets/tools/vercel.svg"
import renderIcon from "../assets/tools/render.svg"
import chakrauiIcon from "../assets/tools/chakraui.svg"

type ToolGroup = "Frontend" | "Backend" | "Database" | "DevOps"

interface Tool {
  name: string;
  imgSrc: string[];
  groups: ToolGroup[];
  display: boolean;
}

const TOOL_GROUPS = ["All", "Frontend", "Backend", "Database", "DevOps"] as const

const TOOLS: Tool[] = [
  { name: "React", imgSrc: [reactIcon], groups: ["Frontend"], display: true },
  { name: "TypeScript", imgSrc: [typescriptIcon], groups: ["Frontend", "Backend"], display: true },
  { name: "Tailwind", imgSrc: [tailwindIcon], groups: ["Frontend"], display: true },
  { name: "Express", imgSrc: [expressIconDark, expressIconLight], groups: ["Backend"], display: true },
  { name: "FastAPI", imgSrc: [fastapiIcon], groups: ["Backend"], display: true },
  { name: "PostgreSQL", imgSrc: [postgresIcon], groups: ["Backend", "Database"], display: true },
  { name: "Prisma", imgSrc: [prismaIcon], groups: ["Backend", "Database"], display: true },
  { name: "Supabase", imgSrc: [supabaseIcon], groups: ["Backend", "Database"], display: true },
  { name: "Git", imgSrc: [gitIcon], groups: ["DevOps"], display: true },
  { name: "Docker", imgSrc: [dockerIcon], groups: ["DevOps"], display: true },
  { name: "Vercel", imgSrc: [vercelIcon], groups: ["Frontend", "DevOps"], display: true },
  { name: "Render", imgSrc: [renderIcon], groups: ["Backend", "DevOps"], display: true },
  { name: "Chakra UI", imgSrc: [chakrauiIcon], groups: ["Frontend"], display: false },

]

export type {
  ToolGroup,
  Tool,
}

export {
  TOOL_GROUPS,
  TOOLS,
}
