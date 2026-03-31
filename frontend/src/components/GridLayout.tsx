import React from 'react';
import { generateId } from '@/lib/utils';

/**
 * GridLayout
 * - Simple CSS Grid layout for repeated, similar content (cards, tiles, etc.).
 * - Supports up to 4 equal columns.
 * - Uses only Tailwind utility classes.
 * - Responsive: fewer columns on smaller screens.
 *
 * Props:
 * - columns: number (1-4) for equal columns
 * - gap: number (Tailwind gap value)
 * - children: React.ReactNode
 * - className: string (optional)
 *
 * Example usage:
 * <GridLayout columns={3} gap={4}>
 *   {images.map((img, idx) => (
 *     <img key={idx} src={img.src} alt={img.alt} className="rounded-lg" />
 *   ))}
 * </GridLayout>
 */
export interface GridLayoutProps {
  columns?: 1 | 2 | 3 | 4;
  gap?: number;
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export const GridLayout: React.FC<GridLayoutProps> = ({
  columns = 3,
  gap = 6,
  children,
  className = '',
  id = generateId('grid-layout'),
  ...rest
}) => {
  // Standard grid layout: simple responsive grid
  const responsiveCols = columns === 1 ? 'grid-cols-1' : 
                        columns === 2 ? 'grid-cols-2' : 
                        columns === 3 ? 'grid-cols-2 md:grid-cols-3' : 
                        'grid-cols-2 md:grid-cols-4';

  return (
    <div
      id={id}
      className={[
        'grid',
        responsiveCols,
        `gap-${gap}`,
        className,
      ].filter(Boolean).join(' ')}
      {...rest}
    >
      {children}
    </div>
  );
};

export default GridLayout; 