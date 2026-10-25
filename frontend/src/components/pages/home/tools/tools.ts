import reactIcon from "../../../../assets/tools/react.svg"
import typescriptIcon from "../../../../assets/tools/typescript.svg"
import tailwindIcon from "../../../../assets/tools/tailwindcss.svg"
import expressIconDark from "../../../../assets/tools/expressjs-dark.svg"
import expressIconLight from "../../../../assets/tools/expressjs-light.svg"
import fastapiIcon from "../../../../assets/tools/fastapi.svg"
import postgresIcon from "../../../../assets/tools/postgresql.svg"
import prismaIcon from "../../../../assets/tools/prisma.svg"
import supabaseIcon from "../../../../assets/tools/supabase.svg"
import gitIcon from "../../../../assets/tools/git.svg"
import dockerIcon from "../../../../assets/tools/docker.svg"
import vercelIcon from "../../../../assets/tools/vercel.svg"
import renderIcon from "../../../../assets/tools/render.svg"

type ToolGroup = "Frontend" | "Backend" | "Database" | "DevOps"

interface Tool {
  name: string;
  imgSrc: string[];
  groups: ToolGroup[];
}

const TOOL_GROUPS = ["All", "Frontend", "Backend", "Database", "DevOps"] as const

const TOOLS: Tool[] = [
  { name: "React", imgSrc: [reactIcon], groups: ["Frontend"] },
  { name: "TypeScript", imgSrc: [typescriptIcon], groups: ["Frontend", "Backend"] },
  { name: "Tailwind", imgSrc: [tailwindIcon], groups: ["Frontend"] },
  { name: "Express", imgSrc: [expressIconDark, expressIconLight], groups: ["Backend"] },
  { name: "FastAPI", imgSrc: [fastapiIcon], groups: ["Backend"] },
  { name: "PostgreSQL", imgSrc: [postgresIcon], groups: ["Backend", "Database"] },
  { name: "Prisma", imgSrc: [prismaIcon], groups: ["Backend", "Database"] },
  { name: "Supabase", imgSrc: [supabaseIcon], groups: ["Backend", "Database"] },
  { name: "Git", imgSrc: [gitIcon], groups: ["DevOps"] },
  { name: "Docker", imgSrc: [dockerIcon], groups: ["DevOps"] },
  { name: "Vercel", imgSrc: [vercelIcon], groups: ["Frontend", "DevOps"] },
  { name: "Render", imgSrc: [renderIcon], groups: ["Backend", "DevOps"] },
]

export type {
  ToolGroup,
  Tool,
}

export {
  TOOL_GROUPS,
  TOOLS,
}
