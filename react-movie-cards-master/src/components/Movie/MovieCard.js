import React, { useState } from 'react';
import PropTypes from 'prop-types';

import StarRating from '../StarRating';

const MovieCard = ({ movie, deleteMovie, setMovies, movies }) => {
  const [isShown, setShown] = useState(false);
  
  return(

  <div className="movie-card">
    <div className="movie-card card">
      <img className="card-img-top" src={movie.imageUrl} alt="" />
      <div className="card-body">
        <h4 className="card-title">{movie.title}</h4>
        <h6 className="card-subtitle mb-2 text-muted">{movie.subtitle}</h6>
        <p className="text-justify" style={{ fontSize: '14px' }}>
          {movie.description}
        </p>
      </div>
      <div className="card-footer">
        <div className="clearfix">
          <div className="float-right mt-1">
          {movie.isDeletable && <button onClick={deleteMovie}>Delete</button>}
          </div>
          <div className="float-left mt-1">
            <StarRating rating={movie.rating} ratingCount={movie.ratingCount} setMovies={setMovies} movieId={movie.id} movies={movies}/>
          </div>
          <div className="card-footer-badge float-right badge badge-primary badge-pill" onMouseEnter={() => setShown(true)}
          onMouseLeave={() => setShown(false)}>{movie.rating}</div>
          {isShown && <span className="float-right mt-1"><em>{movie.ratingCount}</em></span>}
        </div>
      </div>
    </div>
  </div>
)
}
  
MovieCard.defaultProps = {
  movie: {},
};

MovieCard.propTypes = {
  movie: PropTypes.object,
  deleteMovie: PropTypes.func,
  setMovies: PropTypes.func
};


export default MovieCard;
