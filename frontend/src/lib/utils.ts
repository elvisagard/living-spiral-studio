import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Generate a unique ID for component IDs (deterministic for SSR)
export function generateId(prefix: string = 'component'): string {
  // Use a simple hash of the prefix to ensure consistency
  let hash = 0;
  for (let i = 0; i < prefix.length; i++) {
    const char = prefix.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash; // Convert to 32-bit integer
  }
  return `${prefix}-${Math.abs(hash).toString(36)}`;
} 