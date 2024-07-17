/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import {  useParams } from "react-router-dom";
import { getMovie } from "../services/movies.service";
import { Link } from "react-router-dom";
function Show() {
     const url = "http://image.tmdb.org/t/p/w500"
    const [movie,setMovie] = useState({})
    const {id}  = useParams()
    useEffect(()=>{
        getMovie(id)
        .then(res=>
            setMovie(res.data)
        )
        .catch(err=>console.log(err))
    },[])
    return (
        <>
        <div key={movie.id} className="w-50 mx-auto mt-5">
            <div >
            <img className="card-img-top" src={`${url}${movie.poster_path}`} alt="Card image cap" height={"250px"}/>
            <div className="card-body mt-3">
                 <span className="text-danger fs-5">Title : </span><span className="text-white">{movie.title}</span><br />
                 <span className="text-danger fs-5">overview : </span><span className="text-white"> {movie.overview}</span><br />
                 <span className="text-danger fs-5">Release Date : </span><span className="text-white">{movie.release_date}</span><br />
                 <span className="text-danger fs-5">Vote Count : </span><span className="text-white">{movie.vote_count}</span>
                
            </div>
            </div>
            <Link className="btn btn-danger px-5 mt-2"to={"/"}> Back</Link>
            </div>
           
        </>
      );
}

export default Show;