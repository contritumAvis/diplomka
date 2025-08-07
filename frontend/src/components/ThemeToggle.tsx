'use client';
import { useEffect, useState } from 'react';

export const ThemeToggle = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    const stored = localStorage.getItem('theme');
    const isValid = stored === 'light' || stored === 'dark';
    const initialTheme: 'light' | 'dark' = isValid ? stored : 'light';

    setTheme(initialTheme);
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(initialTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme: 'light' | 'dark' = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  return (
    <button
      onClick={toggleTheme}
      className="fixed top-4 right-4 px-3 py-2 rounded bg-gray-200 text-black dark:bg-gray-800 dark:text-white"
    >
      {theme === 'dark' ? '🌙 Dark' : '☀️ Light'}
    </button>
  );
};
