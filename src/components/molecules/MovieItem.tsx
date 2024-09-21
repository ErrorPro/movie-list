import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {Movie} from '../../types/movie';
import {getImageUrl} from '../../api/config';

interface MovieItemProps {
  movie: Movie;
  onPress: (movieId: number) => void;
}

const MovieItem: React.FC<MovieItemProps> = ({movie, onPress}) => (
  <TouchableOpacity onPress={() => onPress(movie.id)}>
    <View style={styles.container}>
      <Image
        source={{uri: getImageUrl(movie.poster_path)}}
        style={styles.poster}
      />
      <View style={styles.info}>
        <Text style={styles.title}>{movie.title}</Text>
        <Text style={styles.date}>{movie.release_date}</Text>
      </View>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  poster: {
    width: 50,
    height: 75,
    marginRight: 10,
  },
  info: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  date: {
    fontSize: 14,
    color: '#666',
  },
});

export default MovieItem;
