import { Card, CardHeader, CardBody, CardFooter, Typography, Input, Button } from "@material-tailwind/react"
import React, { useState, useEffect } from "react"
import { useQuery } from "react-query"
import { useDispatch, useSelector } from "react-redux"
import { Link, useNavigate } from "react-router-dom"
import { get_user_profile } from "../query/post_query"
import { reset, login } from "../redux/features/auth/authSlice"
import { get_user_info } from "../redux/features/me/meSlice"

const LoginPage = () => {
  const [errorsToShow, setErrorsToShow] = useState("")
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  })

  const { username, password } = formData
  const { tokens, isError, isLoading, isSuccess, error } = useSelector((state) => state.user_info)

  useEffect(() => {
    if (isError) {
      if (error.detail) {
        setErrorsToShow(error.detail)
      }
    }
    if (isSuccess || tokens) {
      navigate("/profile")
    }
    // dispatch(reset())
  }, [isError, isLoading, isSuccess, navigate, tokens])

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }
  const onSubmit = (e) => {
    e.preventDefault()
    const userData = { username, password }
    dispatch(get_user_info(userData))
    // dispatch(user_info())
  }

  if (isLoading) {
    return <>Loadding...</>
  }

  return (
    <div className="flex items-center justify-center h-screen -mt-20">
      <Card className="w-96">
        <CardHeader variant="gradient" color="blue" className="grid mb-4 h-28 place-items-center">
          <Typography variant="h5" color="white">
            Wellcome Back Sign In
          </Typography>
        </CardHeader>
        <form onSubmit={onSubmit}>
          <CardBody className="flex flex-col gap-4">
            <Input required type="text" label="User Name" size="lg" name="username" value={username} onChange={(e) => onChange(e)} />

            <Input required type="password" label="Password" size="lg" name="password" value={password} onChange={(e) => onChange(e)} />
            {errorsToShow && <p>{errorsToShow}</p>}
          </CardBody>
          <CardFooter className="pt-0">
            <Button type="submit" variant="gradient" fullWidth>
              Login
            </Button>
            <Typography variant="small" className="flex justify-center mt-6">
              Don't have an account?
              <Typography variant="small" color="blue" className="ml-1 font-bold">
                <Link to="/register">Register</Link>
              </Typography>
            </Typography>
          </CardFooter>
        </form>
      </Card>
    </div>
  )
}

export default LoginPage
