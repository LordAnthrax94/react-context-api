import { createContext, useState, useContext } from "react";
import axios from "axios";

const GlobalContext = CreateContext();

const postProvider = ({children}) => {
  const baseApiUrl = import.meta.env.VITE_BASE_API_URL

  const [posts, setPosts] = useState([])

  const fetchPost = () => {
    axios.get(baseApiUrl)
    .then((res) => {
      setPosts(res.data)
    })
  }
  return (
    <GlobalContext.Provider value={{posts, setPosts, fetchPosts}}>
      {children}
    </GlobalContext.Provider>
  )
}

const useGlobalContext = () =>{
  return useContext(GlobalContext)
}

export { useGlobalContext, postProvider };
