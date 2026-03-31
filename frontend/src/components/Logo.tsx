import React from 'react';
import { cn, generateId } from '@/lib/utils';

export interface LogoProps {
  className?: string;
  showText?: boolean;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'default' | 'white';
  id?: string;
}

export function Logo({ 
  className, 
  showText = true, 
  size = 'md',
  variant = 'default',
  id = generateId('logo')
}: LogoProps) {
  const sizeClasses = {
    sm: 'w-6 h-6',
    md: 'w-8 h-8',
    lg: 'w-10 h-10'
  };

  const textSizes = {
    sm: 'text-sm',
    md: 'text-lg',
    lg: 'text-xl'
  };

  const logoIcon = (
    <div className={cn(
      'bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center',
      sizeClasses[size]
    )}>
      <span className={cn(
        'font-bold text-white',
        size === 'sm' ? 'text-xs' : size === 'md' ? 'text-sm' : 'text-base'
      )}>
        U
      </span>
    </div>
  );

  if (!showText) {
    return <div id={id} className={cn('inline-block', className)}>{logoIcon}</div>;
  }

  return (
    <div id={id} className={cn('flex items-center space-x-2', className)}>
      {logoIcon}
      <span className={cn(
        'font-bold',
        textSizes[size],
        variant === 'white' ? 'text-white' : 'text-gray-900'
      )}>
        Untitled UI
      </span>
    </div>
  );
} 