import { CardExamples } from '@/components/CardExamples';

export default function CardsPage() {
  return (
    <div className="min-h-screen bg-base-200">
      <div className="container mx-auto py-8">
        <h1 className="text-4xl font-bold text-center mb-8">Card Component System</h1>
        <p className="text-center text-base-content/70 mb-12 max-w-2xl mx-auto">
          Master card components that provide comprehensive layout control, responsive behavior, 
          and flexible composition for future applications.
        </p>
        <CardExamples />
      </div>
    </div>
  );
} 