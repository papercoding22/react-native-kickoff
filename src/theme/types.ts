// Define a type for colors
interface Colors {
  primary: string;
  secondary: string;
  error: string;
  background: string;
  surface: string;
  onPrimary: string;
  onSecondary: string;
  onError: string;
  onBackground: string;
  onSurface: string;
}

// Define a type for typography
interface Typography {
  h1: {
    fontSize: number;
    fontWeight: string;
  };
  h2: {
    fontSize: number;
    fontWeight: string;
  };
  body1: {
    fontSize: number;
  };
  body2: {
    fontSize: number;
  };
  caption: {
    fontSize: number;
  };
}

// Define a type for spacing
interface Spacing {
  small: number;
  medium: number;
  large: number;
}

// Define a type for the theme
interface Theme {
  colors: Colors;
  typography: Typography;
  spacing: Spacing;
}

export type {Colors, Typography, Spacing, Theme};
