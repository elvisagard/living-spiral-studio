import React from 'react';
import { generateId } from '@/lib/utils';

/**
 * SidebarLayout
 * - Layout with sidebar and main content (blogs, dashboards, docs).
 * - Uses CSS Grid or Flexbox with Tailwind utilities.
 * - Responsive: stacks on mobile, sidebar left or right.
 * - Only uses Tailwind classes.
 *
 * Props:
 * - sidebar: React.ReactNode (sidebar content)
 * - children: React.ReactNode (main content)
 * - sidebarPosition: 'left' | 'right' (default: 'left')
 * - gap: number (Tailwind gap-x value)
 * - className: string (optional)
 */
export interface SidebarLayoutProps {
  sidebar: React.ReactNode;
  children: React.ReactNode;
  sidebarPosition?: 'left' | 'right';
  gap?: number;
  className?: string;
  id?: string;
}

export const SidebarLayout: React.FC<SidebarLayoutProps> = ({
  sidebar,
  children,
  sidebarPosition = 'left',
  gap = 8,
  className = '',
  id = generateId('sidebar-layout'),
  ...rest
}) => {
  // Use grid for layout with proper mobile-first responsive behavior
  const gapClass = `gap-${gap}`;
  
  // Different grid templates for left vs right sidebar
  const gridClass = sidebarPosition === 'right' 
    ? 'grid grid-cols-1 md:grid-cols-[1fr_300px]' 
    : 'grid grid-cols-1 md:grid-cols-[300px_1fr]';

  const combined = [gridClass, gapClass, className].filter(Boolean).join(' ');

  return (
    <div id={id} className={combined} {...rest}>
      {sidebarPosition === 'right' ? (
        <>
          <main className="order-2 md:order-1 min-w-0 overflow-hidden">{children}</main>
          <aside className="order-1 md:order-2 mb-8 md:mb-0 min-w-0 max-w-[300px] overflow-hidden">{sidebar}</aside>
        </>
      ) : (
        <>
          <aside className="order-1 mb-8 md:mb-0 min-w-0 max-w-[300px] overflow-hidden">{sidebar}</aside>
          <main className="order-2 min-w-0 overflow-hidden">{children}</main>
        </>
      )}
    </div>
  );
};

export default SidebarLayout; 