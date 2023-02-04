import { useState } from "react"
import { Navigate } from "react-router-dom"

const About = () => {
  const [user, setUser] = useState("abbas")
  if (!user) {
    return <Navigate to="/" replace={true} />
  }
  return (
    <div className="about">
      <h2>About Us</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius, deleniti animi similique illum porro ipsam. Cupiditate laudantium quos, sequi est pariatur magni, obcaecati praesentium quod hic harum nemo error odit.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius, deleniti animi similique illum porro ipsam. Cupiditate laudantium quos, sequi est pariatur magni, obcaecati praesentium quod hic harum nemo error odit.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius, deleniti animi similique illum porro ipsam. Cupiditate laudantium quos, sequi est pariatur magni, obcaecati praesentium quod hic harum nemo error odit.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius, deleniti animi similique illum porro ipsam. Cupiditate laudantium quos, sequi est pariatur magni, obcaecati praesentium quod hic harum nemo error odit.</p>

      <button onClick={() => setUser(null)}>Logout</button>
    </div>
  )
}

export default About
