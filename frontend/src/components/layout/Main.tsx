import { Outlet } from "react-router";

export default function Main() {
  return (
    <main className="w-full p-8 bg-base-200">
      <div className="w-full flex justify-center">
        <Outlet />
      </div>
      <div className="h-100"/>
    </main>
  )
}
