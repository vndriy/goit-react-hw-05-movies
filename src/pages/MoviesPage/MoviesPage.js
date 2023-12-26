import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import { searchMovies } from 'services/api';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { LoadingMessage, ErrorMessage } from '../HomePage/HomePage.styled';
import { Searchbar } from 'components/Searchbar/Searchbar';

export default function MoviesPage() {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const [params, setParams] = useSearchParams();

  const query = params.get('query');
  useEffect(() => {
    if (!query) return;

    const handleSearch = async () => {
      try {
        setIsLoading(true);
        const fetchedMovies = await searchMovies(query);
        setMovies(fetchedMovies.results);
        if (fetchedMovies.results.length === 0) {
          setError('notFound');
        } else {
          setError(null);
        }
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    handleSearch();
  }, [query]);

  const handleSubmit = query => {
    setParams({ query });
  };

  return (
    <div>
      <Searchbar onSubmit={handleSubmit} />
      {isLoading && <LoadingMessage>Loading...</LoadingMessage>}

      {error && error !== 'notFound' && (
        <ErrorMessage>
          Oops! Something went wrong. Please try again later.
        </ErrorMessage>
      )}
      {movies.length > 0 && <MoviesList films={movies} />}
      {error === 'notFound' && <p>Movie "{query}" not found.</p>}
    </div>
  );
}
