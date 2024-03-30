// ThemeProvider.tsx
import React, {PropsWithChildren, createContext, useState} from 'react';

import {Theme} from './types';
import light from './light';
import dark from './dark';

export interface ThemeContextProps {
  theme: Theme;
  changeTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextProps>(
  {} as ThemeContextProps,
);

const ThemeProvider: React.FC<PropsWithChildren> = ({children}) => {
  const [isDark, setIsDark] = useState(false);

  const theme = isDark ? light : dark;

  const changeTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <ThemeContext.Provider value={{theme, changeTheme}}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
