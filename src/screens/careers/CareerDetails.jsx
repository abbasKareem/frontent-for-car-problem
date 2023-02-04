import React from "react"
import { useLoaderData, useParams } from "react-router-dom"

const CareerDetails = () => {
  //   const { id } = useParams()
  const career = useLoaderData()

  return (
    <div className="careers-details">
      <h2>Career Details for {career.title}</h2>
      <p>Starting salary: {career.salary} </p>
      <p>Location: {career.location}</p>
    </div>
  )
}

export default CareerDetails

// loader function
export const CareerDetailsLoader = async ({ params }) => {
  const { id } = params

  const res = await fetch("http://localhost:4000/careers/" + id)

  if (!res.ok) {
    throw Error("Could not found that career")
  }
  return res.json()
}
