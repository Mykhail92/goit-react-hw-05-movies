import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { getTrendingMovies } from '../fetchApi';
import { TrendingList } from '../components/TrendingList/TrendingList';

export const Home = () => {
  const [movies, setMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    try {
      getTrendingMovies().then(res => {
        setMovies(res.data.results);
      });
    } catch (error) {
      alert(error.message);
    }
  }, []);

  return (
    <>
      <ul>
        <TrendingList
          movies={movies}
          title={'Trending today'}
          state={{ from: location }}
        />
      </ul>
    </>
  );
};
