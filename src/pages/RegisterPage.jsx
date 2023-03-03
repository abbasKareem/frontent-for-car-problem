import { Card, CardHeader, CardBody, CardFooter, Typography, Input, Button } from "@material-tailwind/react"
import React, { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link, useNavigate } from "react-router-dom"
import PulseLoader from "react-spinners/PulseLoader"
import { reset, register } from "../redux/features/auth/authSlice"

const RegisterPage = () => {
  const [errorsToShow, setErrorsToShow] = useState([])
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    password2: "",
  })

  const { username, email, password, password2 } = formData

  const { user, isError, isLoading, isSuccess, error } = useSelector((state) => state.auth)

  useEffect(() => {
    if (isError) {
      if (error.password) {
        setErrorsToShow(error.password)
      } else if (error.username) {
        setErrorsToShow(error.username)
      } else if (error.email) {
        setErrorsToShow(error.email)
      }
    }
    if (isSuccess || user) {
      navigate("/login")
    }
    dispatch(reset())
  }, [isError, isLoading, isSuccess, navigate, user])

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  const onSubmit = (e) => {
    e.preventDefault()
    if (password !== password2) {
      setErrorsToShow(["Password Do not match"])
    } else {
      const userData = { username, email, password }
      dispatch(register(userData))
    }
  }

  if (isLoading) {
    return (
      <>
        <PulseLoader color="red" />
      </>
    )
  }

  return (
    <div className="flex items-center justify-center h-screen -mt-10">
      <Card className="w-96">
        <CardHeader variant="gradient" color="blue" className="grid mb-4 h-28 place-items-center">
          <Typography variant="h3" color="white">
            Register
          </Typography>
        </CardHeader>
        <form onSubmit={onSubmit}>
          <CardBody className="flex flex-col gap-4">
            <Input autoComplete="off" required type="text" label="User Name" size="lg" name="username" value={username} onChange={(e) => onChange(e)} />
            <Input autoComplete="off" required type="email" label="Email" size="lg" name="email" value={email} onChange={(e) => onChange(e)} />
            <Input autoComplete="off" required type="text" label="Password" size="lg" name="password" value={password} onChange={(e) => onChange(e)} />
            <Input autoComplete="off" required type="text" label="Confirm Password" size="lg" name="password2" value={password2} onChange={(e) => onChange(e)} />

            {errorsToShow.length !== 0 &&
              errorsToShow.map((err) => (
                <p key={err} className="text-sm text-red-900">
                  {err}
                </p>
              ))}
          </CardBody>
          <CardFooter className="pt-0">
            <Button disabled={isLoading} className={`${isLoading ? "bg-transparent" : ""}`} type="submit" variant="gradient" fullWidth>
              Register
            </Button>
            <Typography variant="small" className="flex justify-center mt-6">
              have an account?
              <Typography variant="small" color="blue" className="ml-1 font-bold">
                <Link to="/login">Log in</Link>
              </Typography>
            </Typography>
          </CardFooter>
        </form>
      </Card>
    </div>
  )
}

export default RegisterPage
