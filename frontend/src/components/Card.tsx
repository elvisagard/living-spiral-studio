"use client";

import React from 'react';
import { cn, generateId } from '@/lib/utils';

// Card layout types
export type CardOrientation = 'vertical' | 'horizontal' | 'left-right' | 'right-left';
export type CardWidth = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full';
export type CardHeight = 'auto' | 'sm' | 'md' | 'lg' | 'xl' | 'full';
export type CardShadow = 'none' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
export type CardBorder = 'none' | 'sm' | 'md' | 'lg';
export type CardRadius = 'none' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full';

// Badge types
export type BadgeVariant = 'primary' | 'secondary' | 'accent' | 'info' | 'success' | 'warning' | 'error' | 'neutral';
export type BadgeSize = 'xs' | 'sm' | 'md' | 'lg';

// Media types
export type MediaAspectRatio = 'square' | 'video' | 'auto' | 'portrait' | 'landscape';

// Badge position types
export type BadgePosition = 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';

// Main Card Layout Component
export interface CardLayoutProps {
  children: React.ReactNode;
  orientation?: CardOrientation;
  width?: CardWidth;
  height?: CardHeight;
  shadow?: CardShadow;
  border?: CardBorder;
  radius?: CardRadius;
  responsive?: boolean;
  hover?: boolean;
  interactive?: boolean;
  className?: string;
  id?: string;
}

export const CardLayout: React.FC<CardLayoutProps> = ({
  children,
  orientation = 'vertical',
  width = 'md',
  height = 'auto',
  shadow = 'md',
  border = 'sm',
  radius = 'lg',
  responsive = true,
  hover = false,
  interactive = false,
  className = '',
  id = generateId('card-layout'),
  ...rest
}) => {
  const widthClasses: Record<CardWidth, string> = {
    xs: 'w-48',
    sm: 'w-64',
    md: 'w-80',
    lg: 'w-96',
    xl: 'w-[28rem]',
    '2xl': 'w-[32rem]',
    full: 'w-full',
  };

  const heightClasses: Record<CardHeight, string> = {
    auto: 'h-auto',
    sm: 'h-48',
    md: 'h-64',
    lg: 'h-80',
    xl: 'h-96',
    full: 'h-full',
  };

  const shadowClasses: Record<CardShadow, string> = {
    none: '',
    sm: 'shadow-sm',
    md: 'shadow-md',
    lg: 'shadow-lg',
    xl: 'shadow-xl',
    '2xl': 'shadow-2xl',
  };

  const borderClasses: Record<CardBorder, string> = {
    none: '',
    sm: 'border border-base-300',
    md: 'border-2 border-base-300',
    lg: 'border-4 border-base-300',
  };

  const radiusClasses: Record<CardRadius, string> = {
    none: '',
    sm: 'rounded-sm',
    md: 'rounded-md',
    lg: 'rounded-lg',
    xl: 'rounded-xl',
    '2xl': 'rounded-2xl',
    full: 'rounded-full',
  };

  const orientationClasses: Record<CardOrientation, string> = {
    vertical: 'flex flex-col',
    horizontal: 'flex flex-col md:flex-row',
    'left-right': 'flex flex-col md:flex-row',
    'right-left': 'flex flex-col md:flex-row-reverse',
  };

  const cardClasses = cn(
    'bg-base-100',
    widthClasses[width],
    heightClasses[height],
    shadowClasses[shadow],
    borderClasses[border],
    radiusClasses[radius],
    orientationClasses[orientation],
    responsive && 'transition-all duration-200',
    hover && 'hover:shadow-lg hover:-translate-y-1',
    interactive && 'cursor-pointer',
    className
  );

  return (
    <div
      id={id}
      className={cardClasses}
      {...rest}
    >
      {children}
    </div>
  );
};

// Card Header Component
export interface CardHeaderProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export const CardHeader: React.FC<CardHeaderProps> = ({
  children,
  className = '',
  id = generateId('card-header'),
  ...rest
}) => {
  return (
    <div
      id={id}
      className={cn(
        'p-4 pb-2',
        'border-b border-base-300',
        className
      )}
      {...rest}
    >
      {children}
    </div>
  );
};

// Card Badge Component
export interface CardBadgeProps {
  children: React.ReactNode;
  variant?: BadgeVariant;
  size?: BadgeSize;
  className?: string;
  id?: string;
}

export const CardBadge: React.FC<CardBadgeProps> = ({
  children,
  variant = 'primary',
  size = 'sm',
  className = '',
  id = generateId('card-badge'),
  ...rest
}) => {
  const variantClasses: Record<BadgeVariant, string> = {
    primary: 'badge-primary text-primary-content',
    secondary: 'badge-secondary text-secondary-content',
    accent: 'badge-accent text-accent-content',
    info: 'badge-info text-info-content',
    success: 'badge-success text-success-content',
    warning: 'badge-warning text-warning-content',
    error: 'badge-error text-error-content',
    neutral: 'badge-neutral text-neutral-content',
  };

  const sizeClasses: Record<BadgeSize, string> = {
    xs: 'badge-xs',
    sm: 'badge-sm',
    md: 'badge-md',
    lg: 'badge-lg',
  };

  return (
    <div
      id={id}
      className={cn(
        'badge',
        variantClasses[variant],
        sizeClasses[size],
        className
      )}
      {...rest}
    >
      {children}
    </div>
  );
};

// Card Media Component
export interface CardMediaProps {
  children: React.ReactNode;
  aspectRatio?: MediaAspectRatio;
  className?: string;
  id?: string;
}

export const CardMedia: React.FC<CardMediaProps> = ({
  children,
  aspectRatio = 'auto',
  className = '',
  id = generateId('card-media'),
  ...rest
}) => {
  const aspectRatioClasses: Record<MediaAspectRatio, string> = {
    square: 'aspect-square',
    video: 'aspect-video',
    auto: 'aspect-auto',
    portrait: 'aspect-[3/4]',
    landscape: 'aspect-[4/3]',
  };

  return (
    <div
      id={id}
      className={cn(
        'relative overflow-hidden',
        aspectRatioClasses[aspectRatio],
        className
      )}
      {...rest}
    >
      {children}
    </div>
  );
};

// Card Body Component
export interface CardBodyProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export const CardBody: React.FC<CardBodyProps> = ({
  children,
  className = '',
  id = generateId('card-body'),
  ...rest
}) => {
  return (
    <div
      id={id}
      className={cn(
        'p-4',
        'flex-1',
        className
      )}
      {...rest}
    >
      {children}
    </div>
  );
};

// Card Media Badge Component
export interface CardMediaBadgeProps {
  children: React.ReactNode;
  position?: BadgePosition;
  variant?: BadgeVariant;
  size?: BadgeSize;
  className?: string;
  id?: string;
}

export const CardMediaBadge: React.FC<CardMediaBadgeProps> = ({
  children,
  position = 'top-right',
  variant = 'primary',
  size = 'sm',
  className = '',
  id = generateId('card-media-badge'),
  ...rest
}) => {
  const positionClasses: Record<BadgePosition, string> = {
    'top-left': 'absolute top-2 left-2',
    'top-right': 'absolute top-2 right-2',
    'bottom-left': 'absolute bottom-2 left-2',
    'bottom-right': 'absolute bottom-2 right-2',
  };

  const variantClasses: Record<BadgeVariant, string> = {
    primary: 'badge-primary text-primary-content',
    secondary: 'badge-secondary text-secondary-content',
    accent: 'badge-accent text-accent-content',
    info: 'badge-info text-info-content',
    success: 'badge-success text-success-content',
    warning: 'badge-warning text-warning-content',
    error: 'badge-error text-error-content',
    neutral: 'badge-neutral text-neutral-content',
  };

  const sizeClasses: Record<BadgeSize, string> = {
    xs: 'badge-xs',
    sm: 'badge-sm',
    md: 'badge-md',
    lg: 'badge-lg',
  };

  return (
    <div
      id={id}
      className={cn(
        'badge',
        positionClasses[position],
        variantClasses[variant],
        sizeClasses[size],
        'z-10',
        className
      )}
      {...rest}
    >
      {children}
    </div>
  );
};

// Card Footer Component
export interface CardFooterProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export const CardFooter: React.FC<CardFooterProps> = ({
  children,
  className = '',
  id = generateId('card-footer'),
  ...rest
}) => {
  return (
    <div
      id={id}
      className={cn(
        'p-4 pt-2',
        'border-t border-base-300',
        'flex items-center justify-between',
        className
      )}
      {...rest}
    >
      {children}
    </div>
  );
};

// Export all components
export const Card = {
  Layout: CardLayout,
  Header: CardHeader,
  Badge: CardBadge,
  MediaBadge: CardMediaBadge,
  Media: CardMedia,
  Body: CardBody,
  Footer: CardFooter,
};

export default Card; 