import axios from "axios"

const instance = axios.create({
  baseURL: "https://car-problem.onrender.com/api",
  // baseURL: "http://localhost:8000/api",
})

export const fetch_all_cars = async () => {
  const res = await instance.get("/all-cars")
  return res.data
}

export const fetch_all_problem = async () => {
  const res = await instance.get("/car-problem-location")
  return res.data
}
export const fetch_car_with_filter = async (carId, location, page = 1) => {
  const res = await instance.get(`/cars?carId=${carId.join(",")}&location=${location}`)
  return res.data
}
export const fetch_car_without_filter = async (carName, locationProblem, size) => {
  if (!locationProblem) {
    const res = await instance.get(`/cars/${carName}/?page=${size}`)
    return res.data
  }
  const res = await instance.get(`/cars/${carName}?location=${locationProblem}&page=${size}`)
  return res.data
}
export const fetch_car_with_query = async (carName, locationProblem, page) => {
  if (!locationProblem) {
    const res = await instance.get(`/cars/${carName}/?page=${page}`)
    return res.data
  }
  const res = await instance.get(`/cars/${carName}?location=${locationProblem}&page=${page}`)
  return res.data
}

export const get_user_profile = async (access_token) => {
  // const res = await instance.get(`http://localhost:8000/api/profile/`, {
  const res = await instance.get(`https://car-problem.onrender.com/api/profile/`, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  })

  return res.data
}
