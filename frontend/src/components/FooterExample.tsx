import React from 'react';
import { SectionContainer } from './SectionContainer';
import { Footer } from './Footer';

export function FooterExample() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Main content area */}
      <div className="py-20">
        <SectionContainer width="large" padding="large">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Your Website Content
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              This is where your main content would go. The footer below demonstrates how it works with proper responsive design.
            </p>
          </div>
        </SectionContainer>
      </div>

      {/* Footer - now handles its own layout internally */}
      <Footer />
    </div>
  );
} 