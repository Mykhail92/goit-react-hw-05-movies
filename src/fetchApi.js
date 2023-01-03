import axios from 'axios';
const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = '9b2b7b9d661a9e70c36d650ed8367422';

export const getTrendingMovies = async () => {
  const response = await axios.get(
    `${BASE_URL}/trending/movie/day?&api_key=${API_KEY}&language=en-US`
  );
  return response;
};

export const getSearchMovie = async query => {
  const response = await axios.get(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&language=en-US&query=${query}`
  );
  return response;
};

export const getMovieDetails = async id => {
  const response = await axios.get(
    `${BASE_URL}/movie/${id}?api_key=${API_KEY}&language=en-US`
  );

  return response;
};

export const getMovieCast = async id => {
  const response = await axios.get(
    `${BASE_URL}/movie/${id}/credits?api_key=${API_KEY}&language=en-US`
  );
  return response;
};

export const getMovieReview = async id => {
  const response = await axios.get(
    `${BASE_URL}/movie/${id}/reviews?api_key=${API_KEY}&language=en-US&page=1`
  );

  return response;
};
