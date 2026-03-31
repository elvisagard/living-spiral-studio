# SectionContainer Component

A flexible, responsive React component for creating consistent section layouts with support for various widths, padding, margins, background colors, gradients, and background images with overlays.

## Features

- **Responsive Design**: Automatically adapts to different screen sizes
- **Flexible Widths**: Full width, large (max-w-7xl), and small (max-w-4xl)
- **Configurable Padding**: Large, medium, small, and none options
- **Margin Control**: Large, medium, small, and none options
- **Background Options**: Neutral, primary, secondary, custom colors, and gradients
- **Background Images**: Support for background images with configurable overlays
- **Automatic Centering**: Content is centered vertically and horizontally by default
- **Refined Opacity Control**: Graduated opacity levels from 5% to 100% in 5% increments

## Props

| Prop            | Type              | Default     | Description                                                   |
| --------------- | ----------------- | ----------- | ------------------------------------------------------------- |
| `children`      | `React.ReactNode` | -           | Content to render inside the section                          |
| `width`         | `SectionWidth`    | `'large'`   | Section width: 'full', 'large', 'small'                       |
| `padding`       | `SectionPadding`  | `'medium'`  | Section padding: 'large', 'medium', 'small', 'none'           |
| `margin`        | `SectionMargin`   | `'none'`    | Section margin: 'large', 'medium', 'small', 'none'            |
| `bgColor`       | `SectionBgColor`  | `'neutral'` | Background color: 'neutral', 'primary', 'secondary', 'custom' |
| `bgGradient`    | `string`          | -           | Custom gradient classes                                       |
| `bgImage`       | `string`          | -           | Background image URL                                          |
| `bgOverlay`     | `number`          | -           | Overlay opacity (0-100)                                       |
| `overlayType`   | `OverlayType`     | `'dark'`    | Overlay type: 'dark' or 'light'                               |
| `centerContent` | `boolean`         | `true`      | Whether to center content vertically and horizontally         |
| `className`     | `string`          | -           | Additional CSS classes                                        |
| `id`            | `string`          | -           | Section ID                                                    |

## Width Options

- **`full`**: `w-full` - Spans the entire viewport width
- **`large`**: `max-w-7xl` - Maximum width of 80rem (1280px)
- **`small`**: `max-w-4xl` - Maximum width of 56rem (896px)

## Padding Options

- **`large`**: `px-8 py-24 md:px-12 md:py-32` - Large responsive padding
- **`medium`**: `px-6 py-16 md:px-8 md:py-24` - Medium responsive padding
- **`small`**: `px-4 py-12 md:px-6 md:py-16` - Small responsive padding
- **`none`**: No padding applied

## Margin Options

- **`large`**: `my-16 md:my-24` - Large responsive margin
- **`medium`**: `my-12 md:my-16` - Medium responsive margin
- **`small`**: `my-8 md:my-12` - Small responsive margin
- **`none`**: No margin applied

## Background Colors

- **`neutral`**: `bg-base-100` - Default neutral background
- **`primary`**: `bg-primary text-primary-content` - Primary theme color
- **`secondary`**: `bg-secondary text-secondary-content` - Secondary theme color
- **`custom`**: No background color applied (use with `bgGradient`)

## Background Images

The component uses a hybrid approach for dynamic background images:

- **Utility classes** for static background properties: `bg-cover bg-center bg-no-repeat`
- **Inline styles** for dynamic image URLs to avoid CSS bundling issues

```tsx
// Static utility classes
className = "bg-cover bg-center bg-no-repeat";

// Dynamic inline style
style = { backgroundImage: `url(${bgImage})` };
```

**Why inline styles for dynamic URLs?**
Tailwind CSS's build process cannot resolve dynamic JavaScript variables like `${bgImage}` during CSS purging and optimization. This causes "Module not found" errors when trying to use arbitrary value syntax with dynamic variables.

This approach:

- Uses utility classes where possible for tree-shaking benefits
- Avoids CSS bundling errors with dynamic image paths
- Maintains flexibility for dynamic background images
- Provides optimal performance for static CSS properties
- Ensures reliable background image loading

## Opacity Control

The `bgOverlay` prop accepts values from 0 to 100 and maps them to Tailwind's opacity scale:

- **0-5%**: `opacity-5`
- **6-10%**: `opacity-10`
- **11-15%**: `opacity-15`
- **16-20%**: `opacity-20`
- **21-25%**: `opacity-25`
- **26-30%**: `opacity-30`
- **31-35%**: `opacity-35`
- **36-40%**: `opacity-40`
- **41-45%**: `opacity-45`
- **46-50%**: `opacity-50`
- **51-55%**: `opacity-55`
- **56-60%**: `opacity-60`
- **61-65%**: `opacity-65`
- **66-70%**: `opacity-70`
- **71-75%**: `opacity-75`
- **76-80%**: `opacity-80`
- **81-85%**: `opacity-85`
- **86-90%**: `opacity-90`
- **91-95%**: `opacity-95`
- **96-100%**: `opacity-100`

## Usage Examples

### Basic Section with Centered Content

```tsx
<SectionContainer width="large" padding="medium" bgColor="neutral">
  <div className="text-center max-w-2xl">
    <h2>Welcome</h2>
    <p>
      This content is automatically centered both vertically and horizontally.
    </p>
  </div>
</SectionContainer>
```

### Background Image with Dark Overlay

```tsx
<SectionContainer
  width="full"
  padding="large"
  bgImage="/images/hero-bg.jpg"
  bgOverlay={25}
  overlayType="dark"
  className="min-h-[500px]"
>
  <div className="text-center text-white max-w-3xl">
    <h2>Hero Section</h2>
    <p>Content with 25% dark overlay for optimal readability.</p>
  </div>
</SectionContainer>
```

### Background Image with Light Overlay

```tsx
<SectionContainer
  width="full"
  padding="large"
  bgImage="/images/hero-bg.jpg"
  bgOverlay={15}
  overlayType="light"
  className="min-h-[500px]"
>
  <div className="text-center text-gray-900 max-w-3xl">
    <h2>Light Overlay</h2>
    <p>Content with 15% light overlay for a subtle effect.</p>
  </div>
</SectionContainer>
```

### Gradient Background

```tsx
<SectionContainer
  width="large"
  padding="large"
  bgGradient="bg-gradient-to-r from-blue-500 to-purple-600"
  className="min-h-[400px]"
>
  <div className="text-center text-white max-w-2xl">
    <h2>Gradient Background</h2>
    <p>Beautiful gradient background with centered content.</p>
  </div>
</SectionContainer>
```

### Disabled Centering

```tsx
<SectionContainer
  width="large"
  padding="medium"
  bgColor="primary"
  centerContent={false}
>
  <div className="text-left max-w-2xl">
    <h2>Left-Aligned Content</h2>
    <p>This content is left-aligned because centering was disabled.</p>
  </div>
</SectionContainer>
```

### Custom Styling

```tsx
<SectionContainer
  width="small"
  padding="large"
  margin="large"
  bgColor="custom"
  className="bg-gradient-to-br from-green-400 to-blue-500 min-h-[600px]"
>
  <div className="text-center text-white max-w-xl">
    <h2>Custom Styling</h2>
    <p>Custom gradient and additional classes applied.</p>
  </div>
</SectionContainer>
```

### Gradient to Transparent with Bottom Alignment

```tsx
<SectionContainer
  width="full"
  padding="large"
  bgImage="/images/hero-bg.jpg"
  centerContent={false}
  className="min-h-[600px] relative bg-gradient-to-b from-primary via-primary/80 to-transparent"
>
  <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
    <div className="text-center mx-auto text-white max-w-4xl">
      <h2>Gradient to Transparent</h2>
      <p>
        Content positioned at the bottom with a gradient that fades to
        transparent.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <button className="btn btn-primary btn-lg">Get Started</button>
        <button className="btn btn-outline btn-lg text-white border-white">
          Learn More
        </button>
      </div>
    </div>
  </div>
</SectionContainer>
```

## Best Practices

1. **Use Appropriate Opacity Levels**:

   - 10-25% for subtle overlays that preserve background visibility
   - 30-50% for balanced readability and background presence
   - 60-80% for strong text contrast when needed

2. **Content Width**: Use `max-w-{size}` classes on your content divs to control text width and readability

3. **Responsive Design**: The component automatically handles responsive padding and margins

4. **Accessibility**: Ensure sufficient contrast between text and background, especially with overlays

5. **Performance**: Use optimized images for background images to maintain fast loading times

6. **Custom Styling**: Combine with `className` prop for advanced styling patterns

## Integration with Other Components

### With Button Components

```tsx
<SectionContainer width="large" padding="medium" bgColor="primary">
  <div className="text-center max-w-2xl">
    <h2 className="mb-6 text-primary-content">Call to Action</h2>
    <p className="mb-8 text-primary-content/80">
      Engage users with compelling content and clear actions.
    </p>
    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      <Button variant="secondary" size="lg">
        Get Started
      </Button>
      <Button variant="secondary" style="outline" size="lg">
        Learn More
      </Button>
    </div>
  </div>
</SectionContainer>
```

### With Card Components

```tsx
<SectionContainer width="large" padding="medium" bgColor="neutral">
  <div className="mx-auto max-w-7xl">
    <h2 className="mb-8 text-center">Featured Content</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <Card width="sm" hover>
        <CardHeader>
          <h3>Card Title</h3>
        </CardHeader>
        <CardBody>
          <p>Card content goes here...</p>
        </CardBody>
      </Card>
      {/* More cards... */}
    </div>
  </div>
</SectionContainer>
```

### With Layout Components

```tsx
<SectionContainer width="full" padding="large" bgColor="neutral">
  <SidebarLayout sidebar={<NavigationMenu />} gap={8}>
    <div className="prose max-w-none">
      <h1>Main Content</h1>
      <p>Content with sidebar navigation...</p>
    </div>
  </SidebarLayout>
</SectionContainer>
```

## Advanced Styling Patterns

### Custom Gradients with Background Images

```tsx
<SectionContainer
  width="full"
  padding="large"
  bgImage="/images/hero-bg.jpg"
  centerContent={false}
  className="min-h-[500px] relative bg-gradient-to-b from-primary via-primary/80 to-transparent"
>
  <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
    <div className="text-center mx-auto text-white max-w-4xl">
      <h2>Gradient Overlay</h2>
      <p>Content positioned at bottom with gradient fade.</p>
    </div>
  </div>
</SectionContainer>
```

### Complex Background Patterns

```tsx
<SectionContainer
  width="full"
  padding="medium"
  bgColor="neutral"
  className="!mt-0 !pt-[163px] relative before:absolute before:top-0 before:left-0 before:h-[163px] before:w-full before:bg-[url('/images/pattern.svg')] before:bg-no-repeat"
>
  <div className="mx-auto max-w-4xl">
    <h2>Content with Background Pattern</h2>
    <p>Content with decorative background pattern.</p>
  </div>
</SectionContainer>
```

## Performance Considerations

### Image Optimization

- Use WebP or AVIF formats for better compression
- Implement responsive images with `srcset` for different screen sizes
- Consider lazy loading for sections below the fold
- Optimize image dimensions to match display size

### Loading Strategies

- Preload critical background images
- Use placeholder images for better perceived performance
- Consider progressive image loading for large backgrounds
- Implement fallback colors for failed image loads

## Accessibility Guidelines

### Contrast and Readability

- Ensure WCAG AA compliance (4.5:1 contrast ratio for normal text)
- Test overlay opacity levels with actual content
- Provide sufficient contrast for interactive elements
- Consider color blindness when choosing overlay colors

### Screen Reader Support

- Use semantic HTML structure within sections
- Provide alternative text for decorative background images
- Ensure proper heading hierarchy
- Test with screen readers for navigation flow

### Keyboard Navigation

- Ensure all interactive elements are keyboard accessible
- Provide visible focus indicators
- Test tab order within sections
- Consider skip links for long sections

## Accessibility

- The component automatically applies proper semantic HTML with `<section>` tags
- Background images with overlays maintain text readability
- Color contrast is preserved through overlay opacity control
- Content remains accessible across all screen sizes
