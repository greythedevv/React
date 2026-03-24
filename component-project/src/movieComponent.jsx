import { movies } from "./data/movies"
import {Movie} from "./movie"


export const MovieComponent = () =>{
    return(
        <div className="movie-conainer">
            <h2>Movies</h2>
            <ul className="movie-list">
            {movies.map((movie) =>(
             <Movie key={movie.id} movie={movie}/>) )
            }
            </ul>
        </div>
    )
}   