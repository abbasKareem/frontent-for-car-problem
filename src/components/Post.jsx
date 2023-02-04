import React from "react"

const Post = () => {
  return (
    <div>
      {/* Head */}
      <div className="flex items-center justify-center ">
        {/* image */}
        <div className="flex items-center justify-center mr-2">
          <img className="object-cover w-8 h-8 rounded-full" src="/person.jpg" alt="persion" />
        </div>
        {/* Right side */}
        <div className="w-full">
          <div className="flex justify-between ">
            <h4 className="font-bold tracking-wider text-md">Mansurul Hagque</h4>
            <p className="text-sm font-medium">
              <span className="font-semibold text-gray-500">Date</span> : 8/8/2021
            </p>
          </div>
          <p className="mt-2 text-sm font-semibold">
            <span className="text-sm font-semibold text-gray-500">Topic</span> : why You Need Ux In Design?
          </p>
        </div>
      </div>
      {/* Title */}
      <h2 className="mt-8 text-2xl font-bold">Why UX Design Is More Important Then UI Desgin</h2>
      {/* gray title */}
      <p className="mt-6 text-xl text-gray-500">why You Need Ux In Design?</p>
      {/* Body of post */}
      <p className="mt-6 text-lg font-medium tracking-wider">AS a founder of UI HUT i discover...</p>
      {/* Read time */}
      <div className="flex items-center justify-between mt-4">
        <p className="font-semibold text-green-500">Read Time: 5 min</p>
        <div className="text-gray-500 ">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" />
          </svg>
        </div>
      </div>
      <hr className="my-6 border-gray-700 border-1" />
    </div>
  )
}

export default Post
