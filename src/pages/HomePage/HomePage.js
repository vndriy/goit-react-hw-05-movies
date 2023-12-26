import { getTrendingMovies } from '../../services/api';
import { useEffect, useState } from 'react';

import {
  TrendingContainer,
  Title,
  ErrorMessage,
  LoadingMessage,
} from './HomePage.styled';

import { MoviesList } from 'components/MoviesList/MoviesList';

export default function HomePage() {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function getTrending() {
      try {
        setIsLoading(true);
        const { results } = await getTrendingMovies();
        setMovies(results);
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }
    getTrending();
  }, []);

  return (
    <TrendingContainer>
      <Title>Trending today</Title>
      {error && (
        <ErrorMessage>
          Oops! Something went wrong! Please try reloading this page!
        </ErrorMessage>
      )}
      {isLoading && <LoadingMessage>Loading...</LoadingMessage>}
      {movies.length > 0 && <MoviesList films={movies} />}
    </TrendingContainer>
  );
}
