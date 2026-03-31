'use client';

import Link from 'next/link';

interface NavMenuItemLinkProps {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  subtitle: string;
  href: string;
}

export const NavMenuItemLink = ({ icon: Icon, title, subtitle, href }: NavMenuItemLinkProps) => {
  return (
    <Link
      href={href}
      className="flex items-start gap-3 p-3 rounded-lg hover:bg-base-200 transition-colors duration-200 group"
    >
      <Icon className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
      <div className="flex-1">
        <div className="font-medium text-base-content group-hover:text-primary transition-colors">
          {title}
        </div>
        <div className="text-sm text-base-content/70 mt-1">
          {subtitle}
        </div>
      </div>
    </Link>
  );
}; 