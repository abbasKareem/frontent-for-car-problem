import React from "react"
import { useNavigate } from "react-router-dom"

const CarsTypesPage = () => {
  const navgator = useNavigate()
  return (
    <>
      <div className="flex items-center justify-center ">
        <div className="grid grid-cols-3 gap-6 py-4">
          <div onClick={() => navgator("/singlecar")} className="w-24 bg-gray-200 rounded-lg h-28 drop-shadow-md"></div>
          <div onClick={() => navgator("/singlecar")} className="w-24 bg-gray-200 rounded-lg h-28 drop-shadow-md"></div>
          <div onClick={() => navgator("/singlecar")} className="w-24 bg-gray-200 rounded-lg h-28 drop-shadow-md"></div>
          <div onClick={() => navgator("/singlecar")} className="w-24 bg-gray-200 rounded-lg h-28 drop-shadow-md"></div>
          <div onClick={() => navgator("/singlecar")} className="w-24 bg-gray-200 rounded-lg h-28 drop-shadow-md"></div>
          <div onClick={() => navgator("/singlecar")} className="w-24 bg-gray-200 rounded-lg h-28 drop-shadow-md"></div>
          <div onClick={() => navgator("/singlecar")} className="w-24 bg-gray-200 rounded-lg h-28 drop-shadow-md"></div>
          <div onClick={() => navgator("/singlecar")} className="w-24 bg-gray-200 rounded-lg h-28 drop-shadow-md"></div>
          <div onClick={() => navgator("/singlecar")} className="w-24 bg-gray-200 rounded-lg h-28 drop-shadow-md"></div>
          <div onClick={() => navgator("/singlecar")} className="w-24 bg-gray-200 rounded-lg h-28 drop-shadow-md"></div>
          <div onClick={() => navgator("/singlecar")} className="w-24 bg-gray-200 rounded-lg h-28 drop-shadow-md"></div>
          <div onClick={() => navgator("/singlecar")} className="w-24 bg-gray-200 rounded-lg h-28 drop-shadow-md"></div>
          <div onClick={() => navgator("/singlecar")} className="w-24 bg-gray-200 rounded-lg h-28 drop-shadow-md"></div>
          <div onClick={() => navgator("/singlecar")} className="w-24 bg-gray-200 rounded-lg h-28 drop-shadow-md"></div>
        </div>
      </div>
      <div className="mb-40"></div>
    </>
  )
}

export default CarsTypesPage
