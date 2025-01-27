import axios from "axios"
import { useState } from "react"

const baseApiUrl = import.meta.env.VITE_BASE_API_URL

const postList = () =>{
  
  const [posts, setPosts] = useState(null)

    const fetchData = () => {
      axios.get(`${baseApiUrl}/posts/${id}`)
        .then(res => {
          
          
          setPosts(res.data)
        })
        .catch(err => {
          console.log("Post non trovato:", err);        
        })
      }

      useEffect(() => {
        fetchData()
      }, [])
  
  return (
    <>
    </>
    
  )
}

export default postList


