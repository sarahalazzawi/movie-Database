import React from 'react';
import Movie  from './Movie';

function MovieList(props) {
    return (
        <div className="container">
        <div className="row">
            <div className="col s12">
                {/* logic indivindual movie component  */}
            {
               props.movies.map((movie,index) =>{
                   return(
                       
                       <Movie key={index}   imdbID={movie.imdbID}    image={movie.Poster}    
                       handelDetails={props.handelDetails}/>
                    
                   )
               })
            }
          </div>
        </div>
        </div>
    )
}

export default MovieList
