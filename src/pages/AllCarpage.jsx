import { useNavigate } from "react-router-dom"

const AllCarPage = () => {
  const navigator = useNavigate()
  return (
    <>
      <div className="flex items-center justify-center">
        <div className="grid grid-cols-3 gap-6 py-4">
          <div onClick={() => navigator("/singlecar")} className="flex flex-col items-center justify-center w-24 gap-6 rounded-lg bg-gray-50 h-28 drop-shadow-md">
            {/* <p className="px-2 py-1 bg-red-100 rounded-md">image</p> */}
            <div className="overflow-hidden w-14 h-w-14">
              <img className="object-fill" src="https://res.cloudinary.com/abbas-orgs/image/upload/v1677231301/car-barnd-images/Renault-logo-2015-2048x2048_khl1aj.png" alt="car" />
            </div>
            <p className="text-[0.6rem] text-rose-700 font-medium whitespace-nowrap ">American Car</p>
          </div>
          <div onClick={() => navigator("/singlecar")} className="flex flex-col items-center justify-center w-24 gap-6 rounded-lg bg-gray-50 h-28 drop-shadow-md">
            {/* <p className="px-2 py-1 bg-red-100 rounded-md">image</p> */}
            <div className="overflow-hidden w-14 h-w-14">
              <img className="object-fill" src="https://res.cloudinary.com/abbas-orgs/image/upload/v1677231301/car-barnd-images/toyota-logo-2019-3700x1200_nldsnu.png" alt="car" />
            </div>
            <p className="text-[0.6rem] text-rose-700 font-medium whitespace-nowrap ">American Car</p>
          </div>
          <div onClick={() => navigator("/singlecar")} className="flex flex-col items-center justify-center w-24 gap-6 rounded-lg bg-gray-50 h-28 drop-shadow-md">
            {/* <p className="px-2 py-1 bg-red-100 rounded-md">image</p> */}
            <div className="overflow-hidden w-14 h-w-14">
              <img className="object-fill" src="https://res.cloudinary.com/abbas-orgs/image/upload/v1677231300/car-barnd-images/jeep-logo-1993_yyy6um.png" alt="car" />
            </div>
            <p className="text-[0.6rem] text-rose-700 font-medium whitespace-nowrap ">American Car</p>
          </div>
          <div onClick={() => navigator("/singlecar")} className="flex flex-col items-center justify-center w-24 gap-6 rounded-lg bg-gray-50 h-28 drop-shadow-md">
            {/* <p className="px-2 py-1 bg-red-100 rounded-md">image</p> */}
            <div className="overflow-hidden w-14 h-w-14">
              <img className="object-fill" src="https://res.cloudinary.com/abbas-orgs/image/upload/v1677231296/car-barnd-images/ford-logo-2017_o2ie6f.png" alt="car" />
            </div>
            <p className="text-[0.6rem] text-rose-700 font-medium whitespace-nowrap ">American Car</p>
          </div>
        </div>
      </div>
      <div className="mb-40"></div>
    </>
  )
}

export default AllCarPage
