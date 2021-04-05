import React from 'react';
import PropTypes from 'prop-types';

const width = 110;

const styles = {
  starsInner: {
    width: `${width}px`,
  },
  starsEmptyInner: {
    position: 'absolute',
    width: `${width}px`,
  },
  starsOuter: {
    overflow: 'hidden',
  },
  star: {
    padding: '1px',
  },
};

const cropWidth = rating => {
  return Math.floor((rating * width) / 5);
};

const StarRating = ({ rating, ratingCount, setMovies, movies, movieId }) => {
  const containerStyle = { width: `${cropWidth(rating)}px`};

  const modifyRating = newRating => {
    var alteredRating = 0;
    if(ratingCount > 0){
      alteredRating = ((rating * ratingCount) + newRating)/(ratingCount + 1);
      alteredRating = Math.round(alteredRating * 10) / 10;
    }
    else 
      alteredRating = newRating;

    updateMovie(alteredRating);
  }

  function updateMovie(alteredRating){
    var updatedMovies = [];
    for(let mov of movies){
      if(mov.id !== movieId){
        updatedMovies.push(mov);
      } else {
        mov.ratingCount = ratingCount + 1;
        mov.rating = alteredRating;
        updatedMovies.push(mov);
      }
    }

    setMovies(updatedMovies);
  }

  return (
    <div>
      <div style={styles.starsOuter}>
        <div style={containerStyle}>
          <div style={styles.starsEmptyInner}>
            <button className="fa fa-star-o fa-lg" style={styles.star} onClick={() => {
              modifyRating(1);
            }}>
            </button>
            <button className="fa fa-star-o fa-lg" style={styles.star} onClick={() => {
              modifyRating(2);
            }}>
            </button>
            <button className="fa fa-star-o fa-lg" style={styles.star} onClick={() => {
              modifyRating(3);
            }}>
            </button>
            <button className="fa fa-star-o fa-lg" style={styles.star} onClick={() => {
              modifyRating(4);
            }}>
            </button>
            <button className="fa fa-star-o fa-lg" style={styles.star} onClick={() => {
              modifyRating(5);
            }}>
            </button>
            {/* <button>
            <i className="fa fa-star-o fa-lg" style={styles.star}></i>
            </button>
            <button>
            <i className="fa fa-star-o fa-lg" style={styles.star}></i>
            </button>
            <button>
            <i className="fa fa-star-o fa-lg" style={styles.star}></i>
            </button>
            <button>
            <i className="fa fa-star-o fa-lg" style={styles.star}></i>
            </button> */}
          </div>
          <div style={styles.starsInner}>
            <i className="fa fa-star fa-lg" style={styles.star}></i>
            <i className="fa fa-star fa-lg" style={styles.star}></i>
            <i className="fa fa-star fa-lg" style={styles.star}></i>
            <i className="fa fa-star fa-lg" style={styles.star}></i>
            <i className="fa fa-star fa-lg" style={styles.star}></i>
          </div>
        </div>
      </div>
    </div>
  );
};

StarRating.defaultProps = {
  rating: 0,
  ratingCount: 0
};

StarRating.propTypes = {
  rating: PropTypes.number,
  ratingCount: PropTypes.number,
  setMovies: PropTypes.func,
  movieId: PropTypes.number
};

export default StarRating;
