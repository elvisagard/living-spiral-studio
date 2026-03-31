"use client";

import { useState } from 'react';

interface HeaderMobileToggleProps {
  items: Array<{
    label: string;
    href: string;
    hasDropdown?: boolean;
  }>;
  showLogin?: boolean;
}

export const HeaderMobileToggle: React.FC<HeaderMobileToggleProps> = ({ items, showLogin = true }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const MenuIcon = () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  );

  const CloseIcon = () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
  );

  return (
    <>
      <button
        className="btn btn-ghost btn-sm"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        aria-label="Toggle mobile menu"
      >
        {isMobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
      </button>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden w-full mt-4">
          <nav className="w-full bg-base-100 border-t border-base-300 shadow-lg">
            <ul className="py-2">
              {items.map((item) => (
                <li key={item.label}>
                  <a 
                    href={item.href} 
                    className="block px-4 py-3 text-base-content hover:bg-base-200 transition-colors duration-200"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              {showLogin && (
                <li className="px-4 py-3 border-t border-base-300">
                  <button className="btn btn-primary btn-sm w-full">
                    Login
                  </button>
                </li>
              )}
            </ul>
          </nav>
        </div>
      )}
    </>
  );
}; 