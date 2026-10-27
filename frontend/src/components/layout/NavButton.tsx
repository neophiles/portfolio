import Button from "../common/Button";
import Icon from "../common/Icon";
import Text from "../common/Text";
import { type Page } from "../../data/pages";
import { cn } from "cn";
import { useLocation, useNavigate } from "react-router";
import useScreenWidth from "../../hooks/useScreenWidth";
import useSidebar from "../../stores/sidebar";

type NavButtonPlacement = "side" | "bottom" 

export default function NavButton({
  page,
  placement,
}: {
  page: Page,
  placement: NavButtonPlacement
}) {
  const {
    name,
    path,
    icon,
  } = page

  const navigate = useNavigate()
  const location = useLocation()
  const { isOpen, toggleOpen } = useSidebar()
  const { screenWidth } = useScreenWidth()

  const currentPath = location.pathname
  const isActive = currentPath == path || (currentPath === "/" && path === "/home")

  const handleNavigate = (
    path: string,
    widthThreshold = 426
  ) => {
    navigate(path)
    window.scrollTo({ top: 0, behavior: "smooth" })
    if (screenWidth <= widthThreshold && isOpen) toggleOpen()
  }

  const placementClasses: Record<NavButtonPlacement, string[]> = {
    "side": ["bg-inherit text-base-content", "bg-primary/10 text-primary"],
    "bottom": ["bg-inherit/50 text-base-content", "bg-primary/75 text-primary-content"]
  }
  
  return (
    <Button
      className={cn(
        "p-1 flex items-center gap-4 rounded-lg",
        placementClasses[placement][0],
        isActive ? placementClasses[placement][1] : placementClasses[placement][0],
      )}
      onClick={() => handleNavigate(path)}
    >
      <Icon icon={icon} />
      {placement === "side" && (
        <Text size="sm" className="font-medium">{name}</Text>
      )}
    </Button>
  )
}
