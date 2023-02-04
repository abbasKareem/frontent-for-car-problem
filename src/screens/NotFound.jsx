import React from "react"
import { Link } from "react-router-dom"

const NotFound = () => {
  return (
    <div>
      <h2>Page not found</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima ex deleniti, voluptates ut neque nostrum vero architecto itaque temporibus, vel repudiandae animi quam est reprehenderit veritatis dolor odio consectetur similique!</p>
      <p>
        Go to the <Link to="/">HomePage</Link>{" "}
      </p>
    </div>
  )
}

export default NotFound
