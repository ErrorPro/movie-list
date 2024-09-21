import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

interface ErrorInformationProps {
  message?: string;
}

const ErrorInformation: React.FC<ErrorInformationProps> = ({
  message = 'Something went wrong, try again later',
}) => (
  <View style={styles.container}>
    <Text style={styles.text}>{message}</Text>
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

export default ErrorInformation;
