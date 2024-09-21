import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {API_KEY, BASE_URL, endpoints} from '../api/config';
import {Movie, MovieDetails} from '../types/movie';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({baseUrl: BASE_URL}),
  endpoints: builder => ({
    getPopularMovies: builder.query<Movie[], void>({
      query: () => `${endpoints.popularMovies}?api_key=${API_KEY}`,
      transformResponse: (response: {results: Movie[]}) => response.results,
    }),
    searchMovies: builder.query<Movie[], string>({
      query: query =>
        `${endpoints.searchMovies}?api_key=${API_KEY}&query=${query}`,
      transformResponse: (response: {results: Movie[]}) => response.results,
    }),
    getMovieDetails: builder.query<MovieDetails, number>({
      query: movieId => `/movie/${movieId}?api_key=${API_KEY}`,
    }),
  }),
});

export const {
  useGetPopularMoviesQuery,
  useSearchMoviesQuery,
  useGetMovieDetailsQuery,
} = apiSlice;
