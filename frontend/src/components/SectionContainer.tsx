import React from 'react';
import { cn, generateId } from '@/lib/utils';

export type SectionWidth = 'full' | 'large' | 'small';
export type SectionPadding = 'large' | 'medium' | 'small' | 'none';
export type SectionMargin = 'large' | 'medium' | 'small' | 'none';
export type SectionBgColor = 'neutral' | 'primary' | 'secondary' | 'custom';
export type OverlayType = 'dark' | 'light';

interface SectionContainerProps {
  children: React.ReactNode;
  width?: SectionWidth;
  padding?: SectionPadding;
  margin?: SectionMargin;
  bgColor?: SectionBgColor;
  bgGradient?: string;
  bgImage?: string;
  bgOverlay?: number; // 0-100 for opacity percentage
  overlayType?: OverlayType;
  centerContent?: boolean; // Default to true for centering
  className?: string;
  id?: string;
}

const widthClasses: Record<SectionWidth, string> = {
  full: 'w-full',
  large: 'max-w-7xl',
  small: 'max-w-4xl',
};

const paddingClasses: Record<SectionPadding, string> = {
  large: 'px-8 py-24 md:px-12 md:py-32',
  medium: 'px-6 py-16 md:px-8 md:py-24',
  small: 'px-4 py-12 md:px-6 md:py-16',
  none: '',
};

const marginClasses: Record<SectionMargin, string> = {
  large: 'my-16 md:my-24',
  medium: 'my-12 md:my-16',
  small: 'my-8 md:my-12',
  none: '',
};

const bgColorClasses: Record<SectionBgColor, string> = {
  neutral: 'bg-base-100',
  primary: 'bg-primary text-primary-content',
  secondary: 'bg-secondary text-secondary-content',
  custom: '',
};

export function SectionContainer({
  children,
  width = 'large',
  padding = 'medium',
  margin = 'none',
  bgColor = 'neutral',
  bgGradient,
  bgImage,
  bgOverlay,
  overlayType = 'dark',
  centerContent = true,
  className,
  id = generateId('section-container'),
}: SectionContainerProps) {
  const containerClasses = cn(
    'mx-auto',
    widthClasses[width],
    paddingClasses[padding],
    marginClasses[margin],
    bgColor !== 'custom' && bgColorClasses[bgColor],
    bgGradient,
    bgImage && 'relative bg-cover bg-center bg-no-repeat',
    centerContent && 'flex items-center justify-center',
    className
  );

  // Convert percentage to Tailwind opacity scale (0-100 to 0-100)
  // Provide more granular control with smaller increments
  const getOpacityClass = (overlay: number) => {
    // Map percentage to Tailwind opacity classes with finer granularity
    if (overlay <= 5) return 'opacity-5';
    if (overlay <= 10) return 'opacity-10';
    if (overlay <= 15) return 'opacity-15';
    if (overlay <= 20) return 'opacity-20';
    if (overlay <= 25) return 'opacity-25';
    if (overlay <= 30) return 'opacity-30';
    if (overlay <= 35) return 'opacity-35';
    if (overlay <= 40) return 'opacity-40';
    if (overlay <= 45) return 'opacity-45';
    if (overlay <= 50) return 'opacity-50';
    if (overlay <= 55) return 'opacity-55';
    if (overlay <= 60) return 'opacity-60';
    if (overlay <= 65) return 'opacity-65';
    if (overlay <= 70) return 'opacity-70';
    if (overlay <= 75) return 'opacity-75';
    if (overlay <= 80) return 'opacity-80';
    if (overlay <= 85) return 'opacity-85';
    if (overlay <= 90) return 'opacity-90';
    if (overlay <= 95) return 'opacity-95';
    return 'opacity-100';
  };

  const overlayClasses = cn(
    'absolute inset-0',
    overlayType === 'dark' ? 'bg-black' : 'bg-white',
    bgOverlay ? getOpacityClass(bgOverlay) : 'opacity-25'
  );

  return (
    <section 
      id={id} 
      className={containerClasses}
      style={bgImage ? { backgroundImage: `url(${bgImage})` } : undefined}
    >
      {bgImage && bgOverlay && (
        <div className={overlayClasses}></div>
      )}
      <div className={cn(
        bgImage && bgOverlay ? 'relative z-10' : '',
        centerContent && 'w-full'
      )}>
        {children}
      </div>
    </section>
  );
} 