import React, { Fragment, useRef, useState, useEffect } from "react"
import { useParams, useSearchParams } from "react-router-dom"
import { fetch_car_with_query } from "../query/post_query"

import { Button } from "@material-tailwind/react"
import HorzontalCarProblem from "../components/HorzontalCarProblem"
import { useInfiniteQuery } from "react-query"
import { PulseLoader } from "react-spinners"

const CarDetails = () => {
  const { name: carName } = useParams()
  const [active, setActive] = useState(-1)
  const [activeLocation, setActiveLocation] = useState("")
  const [searchParams, setSearchParams] = useSearchParams({ location: activeLocation })
  const locationProblem = searchParams.get("location")

  const { data, isSuccess, error, fetchNextPage, hasNextPage, isLoading, isFetchingNextPage } = useInfiniteQuery(
    ["cars", carName, locationProblem],
    {
      queryFn: ({ pageParam = 1 }) => fetch_car_with_query(carName, locationProblem, pageParam),
      getNextPageParam: (lastPage, pages) => {
        const nextPage = lastPage.next_page_number
        return nextPage !== null ? nextPage : undefined
      },
    },
    {
      cacheTime: 1000 * 60 * 5,
      keepPreviousData: true,
      refetchOnWindowFocus: false,
    }
  )

  // ==========OBSERVER==============

  const loader = useRef(fetchNextPage)
  const observer = useRef(
    new IntersectionObserver(
      (entries) => {
        const first = entries[0]
        if (first.isIntersecting) {
          loader.current()
        }
      },
      { threshold: 1 }
    )
  )
  const [element, setElement] = useState(null)
  useEffect(() => {
    loader.current = fetchNextPage
  }, [fetchNextPage])

  useEffect(() => {
    const currentElement = element
    const currentObsever = observer.current
    if (currentElement) {
      currentObsever.observe(currentElement)
    }
    return () => {
      if (currentElement) {
        currentObsever.unobserve(currentElement)
      }
    }
  }, [element])

  // ==========End OBSERVER==============

  return (
    <div className="pt-2">
      <nav className="absolute top-0 left-0 z-30 py-4 bg-white">
        <div className="mb-4 text-center ">Car Details</div>
        <div className="flex">
          {/* <p className={`${locationProblem === ""} ? "bg-yellow-500": "" `}>All| </p> */}
          <HorzontalCarProblem setActive={setActive} setActiveLocation={setActiveLocation} setSearchParams={setSearchParams} active={active} />
        </div>
      </nav>

      <div className="mb-10 mt-28">
        {isLoading ||
          (isFetchingNextPage && (
            <div>
              <PulseLoader color="#36d7b7" />
            </div>
          ))}

        {data?.pages?.map((page, pageIndex) => (
          <Fragment key={pageIndex}>
            {page.results.map((car, carIndex) => (
              <div key={carIndex}>
                <h2>{car.title}</h2>
                <hr />
                <p>{car.content}</p>
                <div className="h-[50rem] bg-blue-500"></div>
                <hr />
                <hr />
                <hr />
              </div>
            ))}
          </Fragment>
        ))}
      </div>

      <div ref={setElement} className={`${hasNextPage} : 'hidden': 'text-center flex justify-center items-center' `}>
        {isFetchingNextPage ? <PulseLoader color="#120afa" /> : ""}
      </div>

      {isLoading && (
        <div className="p-8 text-xl text-center text-gray-400 rounded-md bg-gray-50 mt-14">
          <PulseLoader color="#120afa" />
        </div>
      )}

      {!hasNextPage && !isLoading && <div className="p-8 text-xl text-center text-gray-400 rounded-md bg-gray-50 mt-14">You have scrolled all Posts</div>}
    </div>
  )
}

export default CarDetails
