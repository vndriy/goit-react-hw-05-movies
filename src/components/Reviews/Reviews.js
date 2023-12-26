import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getReviewsMovies } from 'services/api';

import { ReviewsContainer, ReviewsList, ReviewItem } from './Reviews.styled';

import { LoadingMessage, ErrorMessage } from 'pages/HomePage/HomePage.styled';

export default function Reviews() {
  const params = useParams();

  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function getCast() {
      try {
        setIsLoading(true);
        const fetchedReviews = await getReviewsMovies(params.movieId);

        setReviews(fetchedReviews.results);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    }
    getCast();
  }, [params.movieId]);

  return (
    <ReviewsContainer>
      {error && (
        <ErrorMessage>Oops! Something went wrong! Please try reloading this page!</ErrorMessage>
      )}
      {isLoading && <LoadingMessage>Loading...</LoadingMessage>}
      {reviews && reviews.length > 0 && (
        <div>
          <ReviewsList>
            {reviews.map(review => (
              <ReviewItem key={review.id}>
                <p className="author">{review.author}</p>
                <p className="content">{review.content}</p>
              </ReviewItem>
            ))}
          </ReviewsList>
        </div>
      )}
      {reviews.length === 0 && (
        <p>We don't have any reviews for this movie yet.</p>
      )}
    </ReviewsContainer>
  );
}
