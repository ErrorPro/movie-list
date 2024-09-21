import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const EmptyList: React.FC = () => (
  <View style={styles.container}>
    <Text style={styles.text}>No results found</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    flex: 1,
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default EmptyList;
