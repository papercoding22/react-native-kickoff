import React from 'react';

import {QueryClient, QueryClientProvider} from '@tanstack/react-query';

import '@testing-library/react-native/extend-expect';

const queryClient = new QueryClient();

jest.mock('react-i18next', () => ({
  // this mock makes sure any components using the translate hook can use it without a warning being shown
  useTranslation: () => {
    return {
      t: (str: any) => str,
      i18n: {
        changeLanguage: () => new Promise(() => {}),
      },
    };
  },
  initReactI18next: {
    type: '3rdParty',
    init: () => {},
  },
}));

beforeAll(async () => {
  process.env.API_URL = 'https://jsonplaceholder.typicode.com';
});

afterEach(() => {
  queryClient.clear();
});

afterAll(() => {
  jest.clearAllMocks();
});

declare global {
  var ReactQueryWrapper: ({
    children,
  }: {
    children: React.ReactNode;
  }) => JSX.Element;
}

global.ReactQueryWrapper = ({children}) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);
