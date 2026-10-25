import { Outlet } from "react-router";

export default function Main() {
  return (
    <main className="w-full p-4 bg-base-100">
      <div className="w-full">
        <Outlet />
      </div>
    </main>
  )
}
