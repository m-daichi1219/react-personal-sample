import React from 'react';
import PropTypes from 'prop-types';

const DEFAULT_PLACEHOLDER_IMAGE = 'https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg';

const Movie = ({ movie }) => {
  const { Poster } = movie;
  const imgPath = Poster === 'N/A'
    ? DEFAULT_PLACEHOLDER_IMAGE : Poster;

  return (
    <div className="movie">
      <h2>{movie.Title}</h2>
      <div>
        <img
          width="200"
          alt={`The Movie title: ${movie.Title}`}
          src={imgPath}
        />
      </div>
      <p>
        (
        {movie.Year}
        )
      </p>
    </div>
  );
};

Movie.propTypes = {
  movie: PropTypes.shape({
    Poster: PropTypes.string.isRequired,
    Title: PropTypes.string.isRequired,
    Year: PropTypes.string.isRequired,
  }).isRequired,
};

export default Movie;
