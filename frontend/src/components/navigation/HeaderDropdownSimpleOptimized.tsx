import { HeaderServer } from './HeaderServer';
import { generateId } from '@/lib/utils';

interface HeaderDropdownSimpleOptimizedProps {
  variant?: 'left' | 'center' | 'right' | 'split' | 'logo-left-menu-center';
  brand?: string;
  logo?: string;
  bgClass?: string;
  showLogin?: boolean;
  id?: string;
}

export const HeaderDropdownSimpleOptimized = (props: HeaderDropdownSimpleOptimizedProps) => {
  const {
    variant = 'left',
    brand = 'Brand',
    logo = '/next.svg',
    bgClass = 'bg-base-100',
    showLogin = true,
    id = generateId('header-dropdown-simple-optimized')
  } = props;

  const items = [
    { label: "Products", href: "/products", hasDropdown: true },
    { label: "Services", href: "/services", hasDropdown: true },
    { label: "Pricing", href: "/pricing" },
    { label: "Previews", href: "/previews" },
    { label: "About", href: "/about" },
  ];

  return (
    <HeaderServer
      variant={variant}
      brand={brand}
      logo={logo}
      bgClass={bgClass}
      showLogin={showLogin}
      items={items}
      id={id}
    />
  );
}; 