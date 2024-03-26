import {NavigationContainer} from '@react-navigation/native';
import * as React from 'react';
import {Provider} from 'react-redux';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';

import App from './App';
import {store} from './store';

const queryClient = new QueryClient();

function Root() {
  return (
    <>
      <NavigationContainer>
        <Provider store={store}>
          <QueryClientProvider client={queryClient}>
            <App />
          </QueryClientProvider>
        </Provider>
      </NavigationContainer>
    </>
  );
}

export default Root;
