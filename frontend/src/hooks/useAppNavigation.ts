import { useNavigate } from "react-router";
import useSidebar from "../stores/sidebar";
import useScreenWidth from "./useScreenWidth";

const useAppNavigation = () => {
  const navigate = useNavigate()
  const { isOpen, toggleOpen } = useSidebar()
  const { screenWidth } = useScreenWidth()

  const handleNavigate = (
    path: string,
    widthThreshold = 426
  ) => {
    if (["/certificates", "/awards"].includes(path)) {
      alert("Coming Soon")
      return
    }

    navigate(path)
    window.scrollTo({ top: 0, behavior: "smooth" })
    if (screenWidth <= widthThreshold && isOpen) toggleOpen()
  }
  
  return { handleNavigate }
}

export default useAppNavigation
