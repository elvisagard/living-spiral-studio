'use client';

import React, { useState, useEffect } from 'react';
import { generateId } from '@/lib/utils';

/**
 * MasonryLayout
 * - CSS Grid masonry layout for content with variable heights.
 * - Distributes children into columns for natural masonry flow.
 * - Each child remains indivisible (no breaking across columns).
 * - Uses nested grids like the original Gallery Layout Demo.
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
 * <MasonryLayout columns={4} gap={4}>
 *   {images.map((img, idx) => (
 *     <img key={idx} src={img.src} alt={img.alt} className="rounded-lg" />
 *   ))}
 * </MasonryLayout>
 */
export interface MasonryLayoutProps {
  columns?: 1 | 2 | 3 | 4;
  gap?: number;
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export const MasonryLayout: React.FC<MasonryLayoutProps> = ({
  columns = 3,
  gap = 6,
  children,
  className = '',
  id = generateId('masonry-layout'),
  ...rest
}) => {
  const [effectiveColumns, setEffectiveColumns] = useState(columns);
  
  useEffect(() => {
    const updateColumns = () => {
      if (columns <= 2) {
        setEffectiveColumns(columns);
      } else if (columns === 3) {
        // 2 columns on mobile, 3 on medium+
        setEffectiveColumns(window.innerWidth >= 768 ? 3 : 2);
      } else {
        // 2 columns on mobile, 3 on medium, 4 on large
        if (window.innerWidth >= 1024) {
          setEffectiveColumns(4);
        } else if (window.innerWidth >= 768) {
          setEffectiveColumns(3);
        } else {
          setEffectiveColumns(2);
        }
      }
    };
    
    updateColumns();
    window.addEventListener('resize', updateColumns);
    return () => window.removeEventListener('resize', updateColumns);
  }, [columns]);
  
  // Distribute children into columns for masonry effect with even distribution
  const columnsArr: React.ReactNode[][] = Array.from({ length: effectiveColumns }, () => []);
  const childrenArray = React.Children.toArray(children);
  const itemsPerColumn = Math.ceil(childrenArray.length / effectiveColumns);
  
  childrenArray.forEach((child, idx) => {
    const columnIndex = Math.floor(idx / itemsPerColumn);
    if (columnIndex < effectiveColumns) {
      columnsArr[columnIndex].push(child);
    }
  });

  // Responsive grid classes - 2 columns on mobile, 3 on medium, 4 on large
  const responsiveCols = columns === 1 ? 'grid-cols-1' : 
                        columns === 2 ? 'grid-cols-2' : 
                        columns === 3 ? 'grid-cols-2 md:grid-cols-3' : 
                        'grid-cols-2 md:grid-cols-3 lg:grid-cols-4';

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
      {columnsArr.map((col, i) => (
        <div 
          className={`grid gap-${gap}`} 
          key={i}
        >
          {col.map((child, j) => (
            <div key={j}>
              {child}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default MasonryLayout; 