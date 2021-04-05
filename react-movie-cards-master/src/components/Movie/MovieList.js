import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import MovieCard from './MovieCard';

// function deleteMovie(movies, movie, setMovies) {
//   var newMovies = [];
//   console.log(movies)
//   for(let mov of movies){
//     if(mov.id !== movie.id)
//     newMovies.push(mov);
//   }
//   setMovies(newMovies);
// }

const getMovies = (movies, setMovies) => (
  <div className="card-deck">
    {movies.map(movie => (
      <MovieCard key={movie.id} movie={movie} deleteMovie={() => {
        var newMovies = [];
        console.log(movies)
        for(let mov of movies){
          if(mov.id !== movie.id)
          newMovies.push(mov);
        }
        setMovies(newMovies);
      }}/>
    ))}
  </div>
);

const MovieList = ({ movies, setMovies }) => <div>{getMovies(movies, setMovies)}</div>;

MovieList.defaultProps = {
  movies: [],
};

MovieList.propTypes = {
  movies: PropTypes.array,
};

export default MovieList;
