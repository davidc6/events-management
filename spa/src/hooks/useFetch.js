import { useEffect, useState } from "react"

export const useFetch = (url) => {
  const [data, setData] = useState()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(url)
        if (res.status === 200) {
          const data = await res.json()
          setData(data)
        } else {
          console.log(res.statusText)
        }
      } catch (e) {
        console.error(e)
      }      
    }

    fetchData()
  }, [url])
  
  return data
}
