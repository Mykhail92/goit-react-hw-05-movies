import { NavLink, useLocation } from 'react-router-dom';
import styled from 'styled-components';

export const TrendingList = ({ movies, title, state }) => {
  const location = useLocation();
  const path = location.pathname === '/' ? 'movies/' : '';

  return (
    <>
      {title && <h2>{title}</h2>}
      <ul>
        {movies.map(movie => {
          return (
            <li key={movie.id}>
              <StyledLink to={`${path}${movie.id}`} state={state}>
                <p>- {movie.title ?? movie.name}</p>
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
