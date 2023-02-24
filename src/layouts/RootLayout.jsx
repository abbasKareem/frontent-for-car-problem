import React from "react"
import { Outlet } from "react-router-dom"
import BottomNavgations from "../components/BottomNavgations"
import Navgator from "../components/Navgator"
import Navgator2 from "../components/Navgator2"

const RootLayout = () => {
  return (
    // <div className="h-screen bg-[#000000] overflow-x-hidden scrollbar-hide text-gray-100">
    <div style={{ WebkitTapHighlightColor: "transparent" }} className="h-screen overflow-x-hidden text-gray-900 pb-44 font-poppins bg-gray-50 scrollbar-hide">
      <Outlet />
      {/* <BottomNavgations /> */}
      <Navgator2 />
    </div>
  )
}

export default RootLayout
