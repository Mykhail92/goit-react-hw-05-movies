import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import { GlobalStyles } from './GlobalStyles';

import { Header } from './Header/Header';
import { Home } from '../pages/Home';

const Movies = lazy(() => import('../pages/Movies'));
const MovieDetails = lazy(() => import('../pages/MovieDetails'));
const Cast = lazy(() => import('./Casts/Casts'));
const Reviews = lazy(() => import('./Reviews/Reviews'));
export const App = () => {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<Home />} />
      </Routes>
      {/* <Suspense /> */}
      <GlobalStyles />
    </>
  );
};
