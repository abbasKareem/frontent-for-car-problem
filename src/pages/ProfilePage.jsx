import React, { useEffect } from "react"
import { useQuery } from "react-query"
import { useSelector } from "react-redux"
import { Link, Navigate, useNavigate } from "react-router-dom"
import { PuffLoader } from "react-spinners"
import UploadWidget from "../components/UploadWidget"
import { get_user_profile } from "../query/post_query"

const ProfilePage = () => {
  const { tokens } = useSelector((state) => state.user_info)
  const navigate = useNavigate()

  const { data, isError, isLoading } = useQuery("profile", () => get_user_profile(tokens.access))

  useEffect(() => {
    if (!tokens) {
      navigate("/login")
    }
  }, [navigate, tokens])

  if (isLoading) {
    return (
      <div>
        <PuffLoader color="red" />
      </div>
    )
  }

  if (isError) {
    return <div>Opps , something went wrong....</div>
  }

  // const isoDate = data?.start_date
  // const date = new Date(isoDate)
  // // Format the date and time
  // const options = {
  //   year: "numeric",
  //   month: "long",
  //   day: "numeric",
  //   // hour: "numeric",
  //   // minute: "numeric",
  //   // second: "numeric",
  //   // timeZoneName: "short",
  // }

  // const formattedDate = date.toLocaleDateString(undefined, options)

  return (
    <div>
      <p>Profile page</p>

      {/* <Link to="/login">Login</Link>
      <Link to="/register">Register</Link> */}
    </div>
  )
}

export default ProfilePage
