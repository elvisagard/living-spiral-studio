# Card Component System Documentation

## Overview

The Card Component System is a powerful, composable master component architecture designed to serve as the foundation for creating specific card types in production applications. Built with React, TypeScript, and Tailwind CSS, it provides a flexible and consistent way to build card-based user interfaces.

## Core Philosophy

### Master Components

The card system follows the master component philosophy, where base components are highly configurable and reusable. Specific card types (like ProductCard, ArticleCard, UserCard) can be created by composing these master components with domain-specific content and styling.

### Key Principles

- **Composable**: Each card section is independent and can be mixed and matched
- **Responsive**: Automatic adaptation to different screen sizes
- **Consistent**: Unified design language across all card variations
- **Extensible**: Easy to add new features without breaking existing functionality

## Component Architecture

### Main Components

#### `CardLayout` (Main Wrapper)

The primary container that controls the overall card structure and behavior.

```tsx
import { CardLayout as Card } from "@/components/Card";

<Card width="full" orientation="left-right" hover shadow="lg">
  {/* Card content */}
</Card>;
```

#### `CardHeader`

Container for card title, metadata, and header-level badges.

```tsx
import { CardHeader } from "@/components/Card";

<CardHeader>
  <div className="flex items-center justify-between">
    <h3>Card Title</h3>
    <CardBadge variant="primary">New</CardBadge>
  </div>
</CardHeader>;
```

#### `CardBody`

Main content area for text, descriptions, and body content.

```tsx
import { CardBody } from "@/components/Card";

<CardBody>
  <p>Main content goes here...</p>
  <div className="flex items-center gap-4">
    <span>Metadata</span>
  </div>
</CardBody>;
```

#### `CardFooter`

Action area with buttons, links, and footer content.

```tsx
import { CardFooter } from "@/components/Card";

<CardFooter>
  <button className="btn btn-primary">Action</button>
  <div className="flex gap-2">
    <button className="btn btn-ghost">Secondary</button>
  </div>
</CardFooter>;
```

#### `CardMedia`

Container for images, videos, and other media content.

```tsx
import { CardMedia } from "@/components/Card";

<CardMedia aspectRatio="portrait" className="h-48 md:h-auto">
  <img
    src="image.jpg"
    alt="Description"
    className="w-full h-full object-cover"
  />
</CardMedia>;
```

#### `CardBadge`

Standard badge component for labels and status indicators.

```tsx
import { CardBadge } from "@/components/Card";

<CardBadge variant="success" size="md">
  In Stock
</CardBadge>;
```

#### `CardMediaBadge`

Badge that overlays on media content with positioning control.

```tsx
import { CardMediaBadge } from "@/components/Card";

<CardMediaBadge position="top-right" variant="warning" size="lg">
  Sale
</CardMediaBadge>;
```

## Configuration Options

### CardLayout Props

| Prop          | Type                                                         | Default      | Description                |
| ------------- | ------------------------------------------------------------ | ------------ | -------------------------- |
| `orientation` | `'vertical' \| 'horizontal' \| 'left-right' \| 'right-left'` | `'vertical'` | Layout direction           |
| `width`       | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl' \| '2xl' \| 'full'`    | `'md'`       | Card width                 |
| `height`      | `'auto' \| 'sm' \| 'md' \| 'lg' \| 'xl' \| 'full'`           | `'auto'`     | Card height                |
| `shadow`      | `'none' \| 'sm' \| 'md' \| 'lg' \| 'xl' \| '2xl'`            | `'md'`       | Shadow depth               |
| `border`      | `'none' \| 'sm' \| 'md' \| 'lg'`                             | `'sm'`       | Border thickness           |
| `radius`      | `'none' \| 'sm' \| 'md' \| 'lg' \| 'xl' \| '2xl' \| 'full'`  | `'lg'`       | Border radius              |
| `responsive`  | `boolean`                                                    | `true`       | Enable responsive behavior |
| `hover`       | `boolean`                                                    | `false`      | Enable hover effects       |
| `interactive` | `boolean`                                                    | `false`      | Enable interactive states  |

### Orientation Types

#### `vertical`

- **Layout**: Content stacks vertically (top to bottom)
- **Use Case**: Standard cards, product cards, feature cards
- **CSS**: `flex flex-col`

#### `horizontal`

- **Layout**: Content flows horizontally on desktop, stacks on mobile
- **Use Case**: Article previews, list items
- **CSS**: `flex flex-col md:flex-row`

#### `left-right`

- **Layout**: Media on left, content on right (desktop)
- **Use Case**: Article cards, product listings
- **CSS**: `flex flex-col md:flex-row`

#### `right-left`

- **Layout**: Media on right, content on left (desktop)
- **Use Case**: Product cards, feature highlights
- **CSS**: `flex flex-col md:flex-row-reverse`

### Media Aspect Ratios

| Ratio       | Description          | Use Case                           |
| ----------- | -------------------- | ---------------------------------- |
| `square`    | 1:1 aspect ratio     | Product images, avatars            |
| `video`     | 16:9 aspect ratio    | Video thumbnails, hero images      |
| `portrait`  | 3:4 aspect ratio     | Article thumbnails, product photos |
| `landscape` | 4:3 aspect ratio     | Event images, feature photos       |
| `auto`      | Natural aspect ratio | Flexible content                   |

### Badge Variants

| Variant     | Color               | Use Case                        |
| ----------- | ------------------- | ------------------------------- |
| `primary`   | Primary brand color | Main actions, featured content  |
| `secondary` | Secondary color     | Supporting information          |
| `accent`    | Accent color        | Highlights, special content     |
| `info`      | Blue                | Information, tips               |
| `success`   | Green               | Success states, available items |
| `warning`   | Orange/Yellow       | Warnings, sales, limited time   |
| `error`     | Red                 | Errors, sold out, live content  |
| `neutral`   | Gray                | Default, generic labels         |

### Badge Sizes

| Size | Description | Use Case                         |
| ---- | ----------- | -------------------------------- |
| `xs` | Extra small | Compact spaces, secondary info   |
| `sm` | Small       | Standard badges, most use cases  |
| `md` | Medium      | Prominent badges, important info |
| `lg` | Large       | Hero badges, live indicators     |

### Badge Positions (Media Badges)

| Position       | Location            | Use Case                      |
| -------------- | ------------------- | ----------------------------- |
| `top-left`     | Top left corner     | Sale badges, featured content |
| `top-right`    | Top right corner    | New items, live indicators    |
| `bottom-left`  | Bottom left corner  | Quality indicators, metadata  |
| `bottom-right` | Bottom right corner | Status, availability          |

## Usage Examples

### Basic Card

```tsx
import {
  CardLayout as Card,
  CardHeader,
  CardBody,
  CardFooter,
} from "@/components/Card";

<Card width="sm" hover>
  <CardHeader>
    <h3>Card Title</h3>
  </CardHeader>
  <CardBody>
    <p>This is the main content of the card.</p>
  </CardBody>
  <CardFooter>
    <button className="btn btn-primary">Action</button>
  </CardFooter>
</Card>;
```

### Product Card with Media

```tsx
import {
  CardLayout as Card,
  CardHeader,
  CardBadge,
  CardMedia,
  CardMediaBadge,
  CardBody,
  CardFooter,
} from "@/components/Card";

<Card width="lg" orientation="left-right" hover>
  <CardMedia aspectRatio="portrait" className="h-48 md:h-auto md:w-1/3">
    <img
      src="product.jpg"
      alt="Product"
      className="w-full h-full object-cover"
    />
    <CardMediaBadge position="top-left" variant="warning" size="md">
      Sale
    </CardMediaBadge>
    <CardMediaBadge position="bottom-right" variant="info" size="sm">
      Free Shipping
    </CardMediaBadge>
  </CardMedia>
  <div className="md:w-2/3 flex flex-col">
    <CardHeader>
      <div className="flex items-start justify-between">
        <div>
          <h4 className="text-xl font-semibold">Product Name</h4>
          <p className="text-sm text-base-content/60">Brand Name</p>
        </div>
        <CardBadge variant="success" size="sm">
          In Stock
        </CardBadge>
      </div>
    </CardHeader>
    <CardBody>
      <p className="text-base-content/80">Product description...</p>
      <div className="mt-4">
        <span className="text-2xl font-bold text-primary">$99.99</span>
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
</Card>;
```

### Article Card

```tsx
<Card width="full" orientation="left-right" hover>
  <CardMedia aspectRatio="portrait" className="h-48 md:h-auto md:w-1/3">
    <img
      src="article.jpg"
      alt="Article thumbnail"
      className="w-full h-full object-cover"
    />
    <CardMediaBadge position="top-right" variant="primary">
      Article
    </CardMediaBadge>
  </CardMedia>
  <div className="md:w-2/3 flex flex-col">
    <CardHeader>
      <div className="flex items-start justify-between">
        <div>
          <h4 className="text-xl font-semibold">Article Title</h4>
          <p className="text-sm text-base-content/60">By Author • 3 days ago</p>
        </div>
        <CardBadge variant="info" size="sm">
          Technology
        </CardBadge>
      </div>
    </CardHeader>
    <CardBody>
      <p className="text-base-content/80">Article excerpt...</p>
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
```

### Event Card

```tsx
<Card width="full" orientation="left-right" hover>
  <CardMedia aspectRatio="landscape" className="h-40 md:h-auto md:w-2/5">
    <img src="event.jpg" alt="Event" className="w-full h-full object-cover" />
    <CardMediaBadge position="top-right" variant="error" size="lg">
      Live
    </CardMediaBadge>
    <CardMediaBadge position="bottom-left" variant="neutral" size="sm">
      Virtual
    </CardMediaBadge>
  </CardMedia>
  <div className="md:w-3/5 flex flex-col">
    <CardHeader>
      <div className="flex items-start justify-between">
        <div>
          <h4 className="text-xl font-semibold">Event Title</h4>
          <p className="text-sm text-base-content/60">Date • Location</p>
        </div>
        <CardBadge variant="accent" size="sm">
          Featured
        </CardBadge>
      </div>
    </CardHeader>
    <CardBody>
      <p className="text-base-content/80">Event description...</p>
      <div className="flex items-center gap-4 mt-4 text-sm text-base-content/60">
        <span>📅 Duration</span>
        <span>👥 Attendees</span>
        <span>🎤 Speakers</span>
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
```

## Responsive Design

### Mobile-First Approach

The card system uses a mobile-first responsive design approach:

- **Mobile**: Content stacks vertically with controlled media heights
- **Tablet**: Maintains vertical stacking with improved spacing
- **Desktop**: Utilizes horizontal layouts where specified

### Mobile Height Control

For full-width cards with media, use responsive height utilities:

```tsx
// Portrait media
<CardMedia aspectRatio="portrait" className="h-48 md:h-auto md:w-1/3">
  {/* Content */}
</CardMedia>

// Landscape media
<CardMedia aspectRatio="landscape" className="h-40 md:h-auto md:w-2/5">
  {/* Content */}
</CardMedia>
```

### Breakpoint Behavior

| Screen Size       | Orientation Behavior      |
| ----------------- | ------------------------- |
| Mobile (< 768px)  | Always vertical stacking  |
| Desktop (≥ 768px) | Respects orientation prop |

## Best Practices

### 1. Content Hierarchy

- Use `CardHeader` for titles and primary metadata
- Use `CardBody` for main content and descriptions
- Use `CardFooter` for actions and secondary information

### 2. Media Optimization

- Choose appropriate aspect ratios for content type
- Use responsive height controls on mobile
- Ensure images have proper alt text for accessibility

### 3. Badge Usage

- Use `CardBadge` for content within card sections
- Use `CardMediaBadge` for overlays on media
- Choose appropriate variants and sizes for context

### 4. Responsive Design

- Test on multiple screen sizes
- Use appropriate width classes for different contexts
- Consider mobile height constraints for media

### 5. Performance

- Optimize images for web delivery
- Use appropriate image formats (WebP, AVIF)
- Consider lazy loading for large media collections

## Extending the System

### Adding New Components

To add new card sections:

1. Create the component in `Card.tsx`
2. Add TypeScript interfaces
3. Export from the main Card object
4. Update the components index file

### Custom Styling

The system uses Tailwind CSS utility classes. To customize:

1. Override with additional classes via `className` prop
2. Use CSS custom properties for theme-specific values
3. Extend Tailwind configuration for project-specific utilities

### Theme Integration

The card system integrates with DaisyUI themes:

- Automatically adapts to light/dark mode
- Uses semantic color tokens (`primary`, `secondary`, etc.)
- Supports custom theme configurations

## Production Considerations

### Accessibility

- All components include proper `id` attributes
- Images have alt text support
- Keyboard navigation support via `interactive` prop
- ARIA labels can be added via `className` or wrapper elements

### Performance

- Components are optimized for React rendering
- Minimal re-renders through proper prop handling
- Efficient CSS class generation

### Maintainability

- TypeScript provides type safety
- Consistent naming conventions
- Modular component structure
- Comprehensive documentation

## Conclusion

The Card Component System provides a robust foundation for building card-based user interfaces. Its master component architecture allows for maximum flexibility while maintaining consistency and performance. By following the patterns and best practices outlined in this documentation, developers can create powerful, responsive card components for any application.

For specific implementation questions or advanced customization, refer to the component source code in `frontend/src/components/Card.tsx`.
