# GridLayout Component Documentation

## Overview

The GridLayout component is a responsive CSS Grid layout system designed for displaying multiple cards or similar content in a structured grid format. Built with React, TypeScript, and Tailwind CSS, it provides a simple and efficient way to arrange content in equal-width columns with responsive behavior.

## Core Purpose

### Grid Layout for Cards

GridLayout is specifically designed for:

- Displaying multiple cards in a uniform grid
- Responsive column management (1-4 columns)
- Consistent spacing and alignment
- Automatic responsive behavior

### Key Features

- **Responsive Grid**: Automatically adapts columns based on screen size
- **Equal Columns**: All columns have equal width for uniform appearance
- **Flexible Content**: Can contain any React components, not just cards
- **Simple API**: Minimal props for easy configuration

## Component Architecture

### Main Component

#### `GridLayout` (Grid Container)

The primary container that manages the grid layout and responsive behavior.

```tsx
import { GridLayout } from "@/components/GridLayout";

<GridLayout columns={3} gap={6}>
  {/* Grid items */}
</GridLayout>;
```

## Configuration Options

### GridLayout Props

| Prop        | Type               | Default        | Description                               |
| ----------- | ------------------ | -------------- | ----------------------------------------- |
| `columns`   | `1 \| 2 \| 3 \| 4` | `3`            | Number of columns on desktop              |
| `gap`       | `number`           | `6`            | Spacing between grid items (Tailwind gap) |
| `children`  | `React.ReactNode`  | -              | Grid items to render                      |
| `className` | `string`           | `''`           | Additional CSS classes                    |
| `id`        | `string`           | Auto-generated | Unique identifier for the grid            |

## Layout Behavior

### Responsive Design

#### Mobile (< 768px)

- **1 Column**: Always single column
- **2 Columns**: Single column on mobile
- **3 Columns**: 2 columns on mobile, 3 on desktop
- **4 Columns**: 2 columns on mobile, 4 on desktop

#### Desktop (≥ 768px)

- **1 Column**: Single column
- **2 Columns**: 2 equal columns
- **3 Columns**: 3 equal columns
- **4 Columns**: 4 equal columns

### Grid Implementation

```css
/* 1 Column */
grid-cols-1

/* 2 Columns */
grid-cols-2

/* 3 Columns */
grid-cols-2 md:grid-cols-3

/* 4 Columns */
grid-cols-2 md:grid-cols-4
```

### Gap Values

The `gap` prop accepts Tailwind spacing values:

- `1` = 0.25rem (4px)
- `2` = 0.5rem (8px)
- `3` = 0.75rem (12px)
- `4` = 1rem (16px)
- `6` = 1.5rem (24px) - **Default**
- `8` = 2rem (32px)
- `12` = 3rem (48px)

## Usage Examples

### Basic Card Grid

```tsx
import { GridLayout } from "@/components/GridLayout";
import { Card } from "@/components/Card";

<GridLayout columns={3} gap={6}>
  {products.map((product) => (
    <Card key={product.id} width="sm" hover>
      <CardHeader>
        <h3>{product.name}</h3>
      </CardHeader>
      <CardBody>
        <p>{product.description}</p>
      </CardBody>
    </Card>
  ))}
</GridLayout>;
```

### Image Gallery Grid

```tsx
<GridLayout columns={4} gap={4}>
  {images.map((image, index) => (
    <div key={index} className="aspect-square rounded-lg overflow-hidden">
      <img
        src={image.src}
        alt={image.alt}
        className="w-full h-full object-cover hover:scale-105 transition-transform"
      />
    </div>
  ))}
</GridLayout>
```

### Mixed Content Grid

```tsx
<GridLayout columns={2} gap={8}>
  <div className="bg-base-200 rounded-lg p-6">
    <h3>Feature 1</h3>
    <p>Description of feature 1...</p>
  </div>
  <div className="bg-base-200 rounded-lg p-6">
    <h3>Feature 2</h3>
    <p>Description of feature 2...</p>
  </div>
  <div className="bg-base-200 rounded-lg p-6">
    <h3>Feature 3</h3>
    <p>Description of feature 3...</p>
  </div>
  <div className="bg-base-200 rounded-lg p-6">
    <h3>Feature 4</h3>
    <p>Description of feature 4...</p>
  </div>
</GridLayout>
```

### Article Grid

```tsx
<GridLayout columns={3} gap={6}>
  {articles.map((article) => (
    <article
      key={article.id}
      className="bg-base-100 rounded-lg shadow-md overflow-hidden"
    >
      <img
        src={article.image}
        alt={article.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-lg font-semibold mb-2">{article.title}</h3>
        <p className="text-base-content/70 mb-4">{article.excerpt}</p>
        <button className="btn btn-primary btn-sm">Read More</button>
      </div>
    </article>
  ))}
</GridLayout>
```

### User Profile Grid

```tsx
<GridLayout columns={4} gap={6}>
  {users.map((user) => (
    <div key={user.id} className="text-center">
      <div className="w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden">
        <img
          src={user.avatar}
          alt={user.name}
          className="w-full h-full object-cover"
        />
      </div>
      <h3 className="font-semibold">{user.name}</h3>
      <p className="text-sm text-base-content/70">{user.role}</p>
    </div>
  ))}
</GridLayout>
```

## Integration with Other Components

### With Card Components

```tsx
<GridLayout columns={3} gap={6}>
  {products.map((product) => (
    <Card key={product.id} width="sm" hover>
      <CardMedia aspectRatio="square">
        <img src={product.image} alt={product.name} />
      </CardMedia>
      <CardBody>
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <span className="text-xl font-bold">${product.price}</span>
      </CardBody>
      <CardFooter>
        <button className="btn btn-primary">Add to Cart</button>
      </CardFooter>
    </Card>
  ))}
</GridLayout>
```

### With SectionContainer

```tsx
<SectionContainer width="large" padding="medium" bgColor="neutral">
  <div className="mx-auto">
    <h2 className="mb-8 text-center">Featured Products</h2>
    <GridLayout columns={3} gap={6}>
      {/* Grid items */}
    </GridLayout>
  </div>
</SectionContainer>
```

### With ListLayout

```tsx
<div className="space-y-12">
  <div>
    <h3 className="mb-6">Recent Articles</h3>
    <GridLayout columns={2} gap={6}>
      {recentArticles.map((article) => (
        <article key={article.id} className="bg-base-100 rounded-lg p-6">
          <h4>{article.title}</h4>
          <p>{article.excerpt}</p>
        </article>
      ))}
    </GridLayout>
  </div>

  <div>
    <h3 className="mb-6">Popular Products</h3>
    <ListLayout gap={6} columns={2}>
      {popularProducts.map((product) => (
        <ListLayout.Item key={product.id}>
          <img
            src={product.image}
            alt={product.name}
            className="w-16 h-16 rounded"
          />
          <div>
            <h4>{product.name}</h4>
            <p>{product.description}</p>
          </div>
        </ListLayout.Item>
      ))}
    </ListLayout>
  </div>
</div>
```

## Best Practices

### 1. Content Consistency

- Ensure all grid items have similar heights when possible
- Use consistent styling across grid items
- Consider using aspect ratios for images

### 2. Responsive Design

- Test on multiple screen sizes
- Consider content readability on mobile
- Use appropriate column counts for content type

### 3. Performance

- Use `key` props for list items
- Consider lazy loading for large grids
- Optimize images for grid display

### 4. Accessibility

- Ensure proper heading hierarchy
- Provide alt text for images
- Test keyboard navigation

## Common Use Cases

### 1. Product Grids

- E-commerce product listings
- Feature showcases
- Portfolio displays

### 2. Content Grids

- Blog post previews
- Article listings
- News feeds

### 3. Gallery Grids

- Image galleries
- Photo collections
- Media libraries

### 4. Feature Grids

- Service offerings
- Feature highlights
- Team member displays

## Naming Convention Discussion

### Previous Issue

The component was previously named `CardLayout`, which created confusion with:

- The individual `Card` component from `Card.tsx`
- The layout system's purpose (grid vs. individual card)

### Resolution

The component has been renamed to **`GridLayout`** for clarity:

- **Clear Purpose**: Indicates it's for displaying content in a grid
- **Consistent Naming**: Follows the pattern of other layout components
- **Reduced Confusion**: Distinguishes from individual card components
- **Generic Usage**: Can be used for any content, not just cards

### Implementation

```tsx
// Previous usage
import { CardLayout } from "@/components/CardLayout";

// Current usage
import { GridLayout } from "@/components/GridLayout";
```

## Performance Considerations

### Large Grids

For grids with many items, consider:

- Virtual scrolling for very large datasets
- Pagination or infinite scroll
- Lazy loading of images
- Debouncing search/filter operations

### Optimization Tips

- Use `React.memo` for grid items if they're expensive to render
- Implement proper key props for efficient re-rendering
- Consider using `useCallback` for event handlers
- Optimize images and use appropriate formats

## Troubleshooting

### Common Issues

1. **Items not aligning properly**

   - Check that all items have consistent structure
   - Ensure no conflicting CSS classes
   - Verify grid classes are applied correctly

2. **Responsive behavior not working**

   - Confirm Tailwind responsive utilities are available
   - Check for conflicting CSS classes
   - Verify breakpoint values

3. **Spacing issues**
   - Confirm gap values are valid Tailwind classes
   - Check for conflicting margin/padding
   - Verify container width constraints

## Conclusion

The GridLayout component provides a robust foundation for creating responsive grid layouts. Its simple API and flexible design make it ideal for displaying cards, images, and other content in organized grid formats. By following the best practices outlined in this documentation, developers can create effective and performant grid layouts.

For specific implementation questions or advanced customization, refer to the component source code in `frontend/src/components/GridLayout.tsx`.
