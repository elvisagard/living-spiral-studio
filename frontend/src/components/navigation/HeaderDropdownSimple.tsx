'use client';

import { DropdownMenuSimple } from './DropdownMenuSimple';
import { Header } from './Header';

interface HeaderDropdownSimpleProps {
  variant?: 'left' | 'center' | 'right' | 'split' | 'logo-left-menu-center';
  brand?: string;
  logo?: string;
  bgClass?: string;
  showLogin?: boolean;
}

export const HeaderDropdownSimple = (props: HeaderDropdownSimpleProps) => {
  const {
    variant = 'left',
    brand = 'Brand',
    logo = '/next.svg',
    bgClass = 'bg-base-100',
    showLogin = true
  } = props;

  return (
    <Header
      variant={variant}
      brand={brand}
      logo={logo}
      bgClass={bgClass}
      showLogin={showLogin}
      items={[
        { label: "Products", href: "/products", menu: <DropdownMenuSimple /> },
        { label: "Services", href: "/services", menu: <DropdownMenuSimple /> },
        { label: "Pricing", href: "/pricing" },
        { label: "Resources", href: "/resources", menu: <DropdownMenuSimple /> },
        { label: "About", href: "/about" },
      ]}
    />
  );
} 