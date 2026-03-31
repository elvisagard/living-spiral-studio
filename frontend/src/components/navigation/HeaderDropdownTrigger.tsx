"use client";

import { useState } from 'react';
import { DropdownMenuSimple } from './DropdownMenuSimple';

interface HeaderDropdownTriggerProps {
  label: string;
  href: string;
}

export const HeaderDropdownTrigger: React.FC<HeaderDropdownTriggerProps> = ({ label, href }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [hoverTimeout, setHoverTimeout] = useState<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    if (hoverTimeout) {
      clearTimeout(hoverTimeout);
      setHoverTimeout(null);
    }
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    const timeout = setTimeout(() => {
      setIsOpen(false);
    }, 150); // 150ms delay before closing
    setHoverTimeout(timeout);
  };

  return (
    <div
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button 
        className="flex items-center gap-2 px-3 py-2 text-base-content hover:text-primary transition-colors duration-200 font-medium"
      >
        {label}
        <svg 
          className={`w-4 h-4 transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`} 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {isOpen && (
        <div 
          className="absolute top-full w-xs left-0 mt-2 z-50"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <DropdownMenuSimple />
        </div>
      )}
    </div>
  );
}; 