import React from "react"
import { useNavigate } from "react-router-dom"

const CarsTypesPage = () => {
  const navgator = useNavigate()
  return (
    <>
      <div className="flex items-center justify-center">
        <div className="grid grid-cols-3 gap-6 py-4">
          <div onClick={() => navgator("/singlecar")} className="flex flex-col items-center justify-center w-24 gap-6 bg-gray-200 rounded-lg h-28 drop-shadow-md">
            <p className="px-2 py-1 bg-red-100 rounded-md">image</p>
            <p className="text-[0.6rem] whitespace-nowrap ">American Car</p>
          </div>
          <div onClick={() => navgator("/singlecar")} className="flex flex-col items-center justify-center w-24 gap-6 bg-gray-200 rounded-lg h-28 drop-shadow-md">
            <p>image</p>
            <p className="text-[0.6rem] text-center text-black">American Car in china</p>
          </div>
        </div>
      </div>
      <div className="mb-40"></div>
    </>
  )
}

export default CarsTypesPage
