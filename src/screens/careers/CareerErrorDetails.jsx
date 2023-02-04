import { Link, useLocation, useRouteError } from "react-router-dom"

const CareerDetailsError = () => {
  const error = useRouteError()

  return (
    <div className="careers-error">
      <h2>Error</h2>
      <p>{error.message}</p>
      <Link to="/">HomePage</Link>
    </div>
  )
}

export default CareerDetailsError
