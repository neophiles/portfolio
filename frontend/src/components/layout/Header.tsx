import { Menu, Moon, Sun } from "lucide-react";
import Button from "../common/Button";
import Text from "../common/Text";
import useSidebar from "../../stores/sidebar";
import { useNavigate } from "react-router";
import useTheme from "../../stores/theme";
import Icon from "../common/Icon";

export default function Header() {
  const { toggleOpen } = useSidebar()
  const { isDark, toggleDark } = useTheme()
  const navigate = useNavigate()

  return (
    <header className="z-20 sticky top-0 w-full h-14 p-4 flex items-center justify-center bg-base-100">
      <div className="w-full flex items-center gap-2 bg-inherit">
        <Button className="p-1 bg-inherit rounded-lg" onClick={toggleOpen}>
          <Menu />
        </Button>
        <Button className="p-1 bg-inherit rounded-lg" onClick={() => navigate("/home")}>
          <Text as="h1">neophiles portfolio</Text>
        </Button>
        <div className="flex-1" />
        <Button
          onClick={toggleDark}
        >
          {isDark
            ? <Icon icon={Moon} className="text-sky-400" />
            : <Icon icon={Sun} className="text-amber-400"/>
          }
        </Button>
      </div>
    </header>
  )
}
