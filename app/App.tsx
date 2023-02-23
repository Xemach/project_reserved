import React from 'react';

import AppProvider from './redux/AppProvider';
import AppNavigation from './navigation';
import {StatusBar} from 'react-native';

const App = () => {
  return (
    <AppProvider>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      <AppNavigation />
    </AppProvider>
  );
};

export default App;
