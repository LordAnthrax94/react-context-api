import { useEffect } from "react"
import { useGlobalContext } from "../context/PostContext";

const baseApiUrl = import.meta.env.VITE_BASE_API_URL

const postList = () =>{
    const {posts, fetchPost} = useGlobalContext() 

      useEffect(() => {
        fetchData()
      }, [])
  
  return (
    <div className="container">
      <div className="col-12">
        <div className="card">
          <h1>{post?.name}</h1>
          <img src={post?.image} className="card-img-top img-fluid" alt={post?.name} />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <div className="d-flex justify-content-between">
            <button className="btn btn-warning" onClick={() => navigate(-1)}>Indietro</button>
            <button className="btn btn-danger" onClick={handleDeletePost}>Elimina Post</button>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default postList


