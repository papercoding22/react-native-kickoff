import {Theme} from './types';

const light: Theme = {
  colors: {
    primary: '#F2613F',
    secondary: '#007F73',
    error: '#B00020',
    background: '#ffffff',
    surface: '#ffffff',
    onPrimary: '#ffffff',
    onSecondary: '#000000',
    onError: '#ffffff',
    onBackground: '#000000',
    onSurface: '#000000',
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

export default light;
