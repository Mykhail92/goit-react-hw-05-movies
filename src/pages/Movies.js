import { SearchForm } from 'components/SearchForm/SearchForm';
import { TrendingList } from 'components/TrendingList/TrendingList';
import { Suspense, useEffect, useState } from 'react';
import { Outlet, useLocation, useSearchParams } from 'react-router-dom';

import { getSearchMovie } from '../fetchApi';

const Movies = () => {
  const [searchParams] = useSearchParams();
  const paramsQuery = searchParams.get('query');

  const [movies, setMovies] = useState(null);
  const [searchQuery, setSearchQuery] = useState(paramsQuery);

  const location = useLocation();

  useEffect(() => {
    if (!searchQuery) {
      return;
    }
    try {
      getSearchMovie(searchQuery).then(search => {
        setMovies(search.data.results);
      });
    } catch (error) {
      alert(error.value);
    }
  }, [searchQuery]);

  const onFormSubmit = query => {
    setSearchQuery(query);
  };

  return (
    <>
      <SearchForm onSubmit={onFormSubmit}></SearchForm>
      {movies && <TrendingList movies={movies} state={{ from: location }} />}
      <Suspense fallback={null}>
        {' '}
        <Outlet />
      </Suspense>
    </>
  );
};

export default Movies;
