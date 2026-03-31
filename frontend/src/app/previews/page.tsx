import { HeaderDropdownSimpleOptimized } from '@/components/navigation/HeaderDropdownSimpleOptimized';
import { SectionContainer } from '@/components/SectionContainer';
import { Button } from '@/components/Button';
import { JuxtaposeLayout } from '@/components/JuxtaposeLayout';
import { GridLayout } from '@/components/GridLayout';
import { ListLayout } from '@/components/ListLayout';
import { SidebarLayout } from '@/components/SidebarLayout';
import { MasonryLayout } from '@/components/MasonryLayout';
import { Footer } from '@/components/Footer';
import { CardLayout as Card, CardHeader, CardBadge, CardMediaBadge, CardMedia, CardBody, CardFooter } from '@/components/Card';

export default function Previews() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-base-100 to-base-200">
      {/* Navigation Header */}
      <HeaderDropdownSimpleOptimized 
        variant="logo-left-menu-center" 
        brand="Next.js" 
        bgClass="bg-base-100 border-b border-base-300"
      />

      {/* Hero Section */}
      <SectionContainer
        width="full"
        padding="large"
        bgColor="neutral"
        className="bg-gradient-to-b from-[#F0F3F5] to-[#D5DEE8] to-50% dark:from-blue-950 dark:to-indigo-900"
      >
        <div className="text-center mx-auto max-w-4xl">
          <h1 className="mb-6">
            Welcome to Our Platform
          </h1>
          <p className="subheading">
            Discover the perfect blend of modern design and exceptional functionality
          </p>
          <p className="text-lg text-slate-600 dark:text-slate-400 mb-12 max-w-2xl mx-auto">
            Experience our carefully crafted typography system featuring Montserrat for impactful headings, 
            Cormorant for elegant subheadings, and Mulish for comfortable reading.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="primary" size="lg">
              Get Started
            </Button>
            <Button variant="primary" style="outline" size="lg">
              Learn More
            </Button>
          </div>
        </div>
      </SectionContainer>

      {/* Typography Examples Section */}
      <SectionContainer
        width="full"
        padding="medium"
        margin="large"
        bgColor="neutral"
        className="!mt-0 !pt-[163px] relative before:absolute before:top-0 before:left-0 before:h-[163px] before:w-full before:bg-[url('/images/bottom-line-graph.svg')] before:bg-no-repeat"
      >
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-12 text-center">
            Typography Showcase
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            {/* Headings */}
            <div className="space-y-6">
              <h3>
                Montserrat Headings
              </h3>
              <div className="space-y-4">
                <h4>
                  Section Heading
                </h4>
                <h5>
                  Subsection Heading
                </h5>
                <h6>
                  Card Heading
                </h6>
              </div>
            </div>

            {/* Subheadings and Leads */}
            <div className="space-y-6">
              <h3>
                Cormorant Subheadings
              </h3>
              <div className="space-y-4">
                <p className="font-cormorant text-xl text-slate-600 dark:text-slate-300">
                  Elegant lead paragraph with sophisticated styling
                </p>
                <p className="font-cormorant text-lg text-slate-500 dark:text-slate-400">
                  Secondary subheading with refined typography
                </p>
                <p className="font-cormorant text-base text-slate-400 dark:text-slate-500">
                  Caption or small subheading text
                </p>
              </div>
            </div>
          </div>
        </div>
      </SectionContainer>

      {/* Button Examples Section */}
      <SectionContainer
        width="large"
        padding="medium"
        bgColor="neutral"
      >
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-8 text-center">
            Button Components
          </h2>
          <p className="font-cormorant text-xl text-slate-600 dark:text-slate-300 mb-12 text-center">
            Explore our collection of beautifully designed buttons
          </p>
          
          <div className="grid gap-8">
            {/* Primary Buttons */}
            <div className="space-y-4">
              <h3>
                Primary Buttons
              </h3>
              <div className="flex flex-wrap gap-4">
                <Button variant="primary">
                  Primary
                </Button>
                <Button variant="success">
                  Success
                </Button>
                <Button variant="error">
                  Danger
                </Button>
                <Button variant="secondary">
                  Purple
                </Button>
              </div>
            </div>

            {/* Secondary Buttons */}
            <div className="space-y-4">
              <h3>
                Secondary Buttons
              </h3>
              <div className="flex flex-wrap gap-4">
                <Button style="outline">
                  Secondary
                </Button>
                <Button variant="primary" style="outline">
                  Blue Outline
                </Button>
                <Button variant="success" style="outline">
                  Green Outline
                </Button>
              </div>
            </div>

            {/* Ghost Buttons */}
            <div className="space-y-4">
              <h3>
                Ghost Buttons
              </h3>
              <div className="flex flex-wrap gap-4">
                <Button style="ghost">
                  Ghost
                </Button>
                <Button variant="primary" style="ghost">
                  Blue Ghost
                </Button>
                <Button variant="success" style="ghost">
                  Green Ghost
                </Button>
              </div>
            </div>

            {/* Sizes */}
            <div className="space-y-4">
              <h3>
                Button Sizes
              </h3>
              <div className="flex flex-wrap items-center gap-4">
                <Button variant="primary" size="sm">
                  Small
                </Button>
                <Button variant="primary">
                  Medium
                </Button>
                <Button variant="primary" size="lg">
                  Large
                </Button>
                <Button variant="primary" wide>
                  Extra Wide
                </Button>
              </div>
            </div>
          </div>
        </div>
      </SectionContainer>

      {/* Content Example Section */}
      <SectionContainer
        width="large"
        padding="medium"
        bgColor="neutral"
      >
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-6 text-center">
            Content Example
          </h2>
          <p className="font-cormorant text-xl text-slate-600 dark:text-slate-300 mb-8 text-center">
            See how our typography system works in real content
          </p>
          
          <div className="prose prose-slate dark:prose-invert max-w-none">
            <p className="font-mulish text-lg leading-relaxed text-slate-700 dark:text-slate-300 mb-6">
              This is a paragraph written in Mulish, our default body font. It&apos;s designed for optimal readability 
              and comfort during extended reading sessions. The font provides excellent legibility across all 
              screen sizes and maintains its clarity in both light and dark themes.
            </p>
            
            <p className="font-mulish text-lg leading-relaxed text-slate-700 dark:text-slate-300 mb-6">
              When you need to emphasize important information or create visual hierarchy, you can use 
              <strong className="font-mulish font-semibold"> bold text</strong> or 
              <em className="font-mulish italic"> italic text</em> within the same font family to maintain 
              consistency while adding emphasis.
            </p>
            
            <blockquote className="font-cormorant text-xl text-slate-600 dark:text-slate-400 border-l-4 border-blue-500 pl-6 my-8 italic">
              &ldquo;Typography is the art and technique of arranging type to make written language legible, 
              readable, and appealing when displayed.&rdquo;
            </blockquote>
            
            <p className="font-mulish text-lg leading-relaxed text-slate-700 dark:text-slate-300">
              This typography system creates a harmonious visual hierarchy that guides readers through 
              your content naturally, from the bold Montserrat headings that grab attention, to the 
              elegant Cormorant subheadings that provide context, and finally to the comfortable 
              Mulish body text that keeps readers engaged.
            </p>
          </div>
        </div>
      </SectionContainer>

      {/* Background Image Example Section */}
      <SectionContainer
        width="full"
        padding="large"
        bgImage="/images/balaam.png"
        bgOverlay={75}
        overlayType="dark"
        className="min-h-[400px]"
      >
        <div className="text-center mx-auto text-white max-w-4xl">
          <h2 className="mb-6 text-white">
            Background Image with Dark Overlay
          </h2>
          <p className="font-cormorant text-xl mb-8">
            This section demonstrates the SectionContainer component with a background image and a moderate 25% dark overlay 
            for optimal text readability. The overlay ensures content remains legible while preserving the 
            visual impact of the background image.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="accent" size="lg">
              Explore More
            </Button>
            <Button 
              variant="primary" 
              style="outline" 
              size="lg" 
              className="text-white border-white hover:bg-white hover:text-gray-900"
            >
              Learn About Our Story
            </Button>
          </div>
        </div>
      </SectionContainer>

      {/* Light Overlay Example Section */}
      <SectionContainer
        width="full"
        padding="large"
        bgImage="/images/balaam.png"
        bgOverlay={65}
        overlayType="light"
        className="min-h-[700px]"
      >
        <div className="text-center mx-auto text-gray-900 max-w-4xl">
          <h2 className="mb-6">
            Background Image with Light Overlay (15% opacity)
          </h2>
          <p className="font-cormorant text-xl mb-8">
            This section shows the same background image but with a subtle 15% light overlay, creating a 
            gentle visual effect while maintaining excellent text readability. Light overlays work well 
            with darker text and can create a softer, more ethereal appearance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="primary" size="lg">
              Get Started
            </Button>
            <Button variant="primary" style="outline" size="lg">
              View Gallery
            </Button>
          </div>
        </div>
      </SectionContainer>

      {/* Gradient to Transparent with Bottom-Aligned Content */}
      <SectionContainer
        width="full"
        padding="large"
        bgImage="/images/balaam.png"
        centerContent={false}
        className="min-h-[600px] relative"
      >
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/80 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
          <div className="text-center mx-auto text-white max-w-4xl">
            <h2 className="mb-6 text-white">
              Gradient to Transparent with Bottom Alignment
            </h2>
            <p className="text-xl mb-8">
              This section demonstrates a beautiful gradient that fades from primary color to transparent. 
              The content is positioned at the bottom of the container, creating an elegant overlay effect 
              that works perfectly for hero sections or call-to-action areas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg">
                Explore Features
              </Button>
              <Button 
                variant="primary" 
                style="outline" 
                size="lg" 
                className="text-white border-white hover:bg-white hover:text-gray-900"
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </SectionContainer>
      
      {/* JuxtaposeLayout Examples Section */}
      <SectionContainer
        width="large"
        padding="medium"
        bgColor="neutral"
      >
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-8 text-center">
            JuxtaposeLayout Examples
          </h2>
          <p className="font-cormorant text-xl text-slate-600 dark:text-slate-300 mb-12 text-center">
            Demonstrating equal and asymmetric column layouts for juxtaposing large components
          </p>

          {/* Two Equal Columns */}
          <h3 className="mb-2 font-semibold">Two Equal Columns</h3>
          <JuxtaposeLayout columns={2} gap={8}>
            <div className="bg-primary/20 rounded-lg p-8 text-center">Component A</div>
            <div className="bg-secondary/20 rounded-lg p-8 text-center">Component B</div>
          </JuxtaposeLayout>

          {/* Three Equal Columns */}
          <h3 className="mt-12 mb-2 font-semibold">Three Equal Columns</h3>
          <JuxtaposeLayout columns={3} gap={8}>
            <div className="bg-accent/20 rounded-lg p-8 text-center">Component 1</div>
            <div className="bg-success/20 rounded-lg p-8 text-center">Component 2</div>
            <div className="bg-warning/20 rounded-lg p-8 text-center">Component 3</div>
          </JuxtaposeLayout>

          {/* 66-33 Split */}
          <h3 className="mt-12 mb-2 font-semibold">66-33 Split</h3>
          <JuxtaposeLayout columns="66-33" gap={8}>
            <div className="bg-info/20 rounded-lg p-8 text-center">Wide Component</div>
            <div className="bg-error/20 rounded-lg p-8 text-center">Narrow Component</div>
          </JuxtaposeLayout>

          {/* 25-50-25 Split */}
          <h3 className="mt-12 mb-2 font-semibold">25-50-25 Split</h3>
          <JuxtaposeLayout columns="25-50-25" gap={8}>
            <div className="bg-primary/30 rounded-lg p-8 text-center">Left</div>
            <div className="bg-secondary/30 rounded-lg p-8 text-center">Center</div>
            <div className="bg-accent/30 rounded-lg p-8 text-center">Right</div>
          </JuxtaposeLayout>
        </div>
      </SectionContainer>
      
      {/* GridLayout Examples Section */}
      <SectionContainer
        width="large"
        padding="medium"
        bgColor="neutral"
      >
        <div className="mx-auto">
          <h2 className="mb-8 text-center">
            GridLayout Examples
          </h2>
          <p className="font-cormorant text-xl text-slate-600 dark:text-slate-300 mb-12 text-center">
            Demonstrating standard grid, masonry, and horizontal scroll layouts for repeated content
          </p>

          {/* Standard 3-Column Grid */}
          <h3 className="mb-2 font-semibold">Standard 3-Column Grid</h3>
          <GridLayout columns={3} gap={6}>
            {[1,2,3,4,5,6].map(i => (
              <div key={i} className="bg-primary/10 rounded-lg p-6 text-center shadow">Card {i}</div>
            ))}
          </GridLayout>

          {/* 4-Column Grid */}
          <h3 className="mt-12 mb-2 font-semibold">4-Column Grid</h3>
          <GridLayout columns={4} gap={6}>
            {[1,2,3,4,5,6,7,8].map(i => (
              <div key={i} className="bg-secondary/10 rounded-lg p-6 text-center shadow">Card {i}</div>
            ))}
          </GridLayout>

          {/* Masonry Layout */}
          <h3 className="mt-12 mb-2 font-semibold">Masonry Layout</h3>
          <MasonryLayout columns={3} gap={4}>
            {[1,2,3,4,5,6,7,8,9,10,11,12].map(i => (
              <div 
                key={i} 
                className="bg-accent/10 rounded-lg p-6 text-center shadow" 
                style={{
                  height: `${80 + (i % 4) * 30 + (i % 3) * 20}px`,
                  minHeight: '80px'
                }}
              >
                Card {i}
              </div>
            ))}
          </MasonryLayout>
        </div>
      </SectionContainer>
      
      {/* Card Component Examples Section */}
      <SectionContainer
        width="large"
        padding="medium"
        bgColor="neutral"
      >
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-8 text-center">
            Card Component Examples
          </h2>
          <p className="font-cormorant text-xl text-slate-600 dark:text-slate-300 mb-12 text-center">
            Master card components with flexible layouts, responsive design, and interactive states
          </p>

          {/* Basic Card Types */}
          <h3 className="mb-6 font-semibold">Basic Card Types</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Simple Card */}
            <Card width="md" hover>
              <CardHeader>
                <h4 className="text-lg font-semibold">Simple Card</h4>
              </CardHeader>
              <CardBody>
                <p className="text-base-content/70">
                  A basic card with header and body content.
                </p>
              </CardBody>
            </Card>

            {/* Card with Badge */}
            <Card width="md" hover>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <h4 className="text-lg font-semibold">Card with Badge</h4>
                  <CardBadge variant="primary">New</CardBadge>
                </div>
              </CardHeader>
              <CardBody>
                <p className="text-base-content/70">
                  This card includes a badge component.
                </p>
              </CardBody>
            </Card>

            {/* Card with Media */}
            <Card width="md" hover>
              <CardMedia aspectRatio="video">
                <img 
                  src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=225&fit=crop" 
                  alt="Mountain landscape"
                  className="w-full h-full object-cover"
                />
              </CardMedia>
              <CardBody>
                <h4 className="text-lg font-semibold mb-2">Card with Media</h4>
                <p className="text-base-content/70">
                  Features an image with video aspect ratio.
                </p>
              </CardBody>
            </Card>
          </div>

          {/* Complete Cards */}
          <h3 className="mt-12 mb-6 font-semibold">Complete Cards</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Product Card */}
            <Card width="lg" hover interactive>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <h4 className="text-lg font-semibold">Premium Product</h4>
                  <CardBadge variant="success">In Stock</CardBadge>
                </div>
              </CardHeader>
              <CardMedia aspectRatio="square">
                <img 
                  src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=400&fit=crop" 
                  alt="Product"
                  className="w-full h-full object-cover"
                />
              </CardMedia>
              <CardBody>
                <p className="text-base-content/70 mb-4">
                  High-quality product with excellent features and durability.
                </p>
                <div className="flex gap-2">
                  <CardBadge variant="info" size="sm">Premium</CardBadge>
                  <CardBadge variant="secondary" size="sm">Featured</CardBadge>
                </div>
              </CardBody>
              <CardFooter>
                <span className="text-xl font-bold">$99.99</span>
                <Button size="sm" variant="primary">Add to Cart</Button>
              </CardFooter>
            </Card>

            {/* Article Card */}
            <Card width="lg" orientation="horizontal">
              <CardMedia aspectRatio="portrait" className="md:w-48">
                <img 
                  src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=400&fit=crop" 
                  alt="Article"
                  className="w-full h-full object-cover"
                />
              </CardMedia>
              <div className="flex flex-col flex-1">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <h4 className="text-lg font-semibold">Featured Article</h4>
                    <CardBadge variant="warning">Featured</CardBadge>
                  </div>
                </CardHeader>
                <CardBody>
                  <p className="text-base-content/70">
                    This article demonstrates horizontal card layout with media and content side by side.
                  </p>
                </CardBody>
                <CardFooter>
                  <span className="text-sm text-base-content/50">5 min read</span>
                  <Button size="sm" style="ghost">Read More</Button>
                </CardFooter>
              </div>
            </Card>
          </div>

          {/* Interactive Cards */}
          <h3 className="mt-12 mb-6 font-semibold">Interactive Cards</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Hover Card */}
            <Card width="md" hover interactive>
              <CardMedia aspectRatio="video">
                <img 
                  src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=225&fit=crop" 
                  alt="Mountain landscape"
                  className="w-full h-full object-cover"
                />
              </CardMedia>
              <CardBody>
                <h4 className="text-lg font-semibold mb-2">Hover Effect</h4>
                <p className="text-base-content/70">
                  This card has hover animations and is interactive.
                </p>
              </CardBody>
            </Card>

            {/* Interactive Card */}
            <Card width="md" interactive shadow="lg">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <h4 className="text-lg font-semibold">Interactive</h4>
                  <CardBadge variant="warning">Clickable</CardBadge>
                </div>
              </CardHeader>
              <CardBody>
                <p className="text-base-content/70">
                  This card shows cursor pointer and can handle click events.
                </p>
              </CardBody>
            </Card>

            {/* Responsive Card */}
            <Card width="md" responsive hover>
              <CardMedia aspectRatio="portrait">
                <img 
                  src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=300&h=400&fit=crop" 
                  alt="Forest"
                  className="w-full h-full object-cover"
                />
              </CardMedia>
              <CardBody>
                <h4 className="text-lg font-semibold mb-2">Responsive</h4>
                <p className="text-base-content/70">
                  Smooth transitions and responsive behavior.
                </p>
              </CardBody>
            </Card>
          </div>

          {/* Badge Variations */}
          <h3 className="mt-12 mb-6 font-semibold">Badge Variations</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {(['primary', 'secondary', 'accent', 'info', 'success', 'warning', 'error', 'neutral'] as const).map((variant) => (
              <Card key={variant} width="sm">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <h4 className="font-semibold capitalize">{variant}</h4>
                    <CardBadge variant={variant} size="md">{variant}</CardBadge>
                  </div>
                </CardHeader>
                <CardBody>
                  <div className="space-y-3">
                    <p className="text-sm text-base-content/70">
                      Badge variant: <strong>{variant}</strong>
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <CardBadge variant={variant} size="xs">XS</CardBadge>
                      <CardBadge variant={variant} size="sm">SM</CardBadge>
                      <CardBadge variant={variant} size="md">MD</CardBadge>
                      <CardBadge variant={variant} size="lg">LG</CardBadge>
                    </div>
                  </div>
                </CardBody>
              </Card>
            ))}
          </div>

          {/* Media Badge Overlays */}
          <h3 className="mt-12 mb-6 font-semibold">Media Badge Overlays</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Top Right Badge */}
            <Card width="sm" hover>
              <CardMedia aspectRatio="square">
                <img 
                  src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=300&fit=crop" 
                  alt="Mountain landscape"
                  className="w-full h-full object-cover"
                />
                <CardMediaBadge position="top-right" variant="success">New</CardMediaBadge>
              </CardMedia>
              <CardBody>
                <h4 className="font-semibold">Top Right Badge</h4>
                <p className="text-sm text-base-content/70">Badge positioned at top-right corner</p>
              </CardBody>
            </Card>

            {/* Top Left Badge */}
            <Card width="sm" hover>
              <CardMedia aspectRatio="square">
                <img 
                  src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=300&h=300&fit=crop" 
                  alt="Forest"
                  className="w-full h-full object-cover"
                />
                <CardMediaBadge position="top-left" variant="warning">Sale</CardMediaBadge>
              </CardMedia>
              <CardBody>
                <h4 className="font-semibold">Top Left Badge</h4>
                <p className="text-sm text-base-content/70">Badge positioned at top-left corner</p>
              </CardBody>
            </Card>

            {/* Bottom Right Badge */}
            <Card width="sm" hover>
              <CardMedia aspectRatio="square">
                <img 
                  src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=300&fit=crop" 
                  alt="Mountain landscape"
                  className="w-full h-full object-cover"
                />
                <CardMediaBadge position="bottom-right" variant="error">Sold</CardMediaBadge>
              </CardMedia>
              <CardBody>
                <h4 className="font-semibold">Bottom Right Badge</h4>
                <p className="text-sm text-base-content/70">Badge positioned at bottom-right corner</p>
              </CardBody>
            </Card>

            {/* Bottom Left Badge */}
            <Card width="sm" hover>
              <CardMedia aspectRatio="square">
                <img 
                  src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=300&h=300&fit=crop" 
                  alt="Forest"
                  className="w-full h-full object-cover"
                />
                <CardMediaBadge position="bottom-left" variant="info">Featured</CardMediaBadge>
              </CardMedia>
              <CardBody>
                <h4 className="font-semibold">Bottom Left Badge</h4>
                <p className="text-sm text-base-content/70">Badge positioned at bottom-left corner</p>
              </CardBody>
            </Card>
          </div>

          {/* Multiple Badges on Media */}
          <h3 className="mt-12 mb-6 font-semibold">Multiple Badges on Media</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Product with Multiple Badges */}
            <Card width="lg" hover>
              <CardMedia aspectRatio="video">
                <img 
                  src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=338&fit=crop" 
                  alt="Product"
                  className="w-full h-full object-cover"
                />
                <CardMediaBadge position="top-left" variant="warning" size="md">Sale</CardMediaBadge>
                <CardMediaBadge position="top-right" variant="success" size="sm">New</CardMediaBadge>
                <CardMediaBadge position="bottom-right" variant="info" size="sm">Featured</CardMediaBadge>
              </CardMedia>
              <CardBody>
                <h4 className="text-lg font-semibold">Product with Multiple Badges</h4>
                <p className="text-base-content/70">
                  Demonstrates multiple badges positioned on different corners of the media.
                </p>
              </CardBody>
            </Card>

            {/* Video with Status Badge */}
            <Card width="lg" hover>
              <CardMedia aspectRatio="video">
                <img 
                  src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&h=338&fit=crop" 
                  alt="Video thumbnail"
                  className="w-full h-full object-cover"
                />
                <CardMediaBadge position="top-right" variant="error" size="lg">Live</CardMediaBadge>
                <CardMediaBadge position="bottom-left" variant="neutral" size="sm">HD</CardMediaBadge>
              </CardMedia>
              <CardBody>
                <h4 className="text-lg font-semibold">Video with Status Badges</h4>
                <p className="text-base-content/70">
                  Shows how badges can indicate video status, quality, or other metadata.
                </p>
              </CardBody>
            </Card>
          </div>

          {/* Full Width Left-Right Cards */}
          <h3 className="mt-12 mb-6 font-semibold">Full Width Left-Right Cards</h3>
          <div className="space-y-6">
            {/* Article Card - Media Left */}
            <Card width="full" orientation="left-right" hover>
              <CardMedia aspectRatio="portrait" className="h-48 md:h-auto md:w-1/3">
                <img 
                  src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=600&fit=crop" 
                  alt="Article thumbnail"
                  className="w-full h-full object-cover"
                />
                <CardMediaBadge position="top-right" variant="primary">Article</CardMediaBadge>
              </CardMedia>
              <div className="md:w-2/3 flex flex-col">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <h4 className="text-xl font-semibold">The Future of Web Development</h4>
                      <p className="text-sm text-base-content/60 mt-1">By John Doe • 3 days ago</p>
                    </div>
                    <CardBadge variant="info" size="sm">Technology</CardBadge>
                  </div>
                </CardHeader>
                <CardBody>
                  <p className="text-base-content/80 leading-relaxed">
                    Explore the latest trends in web development, from modern frameworks to emerging technologies 
                    that are shaping the future of the web. This comprehensive guide covers everything from 
                    performance optimization to user experience design.
                  </p>
                  <div className="flex items-center gap-4 mt-4 text-sm text-base-content/60">
                    <span>📖 8 min read</span>
                    <span>💬 24 comments</span>
                    <span>❤️ 156 likes</span>
                  </div>
                </CardBody>
                <CardFooter>
                  <button className="btn btn-primary btn-sm">Read More</button>
                  <div className="flex gap-2">
                    <button className="btn btn-ghost btn-sm">Share</button>
                    <button className="btn btn-ghost btn-sm">Bookmark</button>
                  </div>
                </CardFooter>
              </div>
            </Card>

            {/* Product Card - Media Right */}
            <Card width="full" orientation="right-left" hover>
              <div className="md:w-2/3 flex flex-col">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <h4 className="text-xl font-semibold">Premium Wireless Headphones</h4>
                      <p className="text-sm text-base-content/60 mt-1">Brand: AudioTech Pro</p>
                    </div>
                    <CardBadge variant="success" size="sm">In Stock</CardBadge>
                  </div>
                </CardHeader>
                <CardBody>
                  <p className="text-base-content/80 leading-relaxed">
                    Experience crystal-clear sound with our premium wireless headphones. Featuring active noise 
                    cancellation, 30-hour battery life, and premium comfort for extended listening sessions. 
                    Perfect for music lovers and professionals alike.
                  </p>
                  <div className="flex items-center gap-4 mt-4">
                    <div className="flex items-center gap-1">
                      <span className="text-yellow-500">★★★★★</span>
                      <span className="text-sm text-base-content/60">(4.8/5)</span>
                    </div>
                    <span className="text-sm text-base-content/60">• 2,847 reviews</span>
                  </div>
                  <div className="mt-4">
                    <span className="text-2xl font-bold text-primary">$299.99</span>
                    <span className="text-sm text-base-content/60 line-through ml-2">$399.99</span>
                    <span className="text-sm text-success ml-2">25% off</span>
                  </div>
                </CardBody>
                <CardFooter>
                  <button className="btn btn-primary">Add to Cart</button>
                  <div className="flex gap-2">
                    <button className="btn btn-outline btn-sm">Compare</button>
                    <button className="btn btn-ghost btn-sm">❤️ Wishlist</button>
                  </div>
                </CardFooter>
              </div>
              <CardMedia aspectRatio="portrait" className="h-48 md:h-auto md:w-1/3">
                <img 
                  src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=600&fit=crop" 
                  alt="Wireless headphones"
                  className="w-full h-full object-cover"
                />
                <CardMediaBadge position="top-left" variant="warning" size="md">Sale</CardMediaBadge>
                <CardMediaBadge position="bottom-right" variant="info" size="sm">Free Shipping</CardMediaBadge>
              </CardMedia>
            </Card>

            {/* Event Card - Media Left */}
            <Card width="full" orientation="left-right" hover>
              <CardMedia aspectRatio="landscape" className="h-40 md:h-auto md:w-2/5">
                <img 
                  src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=500&h=300&fit=crop" 
                  alt="Conference event"
                  className="w-full h-full object-cover"
                />
                <CardMediaBadge position="top-right" variant="error" size="lg">Live</CardMediaBadge>
                <CardMediaBadge position="bottom-left" variant="neutral" size="sm">Virtual</CardMediaBadge>
              </CardMedia>
              <div className="md:w-3/5 flex flex-col">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <h4 className="text-xl font-semibold">Tech Conference 2024</h4>
                      <p className="text-sm text-base-content/60 mt-1">March 15-17, 2024 • San Francisco</p>
                    </div>
                    <CardBadge variant="accent" size="sm">Featured</CardBadge>
                  </div>
                </CardHeader>
                <CardBody>
                  <p className="text-base-content/80 leading-relaxed">
                    Join industry leaders and innovators for three days of inspiring talks, workshops, and 
                    networking opportunities. Discover the latest in AI, blockchain, and sustainable technology.
                  </p>
                  <div className="flex items-center gap-4 mt-4 text-sm text-base-content/60">
                    <span>📅 3 days</span>
                    <span>👥 500+ attendees</span>
                    <span>🎤 50+ speakers</span>
                  </div>
                </CardBody>
                <CardFooter>
                  <button className="btn btn-primary">Register Now</button>
                  <div className="flex gap-2">
                    <button className="btn btn-outline btn-sm">View Schedule</button>
                    <button className="btn btn-ghost btn-sm">Share Event</button>
                  </div>
                </CardFooter>
              </div>
            </Card>
          </div>
        </div>
      </SectionContainer>
      
      {/* ListLayout Examples Section */}
      <SectionContainer
        width="large"
        padding="medium"
        bgColor="neutral"
        centerContent={false}
      >
        <div className="mx-auto">
          <h2 className="mb-8 text-center">
            ListLayout Examples
          </h2>
          <p className="font-cormorant text-xl text-slate-600 dark:text-slate-300 mb-12 text-center">
            Directory-style lists with thumbnail, title, and description
          </p>

          {/* Single Column List */}
          <h3 className="mb-2 font-semibold">Single Column List</h3>
          <ListLayout gap={6}>
            {[1,2,3].map(i => (
              <ListLayout.Item key={i}>
                <img src={`https://picsum.photos/seed/list${i}/64/64`} alt="thumb" className="w-16 h-16 rounded object-cover" />
                <div>
                  <div className="font-semibold">Item {i}</div>
                  <div className="text-slate-500 text-sm">This is a description for item {i} in the list.</div>
                </div>
              </ListLayout.Item>
            ))}
          </ListLayout>

          {/* Two Column List on Desktop */}
          <h3 className="mt-12 mb-2 font-semibold">Two Column List (Desktop)</h3>
          <ListLayout gap={6} columns={2}>
            {[4,5,6,7].map(i => (
              <ListLayout.Item key={i}>
                <img src={`https://picsum.photos/seed/list${i}/64/64`} alt="thumb" className="w-16 h-16 rounded object-cover" />
                <div>
                  <div className="font-semibold">Item {i}</div>
                  <div className="text-slate-500 text-sm">This is a description for item {i} in the list.</div>
                </div>
              </ListLayout.Item>
            ))}
          </ListLayout>

          {/* Array Mapping Example */}
          <h3 className="mt-12 mb-2 font-semibold">Array Mapping Example</h3>
          <ListLayout gap={6} columns={3}>
            {[
              { id: 1, title: 'Alpha', desc: 'First item', img: 'https://picsum.photos/seed/alpha/64/64' },
              { id: 2, title: 'Beta', desc: 'Second item', img: 'https://picsum.photos/seed/beta/64/64' },
              { id: 3, title: 'Gamma', desc: 'Third item', img: 'https://picsum.photos/seed/gamma/64/64' },
              { id: 4, title: 'Delta', desc: 'Fourth item', img: 'https://picsum.photos/seed/delta/64/64' },
              { id: 5, title: 'Epsilon', desc: 'Fifth item', img: 'https://picsum.photos/seed/epsilon/64/64' },
            ].map(item => (
              <ListLayout.Item key={item.id}>
                <img src={item.img} alt="thumb" className="w-16 h-16 rounded object-cover" />
                <div>
                  <div className="font-semibold">{item.title}</div>
                  <div className="text-slate-500 text-sm">{item.desc}</div>
                </div>
              </ListLayout.Item>
            ))}
          </ListLayout>
        </div>
      </SectionContainer>
      
      {/* SidebarLayout Examples Section */}
      <SectionContainer
        width="large"
        padding="medium"
        bgColor="neutral"
      >
        <div className="mx-auto">
          <h2 className="mb-8 text-center">
            SidebarLayout Examples
          </h2>
          <p className="font-cormorant text-xl text-slate-600 dark:text-slate-300 mb-12 text-center">
            Sidebar and main content layouts for blogs, dashboards, and docs
          </p>

          {/* Sidebar Left */}
          <h3 className="mb-2 font-semibold">Sidebar Left</h3>
          <SidebarLayout
            sidebar={
              <div className="bg-primary/10 rounded-lg p-6 font-semibold">Sidebar Content</div>
            }
            gap={8}
          >
            <div className="bg-base-200 rounded-lg p-6 min-h-[120px]">Main Content Area</div>
          </SidebarLayout>

          {/* Sidebar Right */}
          <h3 className="mt-12 mb-2 font-semibold">Sidebar Right</h3>
          <SidebarLayout
            sidebar={
              <div className="bg-secondary/10 rounded-lg p-6 font-semibold">Sidebar Content</div>
            }
            sidebarPosition="right"
            gap={8}
          >
            <div className="bg-base-200 rounded-lg p-6 min-h-[120px]">Main Content Area</div>
          </SidebarLayout>
        </div>
      </SectionContainer>
      
      {/* Footer */}
      <Footer />
      
    </main>
  );
} 