'use client';

import { useEffect, useState } from 'react';
import { themeChange } from 'theme-change';

const themes = [
  { name: 'light', icon: '☀️' },
  { name: 'dark', icon: '🌙' },
  { name: 'fantasy', icon: '✨' }
];

export default function ThemeSwitcher() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [currentTheme, setCurrentTheme] = useState('fantasy');

  useEffect(() => {
    setMounted(true);
    // Initialize theme-change library
    themeChange(false);
    
    // Get current theme from document or localStorage
    const savedTheme = document.documentElement.getAttribute('data-theme') || 
                       localStorage.getItem('theme') || 
                       'fantasy';
    setCurrentTheme(savedTheme);
    
    // Listen for theme changes
    const observer = new MutationObserver(() => {
      const theme = document.documentElement.getAttribute('data-theme') || 'fantasy';
      setCurrentTheme(theme);
    });
    
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme']
    });
    
    return () => observer.disconnect();
  }, []);

  const handleThemeChange = (themeName: string) => {
    // Set theme on document
    document.documentElement.setAttribute('data-theme', themeName);
    // Save to localStorage (theme-change uses 'theme' key)
    localStorage.setItem('theme', themeName);
    // Update state
    setCurrentTheme(themeName);
    // Close dropdown
    setIsOpen(false);
  };

  const currentThemeData = themes.find(t => t.name === currentTheme);

  // Prevent hydration mismatch by not rendering until mounted
  if (!mounted) {
    return (
      <div className="relative">
        <button
          className="btn btn-ghost btn-sm btn-circle border border-secondary"
          title="Change theme"
          aria-label="Theme switcher"
        >
          <span className="text-lg">✨</span>
        </button>
      </div>
    );
  }

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="btn btn-ghost btn-sm btn-circle border border-secondary"
        title="Change theme"
        aria-label="Theme switcher"
      >
        <span className="text-lg">{currentThemeData?.icon}</span>
      </button>
      
      {isOpen && (
        <div className="absolute right-0 top-12 z-50 dropdown-content menu bg-base-200 rounded-box shadow-lg border border-base-300 min-w-[120px]">
          <ul className="menu menu-sm">
            {themes.map((themeOption) => (
              <li key={themeOption.name}>
                <button
                  onClick={() => handleThemeChange(themeOption.name)}
                  className={`flex items-center gap-2 ${
                    currentTheme === themeOption.name ? 'active' : ''
                  }`}
                >
                  <span className="text-sm">{themeOption.icon}</span>
                  <span className="capitalize text-sm">
                    {themeOption.name}
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
      
      {/* Click outside to close */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-40" 
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  );
} 