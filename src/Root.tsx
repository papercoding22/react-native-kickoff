import {NavigationContainer} from '@react-navigation/native';
import * as React from 'react';
import {Provider} from 'react-redux';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import ErrorBoundary from 'react-native-error-boundary';

import {ThemeProvider} from '@/theme';

import {store} from './store';
import {ServiceProvider} from './providers';

import './translations';
import {LocalStorage} from './local-storage';
import AppNavigator from './navigation/AppNavigator';

const queryClient = new QueryClient();

function Root() {
  return (
    <>
      <NavigationContainer>
        <Provider store={store}>
          <QueryClientProvider client={queryClient}>
            <ErrorBoundary>
              <ServiceProvider>
                <ThemeProvider storage={LocalStorage}>
                  <AppNavigator />
                </ThemeProvider>
              </ServiceProvider>
            </ErrorBoundary>
          </QueryClientProvider>
        </Provider>
      </NavigationContainer>
    </>
  );
}

export default Root;
