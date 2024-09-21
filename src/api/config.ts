export const API_KEY = process.env.API_KEY;
export const BASE_URL = 'https://api.themoviedb.org/3';

export const endpoints = {
  popularMovies: '/movie/popular',
  searchMovies: '/search/movie',
};

export const getImageUrl = (path: string) =>
  `https://image.tmdb.org/t/p/w500${path}`;
