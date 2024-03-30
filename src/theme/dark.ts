import {Theme} from './types';

const dark: Theme = {
  colors: {
    primary: '#F2613F',
    secondary: '#007F73',
    error: '#cf6679',
    background: '#121212',
    surface: '#121212',
    onPrimary: '#000000',
    onSecondary: '#000000',
    onError: '#000000',
    onBackground: '#ffffff',
    onSurface: '#ffffff',
  },
  typography: {
    h1: {
      fontSize: 32,
      fontWeight: 'bold',
    },
    h2: {
      fontSize: 24,
      fontWeight: 'bold',
    },
    body1: {
      fontSize: 16,
    },
    body2: {
      fontSize: 14,
    },
    caption: {
      fontSize: 12,
    },
  },
  spacing: {
    small: 8,
    medium: 16,
    large: 24,
  },
};

export default dark;
