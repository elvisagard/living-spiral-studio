import React from 'react';
import { SectionContainer } from './SectionContainer';

export function SectionContainerExample() {
  return (
    <div className="space-y-8">
      {/* Default centered content */}
      <SectionContainer
        width="large"
        padding="medium"
        bgColor="neutral"
        className="min-h-[300px]"
      >
        <div className="text-center max-w-2xl">
          <h2 className="mb-4">Centered Content (Default)</h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            This content is automatically centered both vertically and horizontally by default.
          </p>
        </div>
      </SectionContainer>

      {/* Disabled centering */}
      <SectionContainer
        width="large"
        padding="medium"
        bgColor="primary"
        centerContent={false}
        className="min-h-[300px]"
      >
        <div className="text-left max-w-2xl">
          <h2 className="mb-4 text-primary-content">Left-Aligned Content</h2>
          <p className="text-lg text-primary-content/80">
            This content is left-aligned because centering was disabled with centerContent={false}.
          </p>
        </div>
      </SectionContainer>

      {/* Background image with overlay */}
      <SectionContainer
        width="full"
        padding="large"
        bgImage="/images/hero-bg.jpg"
        bgOverlay={30}
        overlayType="dark"
        className="min-h-[400px]"
      >
        <div className="text-center text-white max-w-3xl">
          <h2 className="mb-6">Background Image with Overlay</h2>
          <p className="text-xl mb-8">
            This section demonstrates background images with overlays while maintaining automatic centering.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn btn-primary btn-lg">
              Get Started
            </button>
            <button className="btn btn-outline btn-lg text-white border-white hover:bg-white hover:text-gray-900">
              Learn More
            </button>
          </div>
        </div>
      </SectionContainer>

      {/* Gradient background */}
      <SectionContainer
        width="large"
        padding="large"
        bgGradient="bg-gradient-to-r from-blue-500 to-purple-600"
        className="min-h-[300px]"
      >
        <div className="text-center text-white max-w-2xl">
          <h2 className="mb-4">Gradient Background</h2>
          <p className="text-lg text-white/90">
            This section uses a gradient background with automatic content centering.
          </p>
        </div>
      </SectionContainer>

      {/* Gradient to transparent with bottom alignment */}
      <SectionContainer
        width="full"
        padding="large"
        bgImage="/images/hero-bg.jpg"
        centerContent={false}
        className="min-h-[500px] relative bg-gradient-to-b from-primary via-primary/80 to-transparent"
      >
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
          <div className="text-center mx-auto text-white max-w-4xl">
            <h2 className="mb-6 text-white">
              Gradient to Transparent with Bottom Alignment
            </h2>
            <p className="font-cormorant text-xl mb-8">
              This section demonstrates a beautiful gradient that fades from blue to purple and then 
              becomes transparent. The content is positioned at the bottom of the container.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn btn-primary btn-lg">
                Explore Features
              </button>
              <button className="btn btn-outline btn-lg text-white border-white hover:bg-white hover:text-gray-900">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </SectionContainer>
    </div>
  );
} 