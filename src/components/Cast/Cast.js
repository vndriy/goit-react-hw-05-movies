import { getActorsMovies } from 'services/api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { CastContainer, ActorList, ActorItem } from './Cast.styled';

import placeholder from 'services/placeholder.png';

import { LoadingMessage, ErrorMessage } from 'pages/HomePage/HomePage.styled';

export default function Cast() {
  const params = useParams();

  const [cast, setCast] = useState([]);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function getCast() {
      try {
        setIsLoading(true);
        const fetchedCast = await getActorsMovies(params.movieId);

        setCast(fetchedCast.cast);
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }
    getCast();
  }, [params.movieId]);

  return (
    <CastContainer>
      {error && (
        <ErrorMessage>
          Oops! Something went wrong! Please try reloading this page!
        </ErrorMessage>
      )}
      {isLoading && <LoadingMessage>Loading...</LoadingMessage>}
      {cast && cast.length > 0 && (
        <div>
          <ActorList>
            {cast.map(actor => (
              <ActorItem key={actor.id}>
                <div className="actor-container">
                  {actor.profile_path ? (
                    <img
                      src={`https://image.tmdb.org/t/p/w300${actor.profile_path}`}
                      alt={actor.name}
                    />
                  ) : (
                    <img
                      style={{ width: '200px', height: 'auto' }}
                      src={placeholder}
                      alt={actor.name}
                    />
                  )}

                  <div>
                    <p className="name">{actor.name}</p>
                    <p className="character">Character: {actor.character}</p>
                  </div>
                </div>
              </ActorItem>
            ))}
          </ActorList>
        </div>
      )}
      {cast.length === 0 && <p>We don't have any actors for this movie yet.</p>}
    </CastContainer>
  );
}
