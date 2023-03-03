import { useEffect, useState } from "react"
import { Button } from "@material-tailwind/react"
import NewUploadWidget from "./NewUploadWidget"
const UploadWidget = () => {
  const [images_urls, setImages_urls] = useState([])
  const [error, setError] = useState("")
  const [isError, setIsError] = useState(false)

  function handleOnUpload(error, result, widget) {
    setImages_urls((prevUrls) => [...prevUrls, result?.info?.url])

    if (error) {
      widget.close()
      setIsError(true)
      setError(result?.statusText)
    }

    return
  }
  useEffect(() => {}, [images_urls])

  return (
    <div>
      {isError && <p>Error {error}</p>}

      <NewUploadWidget onUpload={handleOnUpload}>
        {({ open }) => {
          function handleOnClick(e) {
            e.preventDefault()
            open()
          }
          return <Button onClick={handleOnClick}>Upload an Image</Button>
        }}
      </NewUploadWidget>
    </div>
  )
}

export default UploadWidget
