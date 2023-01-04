import { Suspense, useEffect } from 'react';
import { useState } from 'react';
import { NavLink, Outlet, useLocation, useParams } from 'react-router-dom';
import styled from 'styled-components';

import { getMovieDetails } from 'fetchApi';

const MovieDetails = () => {
  const { movieId } = useParams();

  const [movie, setMovie] = useState(null);
  const location = useLocation();
  const [navPath] = useState(location.state?.from);
  const backLinkHref = navPath ?? '/';

  useEffect(() => {
    try {
      getMovieDetails(movieId).then(response => {
        setMovie(response.data);
      });
    } catch (error) {
      alert(`${error.message} ooops`);
    }
  }, [movieId]);
  console.log(movie);
  if (movie) {
    const poster = movie.poster_path
      ? `https://image.tmdb.org/t/p/w300${movie.poster_path}`
      : `https://images.app.goo.gl/E5Xx83TQH2kKCYSP8`;
    return (
      <div style={{ display: 'grid', gridGap: '10px' }}>
        <StyledBackLink to={backLinkHref}>GO Back</StyledBackLink>
        <img src={poster} alt="" style={{ marginTop: '10px' }} />
        <div>
          <h2>{movie.title}</h2>
          <p>User score {movie.vote_average * 10}%</p>
          <h3>Overview</h3>
          <p>{movie.overview}</p>
          <h3>Genres</h3>

          <div>
            {movie.genres.map(genre => {
              return <li key={genre.id}>{genre.name}</li>;
            })}
          </div>
        </div>
        <p style={{ paddingBottom: '10px' }}>Additional information</p>
        <ul>
          <StyledBackLink to="cast">Cast</StyledBackLink>
          <StyledBackLink to="reviews">Reviews</StyledBackLink>
        </ul>
        <Suspense fallback={null}>
          {' '}
          <Outlet />
        </Suspense>
      </div>
    );
  }
};

const StyledBackLink = styled(NavLink)`
  padding: 5px;
  width: 100px;
  border-radius: 10px;
  text-decoration: none;
  background-color: #e2e2e2;
  color: black;
  text-align: center;
  font-size: 18px;
  margin: 5px;
  :hover {
    background-color: #fc7d07;
    color: #fff;
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
      0px 2px 1px rgba(0, 0, 0, 0.2);
  }
`;

export default MovieDetails;
