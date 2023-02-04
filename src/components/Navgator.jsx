import React, { useState } from "react"
import { Link, NavLink, useLocation } from "react-router-dom"

const Navgator = () => {
  const location = useLocation()
  const pathName = location.pathname.split("/")
  console.log("🚀 ~ file: Navgator.jsx:7 ~ Navgator ~ pathName", pathName)

  const Menus = [
    { name: "Home", icon: "home-outline", dis: "translate-x-0", disbig: "-translate-x-[22.5rem]", link: "/" },
    { name: pathName[1], icon: "person-outline", dis: "translate-x-16", disbig: "-translate-x-[13.5rem]", link: "/about" },
    { name: pathName[1], icon: "chatbubble-outline", dis: "translate-x-32", disbig: "-translate-x-[4.5rem]", link: "/help" },
    { name: pathName[1], icon: "camera-outline", dis: "translate-x-48", disbig: "translate-x-[4.5rem]", link: "/careers" },
    // { name: "Settings", icon: "settings-outline", dis: "translate-x-64", disbig: "translate-x-[13.5rem]", link: "/" },
    // { name: "accessibility", icon: "accessibility-outline", dis: "translate-x-80", disbig: "translate-x-[22.5rem]", link: "/about" },
  ]

  const [myactive, setActive] = useState(0)

  return (
    <div className=" bg-gray-900  text-white max-h-[4.4rem] mx-2  mt-11 px-5 text-xs rounded-t-xl fixed md:mb-2 bottom-0 mb-2 md:block md:mt-10 md:pb-20 ">
      <ul className="relative flex md:justify-center md:items-center ">
        <span className={`bg-rose-600 border-4 border-white h-16 w-16  ${Menus[myactive].dis} duration-700 absolute -top-5 md:-top-3 rounded-full md:hidden `}>
          <span className="w-3.5 h-3.5 bg-transparent absolute top-4 -left-[18px] rounded-tr-[11px] shadow-myShadowL"></span>
          <span className="w-3.5 h-3.5 bg-transparent absolute top-4 -right-[18px] rounded-tl-[11px] shadow-myShadowR"></span>
        </span>

        {Menus.map((menu, i) => (
          <li key={i} className={`w-16 md:w-36`}>
            <NavLink to={menu.link} className={`flex flex-col text-center pt-6  ${i === myactive && " duration-500"}`} onClick={() => setActive(i)}>
              <span className={`text-xl cursor-pointer  duration-700 ${i === myactive && "-mt-6 text-white"}`}>
                <ion-icon name={menu.icon}></ion-icon>
              </span>
              <span className={`text-white ${myactive === i ? "translate-y-4 duration-700 opacity-100 md:border-b-2 md:border-red-600" : "opacity-50 translate-y-10"}`}>{menu.name}</span>
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Navgator
