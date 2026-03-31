import React from 'react';
import { HeaderDropdownTrigger } from './HeaderDropdownTrigger';
import { HeaderMobileToggle } from './HeaderMobileToggle';
import ThemeSwitcher from '@/components/ThemeSwitcher';
import { generateId } from '@/lib/utils';

interface HeaderServerProps {
  variant?: 'left' | 'center' | 'right' | 'split' | 'logo-left-menu-center';
  brand?: string;
  logo?: string;
  bgClass?: string;
  className?: string;
  showLogin?: boolean;
  items: Array<{
    label: string;
    href: string;
    hasDropdown?: boolean;
  }>;
  id?: string;
}

export const HeaderServer: React.FC<HeaderServerProps> = ({
  variant = 'left',
  brand = 'Brand',
  logo = '/next.svg',
  bgClass = 'bg-base-100',
  className = '',
  showLogin = true,
  items,
  id = generateId('header-server')
}) => {
  const LogoComponent = () => (
    <a href="/" className="flex items-center gap-3">
      {logo ? (
        <img 
          src={logo} 
          alt={brand} 
          className="h-6 w-auto"
        />
      ) : (
        <span className="text-xl font-bold text-base-content">{brand}</span>
      )}
    </a>
  );

  const LoginButton = () => (
    <button className="btn btn-secondary btn-sm">
      Login
    </button>
  );

  const renderNavigation = () => {
    const navItems = (
      <ul className="flex items-center gap-6">
        {items.map((item) => (
          <li key={item.label} className="relative group">
            {item.hasDropdown ? (
              <HeaderDropdownTrigger label={item.label} href={item.href} />
            ) : (
              <a 
                href={item.href} 
                className="flex items-center gap-2 px-3 py-2 text-base-content hover:text-primary transition-colors duration-200 font-medium"
              >
                {item.label}
              </a>
            )}
          </li>
        ))}
      </ul>
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
              <ThemeSwitcher />
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
              <ThemeSwitcher />
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
                <ThemeSwitcher />
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
                <ThemeSwitcher />
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
              <ThemeSwitcher />
              {showLogin && <LoginButton />}
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <header id={id} className={`sticky top-0 z-50 border-b border-base-300 shadow-sm ${bgClass} ${className}`}>
      <div className="container mx-auto px-4 py-4">
        <div className="relative">
          {renderNavigation()}
          
          {/* Mobile controls */}
          <div className="lg:hidden flex items-center gap-2 absolute top-0 right-0">
            <ThemeSwitcher />
            <HeaderMobileToggle items={items} showLogin={showLogin} />
          </div>
        </div>
      </div>
    </header>
  );
}; 