import React from 'react';
import {FlatList, ListRenderItem} from 'react-native';
import {Movie} from '../../types/movie';
import MovieItem from '../molecules/MovieItem';
import EmptyList from '../molecules/EmptyList';

interface MovieListProps {
  movies: Movie[];
  onMoviePress: (movieId: number) => void;
}

const MovieList: React.FC<MovieListProps> = ({movies, onMoviePress}) => {
  const renderItem: ListRenderItem<Movie> = ({item}) => (
    <MovieItem movie={item} onPress={onMoviePress} />
  );

  return (
    <FlatList
      data={movies}
      renderItem={renderItem}
      keyExtractor={item => item.id.toString()}
      ListEmptyComponent={EmptyList}
    />
  );
};

export default MovieList;
