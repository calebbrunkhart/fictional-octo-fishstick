import { useState, useEffect } from 'react';

export default function ThemeToggle() {
  const [mode, setMode] = useState<'light' | 'dark'>(() => {
    try {
      return (localStorage.getItem('theme') as 'light' | 'dark') || 'light';
    } catch {
      return 'light';
    }
  });

  useEffect(() => {
    if (mode === 'dark') document.documentElement.classList.add('dark');
    else document.documentElement.classList.remove('dark');
    try {
      localStorage.setItem('theme', mode);
    } catch {}
  }, [mode]);

  return (
    <button
      onClick={() => setMode((m) => (m === 'dark' ? 'light' : 'dark'))}
      aria-label="Toggle theme"
      className="p-2 rounded-md bg-slate-100/30 dark:bg-slate-800/30"
    >
      {mode === 'dark' ? '🌙' : '☀️'}
    </button>
  );
}
