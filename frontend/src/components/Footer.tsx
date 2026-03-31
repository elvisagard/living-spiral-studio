'use client';

import React from 'react';
import { cn, generateId } from '@/lib/utils';
import { JuxtaposeLayout } from './JuxtaposeLayout';
import { GridLayout } from './GridLayout';
import {
  StarIcon,
  XMarkIcon,
  LinkIcon,
  HeartIcon,
  CommandLineIcon,
  PaintBrushIcon,
  Squares2X2Icon
} from '@heroicons/react/24/outline';

interface FooterLink {
  label: string;
  href: string;
  isNew?: boolean;
}

interface FooterColumn {
  title: string;
  links: FooterLink[];
}

export interface FooterProps {
  className?: string;
  id?: string;
}

const footerData: FooterColumn[] = [
  {
    title: 'Product',
    links: [
      { label: 'Overview', href: '#' },
      { label: 'Features', href: '#' },
      { label: 'Solutions', href: '#', isNew: true },
      { label: 'Tutorials', href: '#' },
      { label: 'Pricing', href: '#' },
      { label: 'Releases', href: '#' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About us', href: '#' },
      { label: 'Careers', href: '#' },
      { label: 'Press', href: '#' },
      { label: 'News', href: '#' },
      { label: 'Media kit', href: '#' },
      { label: 'Contact', href: '#' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Blog', href: '#' },
      { label: 'Newsletter', href: '#' },
      { label: 'Events', href: '#' },
      { label: 'Help centre', href: '#' },
      { label: 'Tutorials', href: '#' },
      { label: 'Support', href: '#' },
    ],
  },
  {
    title: 'Social',
    links: [
      { label: 'Twitter', href: '#' },
      { label: 'LinkedIn', href: '#' },
      { label: 'Facebook', href: '#' },
      { label: 'GitHub', href: '#' },
      { label: 'AngelList', href: '#' },
      { label: 'Dribbble', href: '#' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Terms', href: '#' },
      { label: 'Privacy', href: '#' },
      { label: 'Cookies', href: '#' },
      { label: 'Licenses', href: '#' },
      { label: 'Settings', href: '#' },
      { label: 'Contact', href: '#' },
    ],
  },
];

const socialIcons = [
  { icon: XMarkIcon, href: '#', label: 'Twitter' },
  { icon: LinkIcon, href: '#', label: 'LinkedIn' },
  { icon: HeartIcon, href: '#', label: 'Facebook' },
  { icon: CommandLineIcon, href: '#', label: 'GitHub' },
  { icon: HeartIcon, href: '#', label: 'AngelList' },
  { icon: PaintBrushIcon, href: '#', label: 'Dribbble' },
  { icon: Squares2X2Icon, href: '#', label: 'Creative Platform' },
];

export function Footer({ className, id = generateId('footer') }: FooterProps) {
  return (
    <footer id={id} className={cn('bg-white text-gray-900', className)}>
      {/* Upper Section */}
      <div className="container mx-auto px-4 py-24">
        {/* Mobile Layout: Logo on top, 2-column grid below */}
        <div className="lg:hidden">
          {/* Logo Column - Full width on mobile */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <img 
                src="/next.svg" 
                alt="Next.js" 
                className="h-6 w-auto"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.nextElementSibling?.classList.remove('hidden');
                }}
              />
              <span className="text-xl font-bold text-gray-900 hidden">Next.js</span>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              Design amazing digital experiences that create more happy in the world.
            </p>
            <div className="bg-gray-50 rounded-lg p-3 inline-block">
              <div className="flex items-center space-x-1 mb-1">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>
              <div className="text-xs font-medium text-gray-900">Best Design Tool</div>
              <div className="text-xs text-gray-600">2,000+ reviews</div>
            </div>
          </div>

          {/* Navigation Columns - 2 columns on mobile */}
          <div className="grid grid-cols-2 gap-8">
            {footerData.map((column) => (
              <div key={column.title}>
                <h3 className="font-semibold text-gray-900 mb-4">{column.title}</h3>
                <ul className="space-y-3">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-gray-600 hover:text-gray-900 text-sm transition-colors duration-200 flex items-center space-x-2"
                      >
                        <span>{link.label}</span>
                        {link.isNew && (
                          <span className="bg-gray-100 text-gray-600 text-xs px-2 py-0.5 rounded-full">
                            New
                          </span>
                        )}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop Layout: All 6 columns in a single row */}
        <div className="hidden lg:grid lg:grid-cols-6 gap-8 lg:gap-12">
          {/* Logo Column */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img 
                src="/next.svg" 
                alt="Next.js" 
                className="h-6 w-auto"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.nextElementSibling?.classList.remove('hidden');
                }}
              />
              <span className="text-xl font-bold text-gray-900 hidden">Next.js</span>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              Design amazing digital experiences that create more happy in the world.
            </p>
            <div className="bg-gray-50 rounded-lg p-3 inline-block">
              <div className="flex items-center space-x-1 mb-1">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>
              <div className="text-xs font-medium text-gray-900">Best Design Tool</div>
              <div className="text-xs text-gray-600">2,000+ reviews</div>
            </div>
          </div>

          {/* Navigation Columns */}
          {footerData.map((column) => (
            <div key={column.title}>
              <h3 className="font-semibold text-gray-900 mb-4">{column.title}</h3>
              <ul className="space-y-3">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-gray-600 hover:text-gray-900 text-sm transition-colors duration-200 flex items-center space-x-2"
                    >
                      <span>{link.label}</span>
                      {link.isNew && (
                        <span className="bg-gray-100 text-gray-600 text-xs px-2 py-0.5 rounded-full">
                          New
                        </span>
                      )}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Lower Section */}
      <div className="border-t border-gray-200">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <div className="text-sm text-gray-600">
              © 2077 Untitled UI. All rights reserved.
            </div>
            <div className="flex items-center space-x-4">
              {socialIcons.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="text-gray-400 hover:text-gray-600 transition-colors duration-200"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 