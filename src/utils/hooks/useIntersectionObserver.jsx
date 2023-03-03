import { useEffect, useRef } from "react"

const useIntersectionObserver = ({ target, onIntersect, enabled }) => {
  const observer = useRef(null)

  useEffect(() => {
    if (!enabled) return

    observer.current = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        onIntersect()
      }
    })

    observer.current.observe(target)

    return () => {
      observer.current.disconnect()
    }
  }, [enabled, onIntersect, target])
}

export default useIntersectionObserver
