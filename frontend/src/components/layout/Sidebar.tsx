import useSidebar from "../../stores/sidebar";
import { cn } from "cn";
import { PAGES } from "../../data/pages";
import NavButton from "./NavButton";

export default function Sidebar() {
  const { isOpen } = useSidebar()

  const sidebarWidth = isOpen ? "w-xs" : "w-0 md:w-16"

  return (
    <aside className={cn(
      "z-10 fixed md:sticky left-0 top-14 h-[calc(100vh-3.5rem)] bg-base-300 overflow-hidden md:overflow-visible transition-[width] ease-in-out duration-300",
      sidebarWidth
    )}>
      <div className="p-4 flex flex-col bg-inherit overflow-hidden">
        <nav className="flex flex-col gap-2 bg-inherit">
          {PAGES.map((page, index) => (
            <NavButton key={index} page={page} placement="side" />
          ))}
        </nav>
      </div>
    </aside>
  )
}
