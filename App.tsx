import React, {useEffect} from 'react';
import {Provider} from 'react-redux';
import {usePreventScreenCapture} from 'expo-screen-capture';

import {store} from '@store/index';
import AppNavigator from '@navigation/AppNavigator';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {ThemeProvider} from '@contexts/ThemeContext';
import ErrorBoundary from '@components/ErrorBoundary';
import './global.css';

import './src/i18n';
const queryClient = new QueryClient();

const App = () => {
  usePreventScreenCapture();

  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider>
          <ErrorBoundary>
            <AppNavigator />
          </ErrorBoundary>
        </ThemeProvider>
      </QueryClientProvider>
    </Provider>
  );
};

export default App;
