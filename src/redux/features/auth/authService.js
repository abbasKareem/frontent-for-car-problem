// this service dealing making  http request and sending the data back setting any data to localstorage

import axios from "axios"

// Rigster user
const register = async (userData) => {
  const response = await axios.post("https://car-problem.onrender.com/auth/users/", userData)

  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data))
  }

  return response.data
}

// login user
const login = async (userData) => {
  const response = await axios.post("https://car-problem.onrender.com/auth/jwt/create/", userData)

  if (response.data) {
    localStorage.setItem("tokens", JSON.stringify(response.data))
  }

  return response.data
}

//logout
const logout = () => {
  localStorage.removeItem("user")
  localStorage.removeItem("tokens")
}
const authService = {
  register,
  logout,
  login,
}
export default authService
