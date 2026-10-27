import { useLocation, useNavigate } from "react-router";
import useSidebar from "../../stores/sidebar";
import Text from "../common/Text";
import Button from "../common/Button";
import Icon from "../common/Icon";
import { cn } from "cn";
import useScreenWidth from "../../hooks/useScreenWidth";
import { PAGES } from "../../data/pages";

export default function Sidebar() {
  const { isOpen, toggleOpen } = useSidebar()
  const { screenWidth } = useScreenWidth()
  const navigate = useNavigate()
  const location = useLocation()

  const handleNavigate = (
    path: string,
    widthThreshold = 426
  ) => {
    navigate(path)
    window.scrollTo({ top: 0, behavior: "smooth" })
    if (screenWidth <= widthThreshold) toggleOpen()
  }

  const sidebarWidth = isOpen ? "w-xs" : "w-0 md:w-16"

  return (
    <aside className={cn(
      "z-10 fixed md:sticky left-0 top-14 h-[calc(100vh-3.5rem)] bg-base-300 overflow-hidden md:overflow-visible transition-[width] ease-in-out duration-300",
      sidebarWidth
    )}>
      <div className="p-4 flex flex-col bg-inherit overflow-hidden">
        <nav className="flex flex-col gap-2 bg-inherit">
          {PAGES.map(({ name, path, icon }, index) => {
            const currentPath = location.pathname
            const isActive = currentPath == path || (currentPath === "/" && path === "/home")

            return (
             <Button
                key={index}
                className={cn(
                  "p-1 flex items-center gap-4 rounded-lg",
                  isActive ? "brightness-90 bg-primary/10 text-primary" : "bg-inherit",
                )}
                onClick={() => handleNavigate(path)}
              >
                <Icon icon={icon} />
                <Text size="sm" className="font-medium">{name}</Text>
              </Button>
           ) 
          })}
        </nav>
      </div>
    </aside>
  )
}
