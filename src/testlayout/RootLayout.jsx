import { Outlet } from "react-router-dom"
import Breadcrumbs from "../components/Breadcrumbs"
import Navgator from "../components/Navgator"

const RootLayout = () => {
  return (
    <div className="">
      <Breadcrumbs />
      <div className="relative flex items-center justify-center mt-10">
        <Navgator />
      </div>
      <main className="bg-red-600 pb-52">
        <Outlet />
      </main>
    </div>
  )
}

export default RootLayout
