/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect , useState } from "react";
import { getMovies, searchByName } from "../services/movies.service";
import { Link } from "react-router-dom";
import "./HomeStyle.css"
import "../shared/PaginationStyle.css"
function Home() {
  const url = "http://image.tmdb.org/t/p/w500"
    const pageNumbers = [1,2,3,4,5]
    const [pageNumber,setPageNumber] = useState(1)
    const [movies,setMovies]= useState([])
    const [word,setWord] = useState("")
    useEffect(()=>{
        getMovies(pageNumber)
        .then(res=>setMovies(res.data.results))
        .catch(err=>console.log(err))
    },[pageNumber])
    return (
        <>
        <div className="text-center main-section pt-5 mb-5">
          <div className="">
            <h1 className="text-white fw-bolder fs-1 mt-3">
            Unlimited movies, TV shows, and more
            </h1>
            <h6 className="text-white my-3">
            Watch anywhere. Cancel anytime.
            </h6>
            <h6  className="text-white my-4">
            Ready to watch? Enter your email to create or restart your membership.
            </h6>
          </div>
        <div className="d-flex w-50 mx-auto justify-content-center" role="search">
        <input onChange={e=>{
          setWord(e.target.value)
        }} className="form-control me-2 w-50" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-danger" onClick={()=>
            searchByName(word)
            .then(res=>setMovies(res.data.results))
            .catch(err=>console.log(err))
          } >Search</button>
        </div>
          </div>
        <div className="row mx-auto mt-4 w-75">
        {movies.length > 0 &&
        movies.map((movie)=>(
            <div key={movie.id} className="movies-row bg-dark py-4 mb-5  col-lg-4 col-md-12">
            <div  className="border-radious text-white">
            <img className="card-img-top movie-card" src={`${url}${movie.poster_path}`} alt="Card image cap" height={"150px"}/>
            <div className="p-2">
                <span>{movie.title}</span> <br />
                <Link to={`/show/${movie.id}`} className="movie-link text-danger ">Details</Link>
            </div>
            </div>
            </div>

            
        ))
        }
           </div>
        <nav>
      <ul className="pagination justify-content-center my-3">
        {pageNumbers.map(number => (
          <li key={number} className="">
            <button className="btn btn-dark text-danger fw-bolder mx-1 pagination-btn" onClick={()=>{setPageNumber(number)}}>
              {number}
            </button>
          </li>
        ))}
      </ul>
    </nav>
        </>
      );
}

export default Home;