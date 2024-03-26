import {NavigationContainer} from '@react-navigation/native';
import * as React from 'react';
import {Provider} from 'react-redux';

import App from './App';
import {store} from './store';

function Root() {
  return (
    <>
      <NavigationContainer>
        <Provider store={store}>
          <App />
        </Provider>
      </NavigationContainer>
    </>
  );
}

export default Root;
