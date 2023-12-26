import { Link, useLocation } from 'react-router-dom';

import { MoviesListContainer, MovieItem } from './MoviesList.styled';

import mainplaceholder from 'services/mainplaceholder.png';

export const MoviesList = ({ films }) => {
  const location = useLocation();

  return (
    <MoviesListContainer>
      {films.map(film => (
        <MovieItem key={film.id}>
          <Link to={`/movies/${film.id}`} state={{ from: location }}>
            <img
              src={
                film.poster_path
                  ? `https://image.tmdb.org/t/p/w500${film.poster_path}`
                  : mainplaceholder
              }
              alt={film.title}
              style={
                !film.poster_path ? { width: '300px', height: 'auto' } : {}
              }
            />
            <p>{film.title}</p>
          </Link>
        </MovieItem>
      ))}
    </MoviesListContainer>
  );
};
