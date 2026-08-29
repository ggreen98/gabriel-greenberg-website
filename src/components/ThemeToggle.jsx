import { useEffect, useState } from 'react';

function getStoredTheme() {
  try {
    const stored = window.localStorage.getItem('theme');
    return stored === 'light' || stored === 'dark' ? stored : null;
  } catch {
    return null;
  }
}

function prefersDark() {
  return window.matchMedia('(prefers-color-scheme: dark)').matches;
}

export default function ThemeToggle() {
  const [theme, setTheme] = useState(getStoredTheme);
  const [systemDark, setSystemDark] = useState(prefersDark);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    const onChange = (e) => setSystemDark(e.matches);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    if (theme) {
      root.setAttribute('data-theme', theme);
      try {
        window.localStorage.setItem('theme', theme);
      } catch {
        /* ignore */
      }
    } else {
      root.removeAttribute('data-theme');
      try {
        window.localStorage.removeItem('theme');
      } catch {
        /* ignore */
      }
    }
  }, [theme]);

  const isDark = theme ? theme === 'dark' : systemDark;

  return (
    <button
      type="button"
      className="theme-toggle"
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
    >
      {isDark ? (
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <circle cx="12" cy="12" r="4.5" stroke="currentColor" strokeWidth="1.5" />
          <path
            d="M12 2.5v2M12 19.5v2M21.5 12h-2M4.5 12h-2M18.4 5.6l-1.4 1.4M7 17l-1.4 1.4M18.4 18.4L17 17M7 7 5.6 5.6"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      ) : (
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M20 14.5A8.5 8.5 0 1 1 9.5 4a6.8 6.8 0 0 0 10.5 10.5z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
        </svg>
      )}
    </button>
  );
}
