import { Routes, Route } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { LoadingMessage } from 'pages/HomePage/HomePage.styled';
// import HomePage from 'pages/HomePage/HomePage';
// import MovieDetailsPage from 'pages/HomePage/MovieDetailsPage/MovieDetailsPage';
// import MoviesPage from 'pages/HomePage/MoviesPage/MoviesPage';
// import NotFoundPage from 'pages/HomePage/NotFoundPage';
import Cast from './Cast/Cast';
import Reviews from './Reviews/Reviews';

import { lazy, Suspense } from 'react';

const HomePage = lazy(() => import('pages/HomePage/HomePage'));
const MovieDetailsPage = lazy(() =>
  import('pages/MovieDetailsPage/MovieDetailsPage')
);
const MoviesPage = lazy(() => import('pages/MoviesPage/MoviesPage'));
const NotFoundPage = lazy(() => import('pages/NotFoundPage'));

export const App = () => {
  return (
    <Suspense fallback={<LoadingMessage>LOADING PAGE...</LoadingMessage>}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="movies" element={<MoviesPage />} />
          <Route path="movies/:movieId" element={<MovieDetailsPage />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
};
