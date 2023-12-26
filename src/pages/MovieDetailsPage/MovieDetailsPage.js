import { Outlet, useParams, useLocation } from 'react-router-dom';
import { useEffect, useState, useRef } from 'react';
import { getDetailsMovies } from 'services/api';
import { Link, NavLink } from 'react-router-dom';

import {
  MovieDetailsContainer,
  MoviePoster,
  MovieDetailsContent,
  AdditionalInformation,
} from './MovieDetailsPage.styled';

import { LoadingMessage, ErrorMessage } from '../HomePage/HomePage.styled';

import mainplaceholder from 'services/mainplaceholder.png';

export default function MovieDetailsPage() {
  const location = useLocation();
  const backLinkRef = useRef(location);

  const params = useParams();

  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function getDetails() {
      try {
        setIsLoading(true);
        const fetchedDetails = await getDetailsMovies(params.movieId);
        setMovie(fetchedDetails);
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }
    getDetails();
  }, [params.movieId]);

  const getUserScore =
    movie && movie.vote_average ? Math.round(movie.vote_average * 10) : 0;

  return (
    <>
      {error && (
        <ErrorMessage>
          Oops! Something went wrong! Please try reloading this page!
        </ErrorMessage>
      )}
      {isLoading && <LoadingMessage>Loading...</LoadingMessage>}

      <Link to={backLinkRef.current.state?.from ?? '/'}>Go back</Link>

      {movie && (
        <MovieDetailsContainer>
          <MoviePoster
            src={
              movie.poster_path
                ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                : mainplaceholder
            }
            alt={movie.title}
            style={!movie.poster_path ? { width: '400px', height: 'auto' } : {}}
          />
          <MovieDetailsContent>
            <h1>{movie.title}</h1>
            <p>User score: {getUserScore}%</p>
            <h2>Overview</h2>
            <p>{movie.overview}</p>
            <h2>Genres</h2>
            {movie.genres.map(({ name }, index) => (
              <span key={index}>{name} </span>
            ))}
          </MovieDetailsContent>
        </MovieDetailsContainer>
      )}

      <AdditionalInformation>
        <h3>Additional information</h3>
        <ul>
          <li>
            <NavLink to="cast">Cast</NavLink>
          </li>
          <li>
            <NavLink to="reviews">Reviews</NavLink>
          </li>
        </ul>
      </AdditionalInformation>

      <Outlet />
    </>
  );
}
