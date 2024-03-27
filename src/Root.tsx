import {NavigationContainer} from '@react-navigation/native';
import * as React from 'react';
import {Provider} from 'react-redux';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import ErrorBoundary from 'react-native-error-boundary';

import App from './App';
import {store} from './store';
import {ServiceProvider} from './providers';

import './translations';

const queryClient = new QueryClient();

function Root() {
  return (
    <>
      <NavigationContainer>
        <Provider store={store}>
          <QueryClientProvider client={queryClient}>
            <ServiceProvider>
              <ErrorBoundary>
                <App />
              </ErrorBoundary>
            </ServiceProvider>
          </QueryClientProvider>
        </Provider>
      </NavigationContainer>
    </>
  );
}

export default Root;
