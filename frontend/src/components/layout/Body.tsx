import BottomBar from "./BottomBar";
import Main from "./Main";
import Sidebar from "./Sidebar";

export default function Body() {
  return (
    <div className="flex-1 flex">
      <Sidebar />
      <Main />
      <BottomBar />
    </div>
  )
}
