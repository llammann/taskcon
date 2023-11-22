import axios from 'axios'
import { useState } from "react"
import { useEffect } from "react"
export function useFetch(url,method) {
   const [data, setData] = useState({})
   const [loading, setLoading] = useState(true)
   const [error, setError] = useState()
  useEffect(() => {
    axios({method})(url).then((res=>{
        console.log(res.data)
        setData(res.data)
    if(res.data){
        setLoading(false)
        return data
    }else {
        console.log("Loading")
    }
       })).catch((error)=>{
        setError(error)
       })
  }, [])
}
