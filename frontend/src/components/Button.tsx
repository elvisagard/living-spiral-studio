"use client";

import React from 'react';
import { generateId } from '@/lib/utils';

// Button variant types
type ButtonVariant = 'neutral' | 'primary' | 'secondary' | 'accent' | 'info' | 'success' | 'warning' | 'error';
type ButtonStyle = 'outline' | 'dash' | 'soft' | 'ghost' | 'link';
type ButtonSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
type ButtonType = 'button' | 'submit' | 'reset';

// Button props interface
export interface ButtonProps {
  // Core button properties
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  loading?: boolean;
  
  // DaisyUI variants
  variant?: ButtonVariant;
  style?: ButtonStyle;
  size?: ButtonSize;
  
  // Modifiers
  wide?: boolean;
  block?: boolean;
  square?: boolean;
  circle?: boolean;
  
  // Additional props
  className?: string;
  type?: ButtonType;
  id?: string;
  name?: string;
  value?: string;
  form?: string;
}

// Button component
export const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  disabled = false,
  loading = false,
  variant,
  style,
  size = 'md',
  wide = false,
  block = false,
  square = false,
  circle = false,
  className = '',
  type = 'button',
  id = generateId('button'),
  name,
  value,
  form,
  ...rest
}) => {
  // Build DaisyUI classes dynamically
  const buildButtonClasses = (): string => {
    const classes = ['btn'];
    
    // Add variant
    if (variant) {
      classes.push(`btn-${variant}`);
    }
    
    // Add style
    if (style) {
      classes.push(`btn-${style}`);
    }
    
    // Add size (only if not default 'md')
    if (size && size !== 'md') {
      classes.push(`btn-${size}`);
    }
    
    // Add modifiers
    if (wide) classes.push('btn-wide');
    if (block) classes.push('btn-block');
    if (square) classes.push('btn-square');
    if (circle) classes.push('btn-circle');
    
    // Add behavior states
    if (disabled) classes.push('btn-disabled');
    if (loading) classes.push('loading');
    
    // Add custom className
    if (className) {
      classes.push(className);
    }
    
    return classes.join(' ');
  };

  return (
    <button
      className={buildButtonClasses()}
      onClick={onClick}
      disabled={disabled || loading}
      type={type}
      id={id}
      name={name}
      value={value}
      form={form}
      {...rest}
    >
      {children}
    </button>
  );
};

// Export default for convenience
export default Button; 