import { useQuery } from "react-query"
import { useNavigate } from "react-router-dom"
import { fetch_all_cars } from "../query/post_query"

const AllCarPage = () => {
  const navigator = useNavigate()
  const { data, isSuccess, isLoading, isError, error } = useQuery("all-cars", fetch_all_cars, {
    staleTime: 1000 * 60 * 30,
  })

  if (isLoading) {
    return <p>Loading...</p>
  }
  if (isError) {
    return (
      <div>
        <p>Erorr...</p>
        <p>{error}</p>
      </div>
    )
  }

  return (
    <>
      <div className="flex items-center justify-center">
        <div className="grid grid-cols-3 gap-6 py-4">
          {data.map((item) => (
            <div key={item.id} onClick={() => navigator(`/all-cars/${item.name}`)} className="flex flex-col items-center justify-between w-24 gap-2 rounded-lg bg-gray-50 h-28 drop-shadow-md">
              <div className="flex-grow overflow-hidden w-14 h-14">
                <img className="object-fill" src="https://res.cloudinary.com/abbas-orgs/image/upload/v1677231301/car-barnd-images/Renault-logo-2015-2048x2048_khl1aj.png" alt="car" />
              </div>
              <div className="flex flex-col items-center justify-center ">
                <p className="text-[0.7rem] text-rose-700 font-medium whitespace-nowrap ">{item.name}</p>
                <p className="text-[0.6rem] text-rose-700 font-medium whitespace-nowrap ">{item.car_country}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default AllCarPage
