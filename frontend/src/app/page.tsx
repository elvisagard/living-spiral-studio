import { HeaderDropdownSimpleOptimized } from '@/components/navigation/HeaderDropdownSimpleOptimized';
import { SectionContainer } from '@/components/SectionContainer';
import { Button } from '@/components/Button';
import { Footer } from '@/components/Footer';
import { CardLayout as Card, CardHeader, CardBody, CardFooter } from '@/components/Card';
import { GridLayout } from '@/components/GridLayout';

export default function Home() {
  return (
    <main className="min-h-screen bg-linear-to-br from-base-100 to-base-200">
      {/* Navigation Header */}
      <HeaderDropdownSimpleOptimized 
        variant="logo-left-menu-center" 
        brand="Agard Base" 
        bgClass="bg-base-100 border-b border-base-300"
      />

      {/* Hero Section */}
      <SectionContainer
        width="full"
        padding="large"
        bgColor="neutral"
        className="bg-linear-to-b from-[#F0F3F5] to-[#D5DEE8] to-50% dark:from-blue-950 dark:to-indigo-900"
      >
        <div className="text-center mx-auto max-w-4xl">
          <h1 className="mb-6">
            Welcome to Agard Base
          </h1>
          <p className="subheading">
            A comprehensive design system and component library for modern web applications
          </p>
          <p className="text-lg text-slate-600 dark:text-slate-400 mb-12 max-w-2xl mx-auto">
            Built with Next.js, TypeScript, and Tailwind CSS. Featuring a carefully crafted typography system, 
            responsive layouts, and beautiful components ready for production use.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="primary" size="lg">
              View Previews
            </Button>
            <Button variant="primary" style="outline" size="lg">
              Get Started
            </Button>
          </div>
        </div>
      </SectionContainer>

      {/* Features Section */}
      <SectionContainer
        width="large"
        padding="medium"
        bgColor="neutral"
      >
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-8 text-center">
            What's Included
          </h2>
          <p className="font-cormorant text-xl text-slate-600 dark:text-slate-300 mb-12 text-center">
            Everything you need to build beautiful, responsive web applications
          </p>
          
          <GridLayout columns={3} gap={8}>
            {/* Typography System */}
            <Card width="md" hover>
              <CardHeader>
                <h3 className="text-lg font-semibold">Typography System</h3>
              </CardHeader>
              <CardBody>
                <p className="text-base-content/70">
                  Carefully crafted font combinations with Montserrat for headings, Cormorant for subheadings, 
                  and Mulish for body text. Perfect hierarchy and readability.
                </p>
              </CardBody>
              <CardFooter>
                <Button size="sm" variant="primary">Learn More</Button>
              </CardFooter>
            </Card>

            {/* Component Library */}
            <Card width="md" hover>
              <CardHeader>
                <h3 className="text-lg font-semibold">Component Library</h3>
              </CardHeader>
              <CardBody>
                <p className="text-base-content/70">
                  Comprehensive set of reusable components including buttons, cards, layouts, and navigation. 
                  All built with accessibility and responsiveness in mind.
                </p>
              </CardBody>
                             <CardFooter>
                 <Button size="sm" variant="primary">View Previews</Button>
               </CardFooter>
            </Card>

            {/* Layout System */}
            <Card width="md" hover>
              <CardHeader>
                <h3 className="text-lg font-semibold">Layout System</h3>
              </CardHeader>
              <CardBody>
                <p className="text-base-content/70">
                  Flexible layout components for grids, sidebars, lists, and more. Easy to customize and 
                  perfect for any content structure.
                </p>
              </CardBody>
              <CardFooter>
                <Button size="sm" variant="primary">Explore Layouts</Button>
              </CardFooter>
            </Card>
          </GridLayout>
        </div>
      </SectionContainer>

      {/* Quick Preview Section */}
      <SectionContainer
        width="large"
        padding="medium"
        bgColor="neutral"
      >
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-8 text-center">
            Quick Preview
          </h2>
          <p className="font-cormorant text-xl text-slate-600 dark:text-slate-300 mb-12 text-center">
            See our components in action with interactive examples
          </p>
          
          <div className="text-center">
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-8">
              Our comprehensive preview page showcases all components, layouts, and design patterns 
              available in the Agard Base design system.
            </p>
                         <Button variant="primary" size="lg">
               View Previews
             </Button>
          </div>
        </div>
      </SectionContainer>

      {/* Technology Stack */}
      <SectionContainer
        width="large"
        padding="medium"
        bgColor="neutral"
      >
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-8 text-center">
            Built With Modern Technologies
          </h2>
          <p className="font-cormorant text-xl text-slate-600 dark:text-slate-300 mb-12 text-center">
            Leveraging the best tools for modern web development
          </p>
          
          <GridLayout columns={4} gap={6}>
            <div className="text-center p-6 bg-primary/10 rounded-lg">
              <h4 className="font-semibold mb-2">Next.js</h4>
              <p className="text-sm text-base-content/70">React framework for production</p>
            </div>
            <div className="text-center p-6 bg-secondary/10 rounded-lg">
              <h4 className="font-semibold mb-2">TypeScript</h4>
              <p className="text-sm text-base-content/70">Type-safe JavaScript</p>
            </div>
            <div className="text-center p-6 bg-accent/10 rounded-lg">
              <h4 className="font-semibold mb-2">Tailwind CSS</h4>
              <p className="text-sm text-base-content/70">Utility-first CSS framework</p>
            </div>
            <div className="text-center p-6 bg-success/10 rounded-lg">
              <h4 className="font-semibold mb-2">DaisyUI</h4>
              <p className="text-sm text-base-content/70">Component library for Tailwind</p>
            </div>
          </GridLayout>
        </div>
      </SectionContainer>
      
      {/* Footer */}
      <Footer />
      
    </main>
  );
}
