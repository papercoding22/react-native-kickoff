// useTheme.ts
import {useContext} from 'react';
import {ThemeContext, ThemeContextProps} from './ThemeProvider';
/*
 * useTheme.ts
 * This file contains the useTheme hook.
 * This hook is used to access the theme context.
 */
const useTheme = (): ThemeContextProps => {
  if (!ThemeContext) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }

  return useContext(ThemeContext);
};

export default useTheme;
