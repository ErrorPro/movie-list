import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import MovieDetailScreen from '../screens/MovieDetailScreen';
import {RootStackParamList} from '../types/navigation';

const Stack = createStackNavigator<RootStackParamList>();

const Navigation: React.FC = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{title: 'Movie List'}}
      />
      <Stack.Screen
        name="MovieDetail"
        component={MovieDetailScreen}
        options={{title: 'Movie Details'}}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

export default Navigation;
