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
import dotnetIcon from "../assets/tools/dotnet.svg"
import htmlIcon from "../assets/tools/html.svg"
import cssIcon from "../assets/tools/css.svg"
import javascriptIcon from "../assets/tools/javascript.svg"

type ToolGroup = "Frontend" | "Backend" | "Database" | "DevOps"

interface Tool {
  name: string;
  imgSrc: string[];
  groups: ToolGroup[];
  display: boolean;
}

const TOOL_GROUPS = ["All", "Frontend", "Backend", "Database", "DevOps"] as const

const TOOLS: Tool[] = [
  { name: "HTML", imgSrc: [htmlIcon], groups: ["Frontend"], display: false },
  { name: "CSS", imgSrc: [cssIcon], groups: ["Frontend"], display: false },
  { name: "JavaScript", imgSrc: [javascriptIcon], groups: ["Frontend", "Backend"], display: false },
  { name: "React", imgSrc: [reactIcon], groups: ["Frontend"], display: true },
  { name: "TypeScript", imgSrc: [typescriptIcon], groups: ["Frontend", "Backend"], display: true },
  { name: "Tailwind", imgSrc: [tailwindIcon], groups: ["Frontend"], display: true },
  { name: "Chakra UI", imgSrc: [chakrauiIcon], groups: ["Frontend"], display: false },
  { name: "Express", imgSrc: [expressIconDark, expressIconLight], groups: ["Backend"], display: true },
  { name: "FastAPI", imgSrc: [fastapiIcon], groups: ["Backend"], display: true },
  { name: ".NET", imgSrc: [dotnetIcon], groups: ["Backend"], display: false },
  { name: "PostgreSQL", imgSrc: [postgresIcon], groups: ["Backend", "Database"], display: true },
  { name: "Prisma", imgSrc: [prismaIcon], groups: ["Backend", "Database"], display: true },
  { name: "Supabase", imgSrc: [supabaseIcon], groups: ["Backend", "Database"], display: true },
  { name: "Git", imgSrc: [gitIcon], groups: ["DevOps"], display: true },
  { name: "Docker", imgSrc: [dockerIcon], groups: ["DevOps"], display: true },
  { name: "Vercel", imgSrc: [vercelIcon], groups: ["Frontend", "DevOps"], display: true },
  { name: "Render", imgSrc: [renderIcon], groups: ["Backend", "DevOps"], display: true },

]

export type {
  ToolGroup,
  Tool,
}

export {
  TOOL_GROUPS,
  TOOLS,
}
