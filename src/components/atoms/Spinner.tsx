import React from 'react';
import {
  StyleSheet,
  View,
  ActivityIndicator,
  ActivityIndicatorProps,
} from 'react-native';

interface SpinnerProps {
  size?: ActivityIndicatorProps['size'];
}

const Spinner: React.FC<SpinnerProps> = ({size = 'large'}) => (
  <View style={styles.loadingContainer}>
    <ActivityIndicator size={size} />
  </View>
);

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Spinner;
