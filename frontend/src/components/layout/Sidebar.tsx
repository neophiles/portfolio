import { useNavigate } from "react-router";
import useSidebar from "../../stores/sidebar";
import Text from "../common/Text";
import Button from "../common/Button";
import { Certificate, Folder, Home, Rocket } from "lucide-react";
import Icon from "../common/Icon";
import { cn } from "cn";
import useScreenWidth from "../../hooks/useScreenWidth";

export default function Sidebar() {
  const { isOpen, toggleOpen } = useSidebar()
  const { screenWidth } = useScreenWidth()
  const navigate = useNavigate()

  const handleNavigate = (
    path: string,
    widthThreshold = 426
  ) => {
    navigate(path)
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
          <Button
            className="p-1 flex items-center gap-4 bg-inherit rounded-lg"
            onClick={() => handleNavigate("/home")}
          >
            <Icon icon={Home} />
            <Text size="sm">Home</Text>
          </Button>
          <Button
            className="p-1 flex items-center gap-4 bg-inherit rounded-lg"
            onClick={() => handleNavigate("/projects")}
          >
            <Icon icon={Folder} />
            <Text size="sm">Projects</Text>
          </Button>
          <Button
            className="p-1 flex items-center gap-4 bg-inherit rounded-lg"
            onClick={() => handleNavigate("/certificates")}
          >
            <Icon icon={Certificate} />
            <Text size="sm">Certificates</Text>
          </Button>
          <Button
            className="p-1 flex items-center gap-4 bg-inherit rounded-lg"
            onClick={() => handleNavigate("/more")}
          >
            <Icon icon={Rocket} />
            <Text size="sm" className="text-nowrap">More</Text>
          </Button>
        </nav>
      </div>
    </aside>
  )
}
