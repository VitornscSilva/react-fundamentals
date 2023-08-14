import React, { useState, useMemo, createContext } from 'react';
import { ThemeProvider as SCThemeProvider } from 'styled-components';

import themes from '../styles/themes';

export const ThemeContext = createContext('dark');

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('dark');

  const currentTheme = useMemo(() => {
    return themes[theme] || themes.dark;
  }, [theme]);

  function handleToggleTheme() {
    setTheme((prevState) => (
      prevState === 'dark'
        ? 'light'
        : 'dark'
    ));
  }

  return (
    <ThemeContext.Provider
      value={{
        theme,
        onToggleTheme: handleToggleTheme
      }}
    >
      <SCThemeProvider theme={currentTheme}>
        {children}
      </SCThemeProvider>
    </ThemeContext.Provider>
  )
}