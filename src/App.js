import React, { Component } from 'react';
import Header from './components/Header';
import Searchbox from './components/Searchbox';
import MovieList from './components/MovieList';
import MovieDetails from './components/MovieDetails';
import axios from 'axios';

class APP extends Component {
  constructor() {
    super()
    this.state = {
      // movieId: 'tt3896198',
      movies: [],  // array movie object
      searchTerm: '',
      selected: {}

    }

    // props api
    this.apiurl = " http://www.omdbapi.com/?i=tt3896198&apikey=c4f10767";
  }



  handleSubmit = (event) => {
    event.preventDefault();
    axios.get(this.apiurl + "&s=" + this.state.searchTerm)
      .then(({ data }) => {
        console.log(data)
        let movies = data.Search;
        this.setState(prevState => {
          return { ...prevState, movies: movies }
        })
      })
  }
  // handel the change whenever type into search component 
  // update the state whatever value 
  handleChange = (event) => {
    let searchTerm = event.target.value
    this.setState(prevState => {
      return { ...prevState, searchTerm: searchTerm }
    });
  }





  handelDetails = (id) => {

    console.log("i clicked view more")

    // second req
    axios.get("http://www.omdbapi.com/?apikey=c4f10767" + "&i=" + id)


      .then(({ data }) => {

        let movies = data;
        console.log(movies)
        this.setState(prevState => {
          return { ...prevState, selected: movies }
        });



      });

  }
  closeDetails = () => {
    this.setState(prevState => {
      return { ...prevState, selected: {} }
    });
  }







  render() {
    return (
      <main>
        <div className="App">
          <Header />

          {/* set that as aprop on the search component */}
          <Searchbox handleSubmit={this.handleSubmit} handleChange={this.handleChange} />

          {/* the movie data comming from state in app component */}
          <MovieList movies={this.state.movies} handelDetails={this.handelDetails} />

          {(typeof this.state.selected.Title != "undefined") ?
            <MovieDetails selected={this.state.selected} closeDetails={this.closeDetails} /> : false}
        </div>
      </main>
    );
  }
}

export default APP;