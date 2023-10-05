import React, { createContext } from 'react';
import { theme } from './Theme';

// Typing of Context Props with known parameters

type ThemeContextProviderProps = {
  children: React.ReactNode;
};

const ThemeContext = createContext(theme);

function ThemeContextProvider({ children }: ThemeContextProviderProps) {
  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
}

export default ThemeContextProvider;
export { ThemeContext };
