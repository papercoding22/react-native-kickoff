import * as React from 'react';
import {render, screen} from '@testing-library/react-native';

import App from '../App';

describe('App', () => {
  it('renders correctly', async () => {
    jest.useFakeTimers();

    const ReactQueryWrapper = global.ReactQueryWrapper;
    render(
      <ReactQueryWrapper>
        <App />
      </ReactQueryWrapper>,
    );

    expect(
      screen.getByText('Read the docs to discover what to do next:'),
    ).toBeTruthy();
  });
});
