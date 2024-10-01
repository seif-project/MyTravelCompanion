// src/contexts/ThemeContext.tsx
import React, { createContext, useState, useEffect } from 'react';
import { Appearance } from 'react-native';

export const ThemeContext = createContext({
  isDarkMode: false,
  toggleTheme: () => {},
});

interface ThemeProviderProps {
  children: React.ReactNode;
}
export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [isDarkMode, setIsDarkMode] = useState(
    Appearance.getColorScheme() === 'dark',
  );

  useEffect(() => {
    // Le listener avec le type correct
    const listener = (preferences: Appearance.AppearancePreferences) => {
      const colorScheme = preferences.colorScheme;
      setIsDarkMode(colorScheme === 'dark');
    };

    // Utilisation de la nouvelle API
    const subscription = Appearance.addChangeListener(listener);

    return () => {
      // Suppression du listener
      subscription.remove();
    };
  }, []);

  const toggleTheme = () => setIsDarkMode((prev) => !prev);

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
