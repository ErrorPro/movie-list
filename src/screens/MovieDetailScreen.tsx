import React from 'react';
import {View, Text, Image, StyleSheet, ScrollView} from 'react-native';
import {RouteProp, useRoute} from '@react-navigation/native';
import {useGetMovieDetailsQuery} from '../store/apiSlice';
import {getImageUrl} from '../api/config';
import {RootStackParamList} from '../types/navigation';
import Spinner from '../components/atoms/Spinner';
import ErrorInformation from '../components/molecules/ErrorInformation';
import {MovieApiError} from '../types/movie';

type MovieDetailScreenRouteProp = RouteProp<RootStackParamList, 'MovieDetail'>;

const MovieDetailScreen: React.FC = () => {
  const route = useRoute<MovieDetailScreenRouteProp>();
  const {movieId} = route.params;

  const {data: movie, isLoading, error} = useGetMovieDetailsQuery(movieId);

  if (isLoading) {
    return <Spinner />;
  }

  if (error || !movie) {
    const errorMessage = (error as MovieApiError)?.data?.status_message;

    return <ErrorInformation message={errorMessage} />;
  }

  return (
    <ScrollView style={styles.container}>
      <Image
        source={{uri: getImageUrl(movie.poster_path)}}
        style={styles.poster}
      />
      <View style={styles.infoContainer}>
        <Text style={styles.title}>{movie.title}</Text>
        <Text style={styles.releaseDate}>Released: {movie.release_date}</Text>
        <Text style={styles.rating}>Rating: {movie.vote_average}/10</Text>
        <Text style={styles.overview}>{movie.overview}</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  poster: {
    width: '100%',
    height: 300,
    resizeMode: 'cover',
  },
  infoContainer: {
    padding: 15,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  releaseDate: {
    fontSize: 16,
    marginBottom: 5,
  },
  rating: {
    fontSize: 16,
    marginBottom: 10,
  },
  overview: {
    fontSize: 16,
    lineHeight: 24,
  },
});

export default MovieDetailScreen;
