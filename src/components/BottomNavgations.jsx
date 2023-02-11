import { useState } from "react"
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom"
import HomeIcon from "../icons/HomeIcon"
import HomeIconActive from "../icons/HomeIconActive"
import LayersIcon from "../icons/LayersIcon"
import PlusIcon from "../icons/PlusIcon"
import SearchIcon from "../icons/SearchIcon"
import SearchIconActive from "../icons/SearchIconActive"

const BottomNavgations = () => {
  const [activeLink, setActiveLink] = useState(0)
  const navgation = useNavigate()
  const location = useLocation()

  return (
    <div className="fixed bottom-0 z-30 w-full py-6 mt-10 overflow-hidden text-gray-300 bg-black">
      <div className="container mx-auto">
        <ul className="relative flex items-center justify-between gap-10">
          <NavLink to="/">
            <li>{location.pathname === "/" ? <HomeIconActive /> : <HomeIcon />}</li>
          </NavLink>
          <NavLink to="search">
            <li>{location.pathname === "/search" ? <SearchIconActive /> : <SearchIcon />}</li>
          </NavLink>
          <li className="p-2 bg-blue-600 rounded-full ">
            <PlusIcon width={7} hight={7} fill="none" />
          </li>
          <li>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" />
            </svg>
          </li>
          <li>
            <LayersIcon width={7} hight={7} fill="none" />
          </li>
        </ul>
      </div>
    </div>
  )
}

export default BottomNavgations
