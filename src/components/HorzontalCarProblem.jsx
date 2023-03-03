import React from "react"
import { useQuery } from "react-query"

import PropagateLoader from "react-spinners/PropagateLoader"

import { fetch_all_problem } from "../query/post_query"

const HorzontalCarProblem = ({ setActive, setActiveLocation, setSearchParams, active }) => {
  const {
    data: locationData,
    error,
    isLoading,
    isError,
  } = useQuery("car-details", fetch_all_problem, {
    staleTime: 1800000,
  })

  if (isError) {
    return (
      <div>
        <p>Something went wrong ...</p>
      </div>
    )
  }

  return (
    <div>
      <nav className="grid grid-flow-col gap-4 overflow-x-scroll scrollbar-hide">
        <ul className="grid grid-flow-col gap-4 overflow-x-scroll scrollbar-hide">
          {isLoading && <PropagateLoader color="#120afa" />}
          {locationData?.map((item, i) => (
            <li
              key={i}
              onClick={() => {
                setActive(i)
                setActiveLocation(item.location)
                setSearchParams({ location: item.location })
              }}
              className={` text-sm text-gray-600 flex items-center justify-center w-auto px-6 py-1 whitespace-nowrap  ${active === i && "bg-[#F5E400]"}  rounded-full hover:cursor-pointer hover:bg-yellow-200 hover:text-white border border-gray-600`}
            >
              <p className={`font-semibold ${active === i && "text-gray-900"}  text-md`}>{item.location}</p>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}

export default HorzontalCarProblem
