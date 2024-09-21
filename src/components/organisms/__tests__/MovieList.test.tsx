import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import MovieList from '../MovieList';

const mockMovies = [
  {
    id: 1,
    title: 'Movie 1',
    poster_path: '/path1.jpg',
    release_date: '2021-01-01',
  },
  {
    id: 2,
    title: 'Movie 2',
    poster_path: '/path2.jpg',
    release_date: '2021-02-01',
  },
];

describe('MovieList', () => {
  it('renders correctly', () => {
    const {getByText} = render(
      <MovieList movies={mockMovies} onMoviePress={() => {}} />,
    );

    expect(getByText('Movie 1')).toBeTruthy();
    expect(getByText('Movie 2')).toBeTruthy();
  });

  it('calls onMoviePress with correct movieId', () => {
    const mockOnMoviePress = jest.fn();
    const {getByText} = render(
      <MovieList movies={mockMovies} onMoviePress={mockOnMoviePress} />,
    );

    fireEvent.press(getByText('Movie 1'));
    expect(mockOnMoviePress).toHaveBeenCalledWith(1);
  });
});
