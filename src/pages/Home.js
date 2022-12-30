import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import { getTrendingMovies } from '../fetchApi';
import { useEffect, useState } from 'react';

export const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    try {
      getTrendingMovies().then(res => {
        setMovies(res.data.results);
      });
    } catch (error) {
      alert(error.message);
    }
  }, []);
  console.log(movies);
  return (
    <>
      <ul>
        {movies.map(movie => {
          return (
            <li key={movie.id}>
              <StyledLink to={'/movies'}>
                <p>{movie.title}</p>
              </StyledLink>
            </li>
          );
        })}
      </ul>
    </>
  );
};

const StyledLink = styled(NavLink)`
  text-decoration: none;
  color: black;
  font-size: 18px;
  font-weight: 500;
  :hover {
    color: #fc7d07;
  }
`;
