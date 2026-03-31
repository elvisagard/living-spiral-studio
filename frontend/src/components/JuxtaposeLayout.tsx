import React, { ReactElement } from 'react';
import { generateId } from '@/lib/utils';

/**
 * JuxtaposeLayout
 * - CSS Grid layout for juxtaposing up to 4 large components.
 * - Supports equal columns (1-4) and common asymmetric layouts (66-33, 33-66, 25-50-25).
 * - Only uses static Tailwind utility classes (no arbitrary values).
 * - Responsive: stacks on mobile (grid-cols-1), columns on md+.
 *
 * Props:
 * - columns: 1 | 2 | 3 | 4 | '66-33' | '33-66' | '25-50-25'
 * - gap: number (Tailwind gap-x/y value)
 * - children: React.ReactNode
 * - className: string (optional)
 *
 * Supported layouts:
 *   1: 1 column
 *   2: 2 equal columns
 *   3: 3 equal columns
 *   4: 4 equal columns
 *   '66-33': 2 columns, first is 2/3, second is 1/3
 *   '33-66': 2 columns, first is 1/3, second is 2/3
 *   '25-50-25': 3 columns, 1/4, 1/2, 1/4 (using col-span)
 */
export interface JuxtaposeLayoutProps {
  columns?: 1 | 2 | 3 | 4 | '66-33' | '33-66' | '25-50-25';
  gap?: number;
  children: React.ReactNode;
  className?: string;
  id?: string;
}

function mergeClassNames(...classes: (string | undefined)[]) {
  return classes.filter(Boolean).join(' ');
}

export const JuxtaposeLayout: React.FC<JuxtaposeLayoutProps> = ({
  columns = 2,
  gap = 8,
  children,
  className = '',
  id = generateId('juxtapose-layout'),
  ...rest
}) => {
  let gridColsClass = 'md:grid-cols-2';
  let renderChildren = children;

  if (columns === 1) gridColsClass = 'md:grid-cols-1';
  if (columns === 2) gridColsClass = 'md:grid-cols-2';
  if (columns === 3) gridColsClass = 'md:grid-cols-3';
  if (columns === 4) gridColsClass = 'md:grid-cols-4';

  // Asymmetric layouts using col-span utilities
  if (columns === '66-33') {
    gridColsClass = 'md:grid-cols-3';
    const arr = React.Children.toArray(children);
    renderChildren = [
      arr[0] && React.isValidElement(arr[0])
        ? React.cloneElement(arr[0] as ReactElement<any, any>, {
            ...((arr[0] as ReactElement<any, any>).props || {}),
            className: mergeClassNames((arr[0] as ReactElement<any, any>).props.className, 'md:col-span-2'),
          })
        : arr[0],
      arr[1] && React.isValidElement(arr[1])
        ? React.cloneElement(arr[1] as ReactElement<any, any>, {
            ...((arr[1] as ReactElement<any, any>).props || {}),
            className: mergeClassNames((arr[1] as ReactElement<any, any>).props.className, 'md:col-span-1'),
          })
        : arr[1],
    ];
  }
  if (columns === '33-66') {
    gridColsClass = 'md:grid-cols-3';
    const arr = React.Children.toArray(children);
    renderChildren = [
      arr[0] && React.isValidElement(arr[0])
        ? React.cloneElement(arr[0] as ReactElement<any, any>, {
            ...((arr[0] as ReactElement<any, any>).props || {}),
            className: mergeClassNames((arr[0] as ReactElement<any, any>).props.className, 'md:col-span-1'),
          })
        : arr[0],
      arr[1] && React.isValidElement(arr[1])
        ? React.cloneElement(arr[1] as ReactElement<any, any>, {
            ...((arr[1] as ReactElement<any, any>).props || {}),
            className: mergeClassNames((arr[1] as ReactElement<any, any>).props.className, 'md:col-span-2'),
          })
        : arr[1],
    ];
  }
  if (columns === '25-50-25') {
    gridColsClass = 'md:grid-cols-4';
    const arr = React.Children.toArray(children);
    renderChildren = [
      arr[0] && React.isValidElement(arr[0])
        ? React.cloneElement(arr[0] as ReactElement<any, any>, {
            ...((arr[0] as ReactElement<any, any>).props || {}),
            className: mergeClassNames((arr[0] as ReactElement<any, any>).props.className, 'md:col-span-1'),
          })
        : arr[0],
      arr[1] && React.isValidElement(arr[1])
        ? React.cloneElement(arr[1] as ReactElement<any, any>, {
            ...((arr[1] as ReactElement<any, any>).props || {}),
            className: mergeClassNames((arr[1] as ReactElement<any, any>).props.className, 'md:col-span-2'),
          })
        : arr[1],
      arr[2] && React.isValidElement(arr[2])
        ? React.cloneElement(arr[2] as ReactElement<any, any>, {
            ...((arr[2] as ReactElement<any, any>).props || {}),
            className: mergeClassNames((arr[2] as ReactElement<any, any>).props.className, 'md:col-span-1'),
          })
        : arr[2],
    ];
  }

  const baseGridClass = 'grid grid-cols-1';
  const gapClass = `gap-${gap}`;

  const combined = [
    baseGridClass,
    gridColsClass,
    gapClass,
    className
  ].filter(Boolean).join(' ');

  return (
    <div id={id} className={combined} {...rest}>
      {renderChildren}
    </div>
  );
};

export default JuxtaposeLayout; 