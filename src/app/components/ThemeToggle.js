'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
    console.log('ThemeToggle mounted. theme:', theme, 'resolvedTheme:', resolvedTheme);
  }, [theme, resolvedTheme]);

  const toggleTheme = () => {
    // Use resolvedTheme to get the actual current theme (handles 'system')
    // If user is on system theme, we switch to explicit theme
    const currentResolvedTheme = resolvedTheme || 'light';
    const newTheme = currentResolvedTheme === 'dark' ? 'light' : 'dark';
    console.log('theme:', theme, 'resolvedTheme:', currentResolvedTheme, 'Switching to:', newTheme);
    setTheme(newTheme);
  };

  if (!mounted) {
    return null;
  }

  // Use resolvedTheme to determine which icon to show
  const isDark = resolvedTheme === 'dark';

  return (
    <button
      onClick={toggleTheme}
      className="fixed top-4 right-4 z-50 p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all hover:scale-110 border-2 border-gray-200 dark:border-gray-600"
      aria-label="Toggle theme"
    >
      {isDark ? (
        // Sun icon - click to switch to light mode
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5 text-yellow-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
      ) : (
        // Moon icon - click to switch to dark mode
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5 text-gray-700 dark:text-gray-300"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
          />
        </svg>
      )}
    </button>
  );
}

