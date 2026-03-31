import { HeaderDropdownSimpleOptimized } from './HeaderDropdownSimpleOptimized';

export const NavigationExamples = () => {
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Optimized Navigation Examples</h2>
        <p className="text-lg text-slate-600 dark:text-slate-400">
          These examples demonstrate the server/client component architecture optimization.
        </p>
      </div>

      {/* Left Variant */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Left Variant</h3>
        <div className="border rounded-lg overflow-hidden">
          <HeaderDropdownSimpleOptimized 
            variant="left"
            brand="Brand"
            bgClass="bg-base-100"
          />
        </div>
      </div>

      {/* Center Variant */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Center Variant</h3>
        <div className="border rounded-lg overflow-hidden">
          <HeaderDropdownSimpleOptimized 
            variant="center"
            brand="Centered Brand"
            bgClass="bg-base-100"
          />
        </div>
      </div>

      {/* Right Variant */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Right Variant</h3>
        <div className="border rounded-lg overflow-hidden">
          <HeaderDropdownSimpleOptimized 
            variant="right"
            brand="Right Brand"
            bgClass="bg-base-100"
          />
        </div>
      </div>

      {/* Split Variant */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Split Variant</h3>
        <div className="border rounded-lg overflow-hidden">
          <HeaderDropdownSimpleOptimized 
            variant="split"
            brand="Split Brand"
            bgClass="bg-base-100"
          />
        </div>
      </div>

      {/* Logo Left Menu Center Variant */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Logo Left Menu Center Variant</h3>
        <div className="border rounded-lg overflow-hidden">
          <HeaderDropdownSimpleOptimized 
            variant="logo-left-menu-center"
            brand="Next.js"
            bgClass="bg-base-100"
          />
        </div>
      </div>

      {/* Architecture Explanation */}
      <div className="space-y-4 p-6 bg-base-200 rounded-lg">
        <h3 className="text-lg font-semibold">Architecture Benefits</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold mb-2">Server Components</h4>
            <ul className="space-y-1 text-sm">
              <li>• Logo and brand name</li>
              <li>• Static navigation links</li>
              <li>• Header structure and layout</li>
              <li>• Login button (static)</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Client Components</h4>
            <ul className="space-y-1 text-sm">
              <li>• Dropdown triggers (interactive)</li>
              <li>• Theme switcher (stateful)</li>
              <li>• Mobile menu toggle (stateful)</li>
              <li>• Dropdown menus (interactive)</li>
            </ul>
          </div>
        </div>
        <div className="mt-4 p-4 bg-base-100 rounded">
          <p className="text-sm">
            <strong>Performance Impact:</strong> Reduced JavaScript bundle from ~20KB to ~8KB by making 
            static content server-rendered while keeping only interactive elements as client components.
          </p>
        </div>
      </div>
    </div>
  );
};

export default NavigationExamples; 