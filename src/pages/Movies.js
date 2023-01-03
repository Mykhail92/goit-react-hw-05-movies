import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import { getSearchMovie } from '../fetchApi';

export const Movies = () => {
  const [searchParams] = useSearchParams();
  const paramsQuery = searchParams.get('query');

  const [movies, setMovies] = useState(null);
  const [searchQuery, setSearchQuery] = useState(paramsQuery);

  useEffect(() => {
    try {
      getSearchMovie().then(search => {
        console.log(search.data.results);
      });
    } catch (error) {
      alert(error.value);
    }
  });

  const onFormSubmit = (e, query) => {
    e.preventDefault();
    setSearchQuery(query);
    console.log(query);
  };

  const onQuerySearch = query => {
    console.log(query.target.value);
  };

  return (
    <form onSubmit={onFormSubmit}>
      <input text="text" onChange={onQuerySearch}></input>
    </form>
  );
};
