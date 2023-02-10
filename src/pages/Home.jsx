import { Avatar } from "@material-tailwind/react"
import React, { useState } from "react"
import Post from "../components/Post"

const Home = () => {
  const [active, setActive] = useState(0)
  const items = [{ title: "Ui Design" }, { title: "UX Design" }, { title: "Visual Design" }, { title: "Engines" }, { title: "Head Lights" }, { title: "Back Lights" }, { title: "Breaks" }, { title: "ABs System" }]
  return (
    <>
      <div className="h-screen bg-[#000000] overflow-x-hidden text-gray-100 px-4 relative">
        {/* the image and the notfication icon */}
        <div className="flex items-center justify-between mt-4">
          {/* <img className="object-cover rounded-full h-14 w-14" src="/person.jpg" alt="persion" /> */}
          <Avatar src="/person.jpg" variant="circular" />
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
        <div className="bg-[#252218] p-4 text-white mb-20">
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
      <div className="fixed bottom-0 z-30 w-full py-6 mt-10 overflow-hidden text-gray-300 bg-black">
        <div className="container mx-auto">
          <ul className="flex items-center justify-between gap-10">
            <li className="">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-7 h-7">
                <path fillRule="evenodd" d="M9.293 2.293a1 1 0 011.414 0l7 7A1 1 0 0117 11h-1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-3a1 1 0 00-1-1H9a1 1 0 00-1 1v3a1 1 0 01-1 1H5a1 1 0 01-1-1v-6H3a1 1 0 01-.707-1.707l7-7z" clipRule="evenodd" />
              </svg>
            </li>
            <li>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
              </svg>
            </li>
            <li className="p-2 bg-blue-600 rounded-full ">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
              </svg>
            </li>
            <li>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" />
              </svg>
            </li>
            <li>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"
                />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Home
