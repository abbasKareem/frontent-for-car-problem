import React from "react"

const PlusIcon = ({ width, hight, fill }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill={fill} strokeWidth={1.5} stroke="currentColor" className={`w-${width} h-${hight}`} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
    </svg>
  )
}

export default PlusIcon
