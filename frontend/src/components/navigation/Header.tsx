'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ThemeSwitcher from '@/components/ThemeSwitcher';

interface HeaderProps {
  items: Array<{
    label: string;
    href: string;
    menu?: React.ReactNode;
  }>;
  variant?: 'left' | 'center' | 'right' | 'split' | 'logo-left-menu-center';
  brand?: string;
  logo?: string;
  bgClass?: string;
  className?: string;
  showLogin?: boolean;
}

export const Header = (props: HeaderProps) => {
  const {
    items, 
    variant = 'left', 
    brand = 'Brand',
    logo = '/next.svg',
    bgClass = 'bg-base-100',
    className = '',
    showLogin = true
  } = props;
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [hoverTimeout, setHoverTimeout] = useState<NodeJS.Timeout | null>(null);

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

  const renderNavigation = () => {
    const handleMouseEnter = (itemLabel: string) => {
      if (hoverTimeout) {
        clearTimeout(hoverTimeout);
        setHoverTimeout(null);
      }
      setHoveredItem(itemLabel);
    };

    const handleMouseLeave = () => {
      const timeout = setTimeout(() => {
        setHoveredItem(null);
      }, 150); // 150ms delay before closing
      setHoverTimeout(timeout);
    };

    const navItems = (
      <ul className="flex items-center gap-6">
        {items.map((item) => (
          <li 
            key={item.label} 
            className="relative group"
            onMouseEnter={() => handleMouseEnter(item.label)}
            onMouseLeave={handleMouseLeave}
          >
            {item.menu ? (
              <button 
                className="flex items-center gap-2 px-3 py-2 text-base-content hover:text-primary transition-colors duration-200 font-medium"
              >
                {item.label}
                <svg 
                  className={`w-4 h-4 transition-transform duration-200 ${
                    hoveredItem === item.label ? 'rotate-180' : ''
                  }`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            ) : (
              <Link 
                href={item.href} 
                className="flex items-center gap-2 px-3 py-2 text-base-content hover:text-primary transition-colors duration-200 font-medium"
              >
                {item.label}
              </Link>
            )}
            {item.menu && hoveredItem === item.label && (
              <div 
                className="absolute top-full w-xs left-0 mt-2 z-50"
                onMouseEnter={() => handleMouseEnter(item.label)}
                onMouseLeave={handleMouseLeave}
              >
                {item.menu}
              </div>
            )}
          </li>
        ))}
      </ul>
    );

    const LogoComponent = () => (
      <Link href="/" className="flex items-center gap-3">
        {logo ? (
          <Image 
            src={logo} 
            alt={brand} 
            width={120} 
            height={24} 
            className="h-6 w-auto"
          />
        ) : (
          <span className="text-xl font-bold text-base-content">{brand}</span>
        )}
      </Link>
    );

    const LoginButton = () => (
      <button className="btn btn-secondary btn-sm">
        Login
      </button>
    );

    const ThemeSwitcherComponent = () => (
      <div className="flex items-center gap-2">
        <ThemeSwitcher />
      </div>
    );

    switch (variant) {
      case 'left':
        return (
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 lg:gap-8">
            <div className="flex items-center gap-16">
              <div className="flex-shrink-0">
                <LogoComponent />
              </div>
              <nav className="hidden lg:block">
                {navItems}
              </nav>
            </div>
            <div className="hidden lg:flex items-center gap-4">
              <ThemeSwitcherComponent />
              {showLogin && <LoginButton />}
            </div>
          </div>
        );

      case 'center':
        return (
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 lg:gap-8">
            <div className="lg:absolute lg:left-1/2 lg:transform lg:-translate-x-1/2">
              <LogoComponent />
            </div>
            <nav className="hidden lg:block">
              {navItems}
            </nav>
            <div className="hidden lg:flex items-center gap-4">
              <ThemeSwitcherComponent />
              {showLogin && <LoginButton />}
            </div>
          </div>
        );

      case 'right':
        return (
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 lg:gap-8">
            <LogoComponent />
            <div className="flex items-center gap-8">
              <nav className="hidden lg:block">
                {navItems}
              </nav>
              <div className="hidden lg:flex items-center gap-4">
                <ThemeSwitcherComponent />
                {showLogin && <LoginButton />}
              </div>
            </div>
          </div>
        );

      case 'split':
        return (
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 lg:gap-8">
            <LogoComponent />
            <div className="flex items-center gap-8">
              <nav className="hidden lg:block">
                {navItems}
              </nav>
              <div className="hidden lg:flex items-center gap-4">
                <ThemeSwitcherComponent />
                {showLogin && <LoginButton />}
              </div>
            </div>
          </div>
        );

      case 'logo-left-menu-center':
        return (
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 lg:gap-8">
            <div className="flex-shrink-0 w-32">
              <LogoComponent />
            </div>
            <nav className="hidden lg:block lg:absolute lg:left-1/2 lg:transform lg:-translate-x-1/2 z-10">
              {navItems}
            </nav>
            <div className="hidden lg:flex items-center gap-4 flex-shrink-0">
              <ThemeSwitcherComponent />
              {showLogin && <LoginButton />}
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <header className={`sticky top-0 z-50 border-b border-base-300 shadow-sm ${bgClass} ${className}`}>
      <div className="container mx-auto px-4 py-4">
        <div className="relative">
          {renderNavigation()}
          
          {/* Mobile controls */}
          <div className="lg:hidden flex items-center gap-2 absolute top-0 right-0">
            <ThemeSwitcher />
            <button
              className="btn btn-ghost btn-sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden w-full mt-4">
            <nav className="w-full bg-base-100 border-t border-base-300 shadow-lg">
              <ul className="py-2">
                {items.map((item) => (
                  <li key={item.label}>
                    <Link 
                      href={item.href} 
                      className="block px-4 py-3 text-base-content hover:bg-base-200 transition-colors duration-200"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
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
      </div>
    </header>
  );
}; 