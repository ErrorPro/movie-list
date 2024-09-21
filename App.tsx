import React from 'react';
import {Provider} from 'react-redux';
import {store} from './src/store';
import Navigation from './src/navigation';

const App: React.FC = () => (
  <Provider store={store}>
    <Navigation />
  </Provider>
);

export default App;
