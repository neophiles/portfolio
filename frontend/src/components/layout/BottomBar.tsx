import Card from "../common/Card"
import { PAGES } from "../../data/pages"
import NavButton from "./NavButton"

export default function BottomBar() {
  return (
    <Card className="z-40 fixed md:hidden bottom-8 left-1/2 -translate-x-1/2 max-w-sm px-2 py-1 flex items-center justify-evenly gap-3 bg-base-300/50 shadow-lg backdrop-blur">
      {PAGES.map((page, index) => (
        <NavButton key={index} page={page} placement="bottom" /> 
      ))}
    </Card>
  )
}
