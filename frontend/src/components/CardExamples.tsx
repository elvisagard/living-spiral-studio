"use client";

import React from 'react';
import { Card, CardLayout, CardHeader, CardBadge, CardMedia, CardBody, CardFooter } from './Card';
import { Button } from './Button';

/**
 * CardExamples
 * 
 * Demonstrates the master card component system with various configurations:
 * - Different orientations (vertical/horizontal)
 * - Various sizes and styles
 * - Different card types (product, article, profile, etc.)
 * - Responsive behavior
 * - Interactive states
 */
export const CardExamples: React.FC = () => {
  return (
    <div className="space-y-12 p-8">
      {/* Section 1: Basic Card Types */}
      <section>
        <h2 className="text-2xl font-bold mb-6">Basic Card Types</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Simple Card */}
          <CardLayout>
            <CardHeader>
              <h3 className="text-lg font-semibold">Simple Card</h3>
            </CardHeader>
            <CardBody>
              <p className="text-base-content/70">
                A basic card with header and body content.
              </p>
            </CardBody>
          </CardLayout>

          {/* Card with Badge */}
          <CardLayout>
            <CardHeader>
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold">Card with Badge</h3>
                <CardBadge variant="primary">New</CardBadge>
              </div>
            </CardHeader>
            <CardBody>
              <p className="text-base-content/70">
                This card includes a badge component.
              </p>
            </CardBody>
          </CardLayout>

          {/* Card with Media */}
          <CardLayout>
            <CardMedia aspectRatio="video">
              <img 
                src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=225&fit=crop" 
                alt="Mountain landscape"
                className="w-full h-full object-cover"
              />
            </CardMedia>
            <CardBody>
              <h3 className="text-lg font-semibold mb-2">Card with Media</h3>
              <p className="text-base-content/70">
                Features an image with video aspect ratio.
              </p>
            </CardBody>
          </CardLayout>

          {/* Complete Card */}
          <CardLayout>
            <CardHeader>
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold">Complete Card</h3>
                <CardBadge variant="success">Featured</CardBadge>
              </div>
            </CardHeader>
            <CardMedia aspectRatio="square">
              <img 
                src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=400&fit=crop" 
                alt="Forest"
                className="w-full h-full object-cover"
              />
            </CardMedia>
            <CardBody>
              <p className="text-base-content/70 mb-4">
                A complete card with header, media, body, and footer.
              </p>
              <div className="flex gap-2">
                <CardBadge variant="info" size="sm">Nature</CardBadge>
                <CardBadge variant="secondary" size="sm">Outdoor</CardBadge>
              </div>
            </CardBody>
            <CardFooter>
              <Button size="sm" variant="primary">Learn More</Button>
              <Button size="sm" style="ghost">Share</Button>
            </CardFooter>
          </CardLayout>
        </div>
      </section>

      {/* Section 2: Orientation Examples */}
      <section>
        <h2 className="text-2xl font-bold mb-6">Orientation Examples</h2>
        <div className="space-y-6">
          
          {/* Vertical Card */}
          <CardLayout orientation="vertical" width="lg">
            <CardHeader>
              <h3 className="text-xl font-semibold">Vertical Orientation</h3>
            </CardHeader>
            <CardMedia aspectRatio="video">
              <img 
                src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=338&fit=crop" 
                alt="Mountain landscape"
                className="w-full h-full object-cover"
              />
            </CardMedia>
            <CardBody>
              <p className="text-base-content/70">
                This card uses vertical orientation (default). Content flows from top to bottom.
              </p>
            </CardBody>
            <CardFooter>
              <Button variant="primary">Action</Button>
            </CardFooter>
          </CardLayout>

          {/* Horizontal Card */}
          <CardLayout orientation="horizontal" width="xl">
            <CardMedia aspectRatio="square" className="md:w-48">
              <img 
                src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=300&h=300&fit=crop" 
                alt="Forest"
                className="w-full h-full object-cover"
              />
            </CardMedia>
            <div className="flex flex-col flex-1">
              <CardHeader>
                <h3 className="text-xl font-semibold">Horizontal Orientation</h3>
              </CardHeader>
              <CardBody>
                <p className="text-base-content/70">
                  This card uses horizontal orientation. On mobile it stacks vertically, 
                  on desktop it displays side by side.
                </p>
              </CardBody>
              <CardFooter>
                <Button variant="primary">Action</Button>
              </CardFooter>
            </div>
          </CardLayout>
        </div>
      </section>

      {/* Section 3: Size and Style Variations */}
      <section>
        <h2 className="text-2xl font-bold mb-6">Size and Style Variations</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Small Card */}
          <CardLayout width="sm" shadow="sm" border="sm">
            <CardBody>
              <h4 className="font-semibold mb-2">Small Card</h4>
              <p className="text-sm text-base-content/70">Compact design</p>
            </CardBody>
          </CardLayout>

          {/* Medium Card */}
          <CardLayout width="md" shadow="md" border="md">
            <CardBody>
              <h4 className="font-semibold mb-2">Medium Card</h4>
              <p className="text-base-content/70">Standard size</p>
            </CardBody>
          </CardLayout>

          {/* Large Card */}
          <CardLayout width="lg" shadow="lg" border="lg">
            <CardBody>
              <h4 className="font-semibold mb-2">Large Card</h4>
              <p className="text-base-content/70">Prominent display</p>
            </CardBody>
          </CardLayout>

          {/* Extra Large Card */}
          <CardLayout width="xl" shadow="xl" radius="xl">
            <CardBody>
              <h4 className="font-semibold mb-2">Extra Large</h4>
              <p className="text-base-content/70">Maximum impact</p>
            </CardBody>
          </CardLayout>
        </div>
      </section>

      {/* Section 4: Interactive Cards */}
      <section>
        <h2 className="text-2xl font-bold mb-6">Interactive Cards</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Hover Card */}
          <CardLayout hover interactive>
            <CardMedia aspectRatio="video">
              <img 
                src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=225&fit=crop" 
                alt="Mountain landscape"
                className="w-full h-full object-cover"
              />
            </CardMedia>
            <CardBody>
              <h3 className="text-lg font-semibold mb-2">Hover Effect</h3>
              <p className="text-base-content/70">
                This card has hover animations and is interactive.
              </p>
            </CardBody>
          </CardLayout>

          {/* Interactive Card */}
          <CardLayout interactive shadow="lg">
            <CardHeader>
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold">Interactive</h3>
                <CardBadge variant="warning">Clickable</CardBadge>
              </div>
            </CardHeader>
            <CardBody>
              <p className="text-base-content/70">
                This card shows cursor pointer and can handle click events.
              </p>
            </CardBody>
          </CardLayout>

          {/* Responsive Card */}
          <CardLayout responsive hover>
            <CardMedia aspectRatio="portrait">
              <img 
                src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=300&h=400&fit=crop" 
                alt="Forest"
                className="w-full h-full object-cover"
              />
            </CardMedia>
            <CardBody>
              <h3 className="text-lg font-semibold mb-2">Responsive</h3>
              <p className="text-base-content/70">
                Smooth transitions and responsive behavior.
              </p>
            </CardBody>
          </CardLayout>
        </div>
      </section>

      {/* Section 5: Badge Variations */}
      <section>
        <h2 className="text-2xl font-bold mb-6">Badge Variations</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {(['primary', 'secondary', 'accent', 'info', 'success', 'warning', 'error', 'neutral'] as const).map((variant) => (
            <CardLayout key={variant} width="sm">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <h4 className="font-semibold capitalize">{variant}</h4>
                  <CardBadge variant={variant}>{variant}</CardBadge>
                </div>
              </CardHeader>
              <CardBody>
                <p className="text-sm text-base-content/70">
                  Badge variant: {variant}
                </p>
              </CardBody>
            </CardLayout>
          ))}
        </div>
      </section>

      {/* Section 6: Media Aspect Ratios */}
      <section>
        <h2 className="text-2xl font-bold mb-6">Media Aspect Ratios</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {(['square', 'video', 'portrait', 'landscape'] as const).map((ratio) => (
            <CardLayout key={ratio} width="md">
              <CardMedia aspectRatio={ratio}>
                <img 
                  src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=400&fit=crop" 
                  alt={`${ratio} aspect ratio`}
                  className="w-full h-full object-cover"
                />
              </CardMedia>
              <CardBody>
                <h4 className="font-semibold mb-2 capitalize">{ratio} Ratio</h4>
                <p className="text-sm text-base-content/70">
                  Aspect ratio: {ratio}
                </p>
              </CardBody>
            </CardLayout>
          ))}
        </div>
      </section>
    </div>
  );
};

export default CardExamples; 