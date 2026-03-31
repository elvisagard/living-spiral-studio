"use client";

import { Button } from './Button';

export const ButtonExamples = () => {
  return (
    <div className="space-y-8">
      {/* Basic Buttons */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Basic Buttons</h3>
        <div className="flex flex-wrap gap-4">
          <Button variant="neutral">Neutral</Button>
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="accent">Accent</Button>
          <Button variant="info">Info</Button>
          <Button variant="success">Success</Button>
          <Button variant="warning">Warning</Button>
          <Button variant="error">Error</Button>
        </div>
      </div>

      {/* Button Styles */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Button Styles</h3>
        <div className="flex flex-wrap gap-4">
          <Button variant="primary" style="outline">Outline</Button>
          <Button variant="primary" style="dash">Dash</Button>
          <Button variant="primary" style="soft">Soft</Button>
          <Button variant="primary" style="ghost">Ghost</Button>
          <Button variant="primary" style="link">Link</Button>
        </div>
      </div>

      {/* Button Sizes */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Button Sizes</h3>
        <div className="flex flex-wrap items-center gap-4">
          <Button variant="primary" size="xs">Extra Small</Button>
          <Button variant="primary" size="sm">Small</Button>
          <Button variant="primary" size="md">Medium</Button>
          <Button variant="primary" size="lg">Large</Button>
          <Button variant="primary" size="xl">Extra Large</Button>
        </div>
      </div>

      {/* Button Modifiers */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Button Modifiers</h3>
        <div className="flex flex-wrap gap-4">
          <Button variant="primary" wide>Wide Button</Button>
          <Button variant="secondary" square>🔲</Button>
          <Button variant="accent" circle>⭕</Button>
        </div>
        <div className="w-full">
          <Button variant="info" block>Full Width Button</Button>
        </div>
      </div>

      {/* Button States */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Button States</h3>
        <div className="flex flex-wrap gap-4">
          <Button variant="primary" disabled>Disabled</Button>
          <Button variant="success" loading>Loading</Button>
        </div>
      </div>

      {/* Complex Combinations */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Complex Combinations</h3>
        <div className="flex flex-wrap gap-4">
          <Button 
            variant="success" 
            style="outline" 
            size="lg" 
            wide
          >
            Large Wide Outline Success
          </Button>
          <Button 
            variant="warning" 
            style="ghost" 
            size="sm" 
            circle
          >
            ⚠️
          </Button>
          <Button 
            variant="error" 
            style="soft" 
            size="xl"
          >
            Extra Large Soft Error
          </Button>
        </div>
      </div>

      {/* Interactive Examples */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Interactive Examples</h3>
        <div className="flex flex-wrap gap-4">
          <Button 
            variant="primary" 
            onClick={() => alert('Primary button clicked!')}
          >
            Click Me
          </Button>
          <Button 
            variant="secondary" 
            style="outline"
            onClick={() => console.log('Secondary button clicked!')}
          >
            Console Log
          </Button>
        </div>
      </div>

      {/* Form Buttons */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Form Buttons</h3>
        <div className="flex flex-wrap gap-4">
          <Button variant="success" type="submit">
            Submit Form
          </Button>
          <Button variant="neutral" type="reset">
            Reset Form
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ButtonExamples; 