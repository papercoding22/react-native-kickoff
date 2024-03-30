import * as React from 'react';
import {Provider} from 'react-redux';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import ErrorBoundary from 'react-native-error-boundary';

import ThemeProvider from '@/theme/ThemeProvider';
import {store} from '@/store';
import {ServiceProvider} from '@/providers';
import AppNavigator from '@/navigation/AppNavigator';

import '@/translations';

const queryClient = new QueryClient();

function Root() {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <ErrorBoundary>
          <ServiceProvider>
            <ThemeProvider>
              <AppNavigator />
            </ThemeProvider>
          </ServiceProvider>
        </ErrorBoundary>
      </QueryClientProvider>
    </Provider>
  );
}

export default Root;
