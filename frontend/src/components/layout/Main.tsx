import { Outlet } from "react-router";
import Footer from "./Footer";

export default function Main() {
  return (
    <main className="w-full p-8 bg-base-200">
      <div className="w-full flex justify-center">
        <Outlet />
      </div>
      <Footer />
    </main>
  )
}
