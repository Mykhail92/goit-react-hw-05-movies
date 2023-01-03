import { getMovieCast } from 'fetchApi';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { List } from './Casts.styled';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState(null);

  useEffect(() => {
    try {
      getMovieCast(movieId).then(response => {
        setCast(response.data.cast);
      });
    } catch (error) {
      alert(`${error.message} oooops`);
    }
  }, [movieId]);

  if (!cast) {
    return;
  }
  return (
    <List>
      {cast.map(actor => {
        const profile = actor.profile_path
          ? `https://image.tmdb.org/t/p/w300${actor.profile_path}`
          : `https://via.placeholder.com/300x450 `;
        return (
          <li key={actor.id}>
            <img src={profile} alt="" width="250px" />
            <div p="5px">
              <p>{actor.name}</p>
              <p>Character : {actor.character}</p>
            </div>
          </li>
        );
      })}
    </List>
  );
};

export default Cast;
