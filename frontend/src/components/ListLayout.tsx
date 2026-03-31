import React from 'react';
import { generateId } from '@/lib/utils';

/**
 * ListLayout
 * - Directory-style list layout (pure layout component).
 * - Uses flex or grid with Tailwind utilities.
 * - Responsive: stacks vertically on mobile, can split into columns on larger screens.
 * - Only uses Tailwind classes.
 *
 * Props:
 * - gap: number (Tailwind gap-y value)
 * - columns: number (optional, for splitting into columns on larger screens)
 * - children: React.ReactNode
 * - className: string (optional)
 */
export interface ListLayoutProps {
  gap?: number;
  columns?: 1 | 2 | 3;
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export const ListLayout: React.FC<ListLayoutProps> & { Item: typeof ListLayoutItem } = ({
  gap = 4,
  columns = 1,
  children,
  className = '',
  id = generateId('list-layout'),
  ...rest
}) => {
  // Use grid for optional columns, flex for single column
  const isGrid = columns > 1;
  const baseClass = isGrid ? `grid grid-cols-1 md:grid-cols-${columns}` : 'flex flex-col';
  const gapClass = isGrid ? `gap-${gap}` : `space-y-${gap}`;

  const combined = [baseClass, gapClass, className].filter(Boolean).join(' ');

  return (
    <div id={id} className={combined} {...rest}>
      {children}
    </div>
  );
};

/**
 * ListLayout.Item
 * - Pure layout wrapper for list items.
 * - Applies layout-related classes only.
 *
 * Props:
 * - children: React.ReactNode
 * - className: string (optional)
 */
export interface ListLayoutItemProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

const ListLayoutItem: React.FC<ListLayoutItemProps> = ({ children, className = '', id = generateId('list-layout-item'), ...rest }) => {
  const base = 'w-full flex items-center gap-x-4 rounded transition hover:bg-base-100';
  return (
    <div id={id} className={[base, className].filter(Boolean).join(' ')} {...rest}>
      {children}
    </div>
  );
};

ListLayout.Item = ListLayoutItem;

export default ListLayout; 