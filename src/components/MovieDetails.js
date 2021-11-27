import React from 'react'
import { bold } from 'ansi-colors';


function MovieDetails(props) {
  console.log("moviedetails" ,props)
    return (
<div>
<div className="row">
<div className="col s12 m7">
  <div className="card horizontal">
    <div className="card-image">
    <img  src={props.selected.Poster} alt="poster"  />
    <span className="header"><h4>{props.selected.Title}</h4></span>
      {/* <a className="btn-floating halfway-fab waves-effect waves-light red" ><i className="material-icons">close</i></a> */}
    </div>
    <div class="card-stacked">
    <div className="card-content">
      <p><strong>Genre:</strong> {props.selected.Genre}</p>
    </div>
    <div className="card-content">
      <p>Released: {props.selected.Released}</p>
    </div>
    <div className="card-content">
      <p><strong>Rated:</strong> {props.selected.Rated}</p>
    </div>
    <div className="card-content">
      <p><strong>IMDB Rating:</strong> {props.selected.imdbRating}</p>
    </div>
    <div className="card-content">
      <p> <strong>Director:</strong> {props.selected.Director}</p>
    </div>
    <div className="card-content">
   <p> <strong>Writer:</strong> {props.selected.Writer}</p>
    </div>
    <div className="card-content">
      <p>  <strong>Actors:</strong> {props.selected.Actors}</p>
    </div>
    <div class="card-action">
 <a href={'https://www.imdb.com/title/' + props.selected.imdbID}
                target="_blank"
                rel="noopener noreferrer"
              //  className="waves-effect waves-light red btn"
                >
              
                View on IMDB
              </a>

      {/* <a className="btn-floating halfway-fab waves-effect waves-light red" ><i className="material-icons">close</i></a> */}
 <a  className="btn-btn-floating halfway-fab waves-effect waves-light red btn-small waves-effect waves-light red"  
                onClick={props.closeDetails}><i className="material-icons">x</i></a>
</div>
  </div>
  </div>
</div>
</div>
  
  
             
        
 </div>

    )
}

export default MovieDetails






























   {/* <span>{selected.Genre}</span>
    <span>{selected.Released}</span>
    <span>{selected.Rated}</span>
    <span>{selected.Director}</span>
    <span>{selected.Writer}</span>
    <span>{selected.Actors}</span> */}