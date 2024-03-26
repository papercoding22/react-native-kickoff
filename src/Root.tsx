import {NavigationContainer} from '@react-navigation/native';
import * as React from 'react';

import App from './App';

function Root() {
  return (
    <>
      <NavigationContainer>
        <App />
      </NavigationContainer>
    </>
  );
}

export default Root;
