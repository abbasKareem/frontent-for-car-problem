import React, { useState } from "react"
import Post from "../components/Post"

const Home = () => {
  const [active, setActive] = useState(0)
  const items = [{ title: "Ui Design" }, { title: "UX Design" }, { title: "Visual Design" }, { title: "Engines" }, { title: "Head Lights" }, { title: "Back Lights" }, { title: "Breaks" }, { title: "ABs System" }]
  return (
    <>
      <div className="h-screen bg-[#000000] overflow-x-hidden text-gray-100 px-4">
        {/* the image and the notfication icon */}
        <div className="flex items-center justify-between mt-4">
          <img className="object-cover rounded-full h-14 w-14" src="/person.jpg" alt="persion" />
          <button>
            <div className="p-2 border border-gray-600 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
              </svg>
            </div>
          </button>
        </div>
        {/* Explore */}
        <h1 className="mt-10 text-4xl font-bold tracking-wide">Explore</h1>
        <div className="mt-8">
          <ul className="grid grid-flow-col gap-4 overflow-x-scroll scrollbar-hide">
            {items.map((item, i) => (
              <li key={i} onClick={() => setActive(i)} className={`flex items-center justify-center w-32 py-2 ${active === i && "bg-[#F5E400]"}  rounded-full hover:cursor-pointer hover:bg-yellow-200 hover:text-white border border-gray-600`}>
                <p className={`font-semibold ${active === i && "text-gray-900"}  text-md`}>{item.title}</p>
              </li>
            ))}
          </ul>
        </div>
        {/* The following */}
        <div className="flex items-center justify-between mt-12">
          <h4 className="text-lg font-semibold tracking-wide">FOLLOWING</h4>
          <div className="flex items-center justify-center gap-2">
            <p className="font-medium text-md">Sort By</p>
            <button>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 01-.659 1.591l-5.432 5.432a2.25 2.25 0 00-.659 1.591v2.927a2.25 2.25 0 01-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 00-.659-1.591L3.659 7.409A2.25 2.25 0 013 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0112 3z" />
              </svg>
            </button>
          </div>
        </div>

        {/* Post items */}
        <div className="mt-10">
          <Post />
          <Post />
        </div>
        {/* Trending Now */}
        <div className="bg-[#252218] p-4 text-white">
          <h1 className="mb-8 text-xl font-semibold tracking-wider">TRENDING NOW</h1>
          <div className="mx-2 mb-10">
            <div>
              <div className="flex gap-4">
                <div className="mr-2 ">
                  <img className="object-cover w-20 h-24 rounded-lg" src="/person.jpg" alt="persion" />
                </div>
                <div className="flex flex-col p-0">
                  <p className="text-lg text-gray-500">Faysal Khan</p>
                  <p className="text-xl truncate">End OF The Line For Uber</p>
                  <p className="text-xl text-gray-500 trun">Why Uber is Gone?</p>
                  <p className="font-semibold text-green-500">Read Time: 8 min</p>
                </div>
              </div>
            </div>
            <hr className="my-6 border-gray-700 border-1" />
          </div>
          <div className="mx-2 mb-10">
            <div>
              <div className="flex gap-4">
                <div className="mr-2 ">
                  <img className="object-cover w-20 h-24 rounded-lg" src="/person.jpg" alt="persion" />
                </div>
                <div className="flex flex-col p-0">
                  <p className="text-lg text-gray-500">Faysal Khan</p>
                  <p className="text-xl truncate">End OF The Line For Uber</p>
                  <p className="text-xl text-gray-500 trun">Why Uber is Gone?</p>
                  <p className="font-semibold text-green-500">Read Time: 8 min</p>
                </div>
              </div>
            </div>
            <hr className="my-6 border-gray-700 border-1" />
          </div>
        </div>
        {/* Bottom navgation */}
      </div>
    </>
  )
}

export default Home
