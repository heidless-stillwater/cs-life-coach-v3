
'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { THEMES_COLORFUL, type Theme } from '@/lib/themes';

type ThemeMode = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  mode: ThemeMode;
  setMode: (mode: ThemeMode) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setThemeState] = useState<Theme>(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('color-theme');
      if (savedTheme) {
        try {
            const parsed = JSON.parse(savedTheme);
            return parsed;
        } catch(e) {
            return THEMES_COLORFUL[10]; // Blue
        }
      }
    }
    return THEMES_COLORFUL[10]; // Blue
  });

  const [mode, setModeState] = useState<ThemeMode>(() => {
    if (typeof window !== 'undefined') {
        const savedMode = localStorage.getItem('theme-mode') as ThemeMode | null;
        if(savedMode) return savedMode;
        
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        return prefersDark ? 'dark' : 'light';
    }
    return 'light';
  });

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove('light', 'dark');
    root.classList.add(mode);
    localStorage.setItem('theme-mode', mode);
  }, [mode]);

  useEffect(() => {
    const root = window.document.documentElement;
    root.style.setProperty('--primary', theme.primary);
    root.style.setProperty('--accent', theme.accent);
    localStorage.setItem('color-theme', JSON.stringify(theme));
  }, [theme]);

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
  };

  const setMode = (newMode: ThemeMode) => {
    setModeState(newMode);
  };
  
  const value = {
    theme,
    setTheme,
    mode,
    setMode,
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};
