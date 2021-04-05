import React, { useEffect, useState } from 'react';

import MovieList from './MovieList';
import MovieService from '../../services/MovieService';
import AddMovie from './AddMovie';

const Movies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    setMovies(MovieService.getMovies());
  }, []);

  return (
    <div className="container-fluid" style={{ marginLeft: '-15px' }}>
      <div className="d-flex flex-row">
        <AddMovie setState={setMovies} movies={movies}/>
        <div className="col-sm-12">
          <MovieList movies={movies} />
        </div>
      </div>
    </div>
  );
}

export default Movies;
