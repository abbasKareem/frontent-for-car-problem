import React, { useState } from "react"
import { Link, NavLink, useLocation } from "react-router-dom"
import { AiOutlineHome } from "react-icons/ai"
import { ImStack } from "react-icons/im"

import { BiSearch, BiUser } from "react-icons/bi"
const Navgator2 = () => {
  const location = useLocation()
  const pathName = location.pathname.split("/")

  const Menus = [
    { name: "Home", icon: <AiOutlineHome />, dis: " translate-x-[-0.5rem]", link: "/" },
    { name: "Search", icon: <BiSearch />, dis: "translate-x-[6rem]", link: "/search" },
    { name: "All", icon: <ImStack />, dis: "translate-x-[12.9rem]", link: "/all-cars" },
    // { name: pathName[1], icon: "add-outline", link: "/addpost" },
    { name: "Profile", icon: <BiUser />, dis: "translate-x-[19.5rem]", link: "/profile" },
  ]

  const [myactive, setActive] = useState(0)

  return (
    <div className="fixed bottom-0 z-30 w-full px-4 py-1 mt-10 overflow-hidden text-gray-300 bg-black rounded-t-lg">
      <div className="container mx-auto">
        <ul className="relative flex items-center justify-between gap-10">
          {/* <span className={`bg-red-600 border-4 border-black h-14 w-14  ${Menus[myactive].dis}  duration-700 absolute -top-4 rounded-full`}></span> */}
          {Menus.map((menu, i) => (
            <li key={i} className="w-10">
              <NavLink to={menu.link} className={`flex flex-col text-center items-center pt-6  ${i === myactive && " duration-500"}`} onClick={() => setActive(i)}>
                <span className={`text-xl cursor-pointer  duration-700 ${i === myactive && "-mt-8 text-white"}`}>{menu.icon}</span>
                <span className={`text-white text-center text-sm ${myactive === i ? "translate-y-2 duration-400 opacity-100 text-yellow-700" : "opacity-50 translate-y-10"}`}>{menu.name}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Navgator2
