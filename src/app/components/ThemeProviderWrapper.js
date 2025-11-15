'use client';

import { ThemeProvider } from 'next-themes';

export function ThemeProviderWrapper({ children }) {
  return (
    <ThemeProvider 
      attribute="class" 
      defaultTheme="system"
      enableSystem={true}
      storageKey="heavenly-bakery-theme"
    >
      {children}
    </ThemeProvider>
  );
}

