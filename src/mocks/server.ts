import {setupServer} from 'msw/node';
import {http, HttpResponse} from 'msw';
import {BASE_URL, endpoints} from '../api/config';

// Mock data
const mockMovies = [
  {
    id: 1,
    title: 'Test Movie 1',
    poster_path: '/path1.jpg',
    release_date: '2021-01-01',
  },
  {
    id: 2,
    title: 'Test Movie 2',
    poster_path: '/path2.jpg',
    release_date: '2021-02-01',
  },
];

const mockMovieDetails = {
  id: 1,
  title: 'Test Movie 1',
  poster_path: '/path1.jpg',
  release_date: '2021-01-01',
  overview: 'Test overview',
  vote_average: 7.5,
};

export const server = setupServer(
  // Mock getPopularMovies endpoint
  http.get(`${BASE_URL}${endpoints.popularMovies}`, () => {
    console.log('Intercepted getPopularMovies request');
    return HttpResponse.json({results: mockMovies});
  }),

  // Mock searchMovies endpoint
  http.get(`${BASE_URL}${endpoints.searchMovies}`, ({request}) => {
    console.log('Intercepted searchMovies request');
    const url = new URL(request.url);
    const query = url.searchParams.get('query');
    const filteredMovies = mockMovies.filter(movie =>
      movie.title.toLowerCase().includes(query?.toLowerCase()!),
    );
    return HttpResponse.json({results: filteredMovies});
  }),

  // Mock getMovieDetails endpoint
  http.get(`${BASE_URL}/movie/:movieId`, ({params}) => {
    console.log('Intercepted getMovieDetails request');
    const {movieId} = params;
    if (movieId === '1') {
      return HttpResponse.json(mockMovieDetails);
    }
    return new HttpResponse(null, {status: 404});
  }),
);
