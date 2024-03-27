import React from 'react';
import {Button, Text, View} from 'react-native';
import {render, fireEvent} from '@testing-library/react-native';
import {LocalStorage} from '@/local-storage';

import {useTheme, ThemeProvider} from '@/theme';

function TestChildComponent() {
  const {variant, changeTheme} = useTheme();
  return (
    <View>
      <Text testID="theme-variant">{variant}</Text>
      <Button
        testID="change-btn"
        title="button"
        onPress={() => changeTheme('dark')}
      />
    </View>
  );
}

describe('ThemeProvider', () => {
  let storage: typeof LocalStorage;

  beforeEach(() => {
    storage = LocalStorage;
  });

  it('initializes with the default theme when no theme is defined in storage', () => {
    const {getByTestId} = render(
      <ThemeProvider storage={storage}>
        <TestChildComponent />
      </ThemeProvider>,
    );
    const themeContext = getByTestId('theme-variant');

    // Assert that the theme context is initialized with 'default'
    expect(themeContext.children[0]).toBe('default');
  });

  it('loads the theme from storage if defined', () => {
    storage.setItem('theme', 'dark');

    const {getByTestId} = render(
      <ThemeProvider storage={storage}>
        <TestChildComponent />
      </ThemeProvider>,
    );
    const themeContext = getByTestId('theme-variant');

    // Assert that the theme context is initialized with 'dark'
    expect(themeContext.children[0]).toBe('dark');
  });

  it('changes the theme when calling changeTheme', () => {
    const {getByTestId} = render(
      <ThemeProvider storage={storage}>
        <TestChildComponent />
      </ThemeProvider>,
    );
    const themeContext = getByTestId('theme-variant');

    expect(themeContext.children[0]).toBe('dark');

    // Change the theme to 'light'
    fireEvent.press(getByTestId('change-btn'));

    // Assert that the theme has changed to 'light'
    expect(themeContext.children[0]).toBe('dark');
  });
});
