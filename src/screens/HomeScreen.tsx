import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {
  useGetPopularMoviesQuery,
  useSearchMoviesQuery,
} from '../store/apiSlice';
import SearchInput from '../components/atoms/SearchInput';
import MovieList from '../components/organisms/MovieList';
import {RootStackParamList} from '../types/navigation';
import ErrorInformation from '../components/molecules/ErrorInformation';
import Spinner from '../components/atoms/Spinner';
import {MovieApiError} from '../types/movie';

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

const HomeScreen: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigation = useNavigation<HomeScreenNavigationProp>();

  const {
    data: popularMovies,
    isLoading: isLoadingPopular,
    error: popularMovieError,
  } = useGetPopularMoviesQuery();
  const {
    data: searchResults,
    isLoading: isLoadingSearch,
    error: searchMovieError,
  } = useSearchMoviesQuery(searchQuery, {
    skip: searchQuery === '',
  });

  const movies = searchQuery ? searchResults : popularMovies;
  const isLoading = isLoadingPopular || isLoadingSearch;
  const error = popularMovieError || searchMovieError;

  const handleMoviePress = (movieId: number) => {
    navigation.navigate('MovieDetail', {movieId});
  };

  return (
    <View style={styles.container}>
      <SearchInput value={searchQuery} onChangeText={setSearchQuery} />
      {isLoading ? (
        <Spinner />
      ) : error ? (
        <ErrorInformation
          message={(error as MovieApiError)?.data?.status_message}
        />
      ) : (
        <MovieList movies={movies || []} onMoviePress={handleMoviePress} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
});

export default HomeScreen;
