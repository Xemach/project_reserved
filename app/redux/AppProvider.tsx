import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import { persistor, store } from './store';
import { ReactNode } from 'react';
import { DripsyProvider } from 'dripsy';
import { theme } from '../lib/theme';
import { PersistGate } from 'redux-persist/integration/react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const AppProvider = (props: { children: ReactNode }) => {
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <DripsyProvider theme={theme}>
            <GestureHandlerRootView style={{ flex: 1 }}>
              {props.children}
            </GestureHandlerRootView>
          </DripsyProvider>
        </PersistGate>
      </Provider>
    </SafeAreaProvider>
  );
};

export default AppProvider;
