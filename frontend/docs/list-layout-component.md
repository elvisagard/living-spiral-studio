# ListLayout Component Documentation

## Overview

The ListLayout component is a flexible, responsive layout system designed for presenting directory-style lists with thumbnails, titles, and descriptions. Built with React, TypeScript, and Tailwind CSS, it provides a clean and consistent way to display list-based content across different screen sizes.

## Core Philosophy

### Directory-Style Lists

ListLayout is specifically designed for presenting content in a directory or list format where each item typically contains:

- A thumbnail or icon
- A title or heading
- A description or metadata
- Optional actions or additional content

### Key Principles

- **Responsive**: Automatically adapts from single column on mobile to multi-column on desktop
- **Flexible**: Supports 1-3 columns with configurable spacing
- **Consistent**: Unified hover states and spacing across all list items
- **Accessible**: Proper semantic structure with unique IDs for each item

## Component Architecture

### Main Components

#### `ListLayout` (Container)

The primary container that manages the overall list structure and responsive behavior.

```tsx
import { ListLayout } from "@/components/ListLayout";

<ListLayout gap={6} columns={2}>
  {/* List items */}
</ListLayout>;
```

#### `ListLayout.Item` (Item Wrapper)

Individual list item wrapper that provides consistent styling and hover effects.

```tsx
import { ListLayout } from "@/components/ListLayout";

<ListLayout.Item>
  <img src="thumbnail.jpg" alt="Description" className="w-16 h-16 rounded" />
  <div>
    <h3>Item Title</h3>
    <p>Item description...</p>
  </div>
</ListLayout.Item>;
```

## Configuration Options

### ListLayout Props

| Prop        | Type              | Default        | Description                                         |
| ----------- | ----------------- | -------------- | --------------------------------------------------- |
| `gap`       | `number`          | `4`            | Vertical spacing between items (Tailwind gap value) |
| `columns`   | `1 \| 2 \| 3`     | `1`            | Number of columns on desktop (stacks on mobile)     |
| `children`  | `React.ReactNode` | -              | List items to render                                |
| `className` | `string`          | `''`           | Additional CSS classes                              |
| `id`        | `string`          | Auto-generated | Unique identifier for the list                      |

### ListLayout.Item Props

| Prop        | Type              | Default        | Description                       |
| ----------- | ----------------- | -------------- | --------------------------------- |
| `children`  | `React.ReactNode` | -              | Content to render inside the item |
| `className` | `string`          | `''`           | Additional CSS classes            |
| `id`        | `string`          | Auto-generated | Unique identifier for the item    |

## Layout Behavior

### Responsive Design

#### Mobile (< 768px)

- **Layout**: Single column (`flex flex-col`)
- **Spacing**: Uses `space-y-{gap}` for vertical spacing
- **Items**: Full width with consistent padding

#### Desktop (≥ 768px)

- **Layout**: Grid with specified columns (`grid grid-cols-1 md:grid-cols-{columns}`)
- **Spacing**: Uses `gap-{gap}` for grid spacing
- **Items**: Distributed across columns

### Column Options

| Columns | Mobile        | Desktop       | Use Case                       |
| ------- | ------------- | ------------- | ------------------------------ |
| `1`     | Single column | Single column | Simple lists, navigation menus |
| `2`     | Single column | Two columns   | Directory listings, user lists |
| `3`     | Single column | Three columns | Gallery grids, feature lists   |

### Gap Values

The `gap` prop accepts Tailwind spacing values:

- `1` = 0.25rem (4px)
- `2` = 0.5rem (8px)
- `3` = 0.75rem (12px)
- `4` = 1rem (16px)
- `6` = 1.5rem (24px)
- `8` = 2rem (32px)
- `12` = 3rem (48px)

## Usage Examples

### Basic Single Column List

```tsx
import { ListLayout } from "@/components/ListLayout";

<ListLayout gap={6}>
  <ListLayout.Item>
    <img
      src="https://picsum.photos/seed/1/64/64"
      alt="Thumbnail"
      className="w-16 h-16 rounded object-cover"
    />
    <div>
      <div className="font-semibold">Item Title</div>
      <div className="text-slate-500 text-sm">
        This is a description for the item.
      </div>
    </div>
  </ListLayout.Item>

  <ListLayout.Item>
    <img
      src="https://picsum.photos/seed/2/64/64"
      alt="Thumbnail"
      className="w-16 h-16 rounded object-cover"
    />
    <div>
      <div className="font-semibold">Another Item</div>
      <div className="text-slate-500 text-sm">Another item description.</div>
    </div>
  </ListLayout.Item>
</ListLayout>;
```

### Two Column Directory List

```tsx
<ListLayout gap={6} columns={2}>
  {users.map((user) => (
    <ListLayout.Item key={user.id}>
      <img
        src={user.avatar}
        alt={`${user.name} avatar`}
        className="w-16 h-16 rounded-full object-cover"
      />
      <div className="flex-1">
        <div className="font-semibold">{user.name}</div>
        <div className="text-slate-500 text-sm">{user.role}</div>
        <div className="text-xs text-slate-400">{user.email}</div>
      </div>
      <button className="btn btn-sm btn-outline">View Profile</button>
    </ListLayout.Item>
  ))}
</ListLayout>
```

### Three Column Gallery Grid

```tsx
<ListLayout gap={6} columns={3}>
  {products.map((product) => (
    <ListLayout.Item key={product.id}>
      <img
        src={product.image}
        alt={product.name}
        className="w-16 h-16 rounded object-cover"
      />
      <div className="flex-1">
        <div className="font-semibold">{product.name}</div>
        <div className="text-slate-500 text-sm">{product.category}</div>
        <div className="text-primary font-medium">${product.price}</div>
      </div>
      <div className="flex gap-2">
        <button className="btn btn-sm btn-primary">Add to Cart</button>
        <button className="btn btn-sm btn-ghost">❤️</button>
      </div>
    </ListLayout.Item>
  ))}
</ListLayout>
```

### Navigation Menu

```tsx
<ListLayout gap={4}>
  {menuItems.map((item) => (
    <ListLayout.Item key={item.id} className="cursor-pointer">
      <div className="w-16 h-16 rounded bg-primary/10 flex items-center justify-center">
        <span className="text-2xl">{item.icon}</span>
      </div>
      <div className="flex-1">
        <div className="font-semibold">{item.title}</div>
        <div className="text-slate-500 text-sm">{item.description}</div>
      </div>
      <div className="text-slate-400">→</div>
    </ListLayout.Item>
  ))}
</ListLayout>
```

### File Directory

```tsx
<ListLayout gap={4}>
  {files.map((file) => (
    <ListLayout.Item key={file.id}>
      <div className="w-16 h-16 rounded bg-secondary/10 flex items-center justify-center">
        <span className="text-2xl">{file.type === "folder" ? "📁" : "📄"}</span>
      </div>
      <div className="flex-1">
        <div className="font-semibold">{file.name}</div>
        <div className="text-slate-500 text-sm">
          {file.type === "folder"
            ? "Folder"
            : `${file.size} • ${file.modified}`}
        </div>
      </div>
      <div className="flex gap-2">
        <button className="btn btn-sm btn-ghost">Open</button>
        <button className="btn btn-sm btn-ghost">⋮</button>
      </div>
    </ListLayout.Item>
  ))}
</ListLayout>
```

## Styling and Customization

### Default Item Styling

Each `ListLayout.Item` includes these default styles:

- `w-full`: Full width
- `flex items-center gap-x-4`: Horizontal layout with spacing
- `rounded`: Rounded corners
- `transition`: Smooth transitions
- `hover:bg-base-100`: Hover background effect

### Customizing Item Appearance

```tsx
// Custom hover effect
<ListLayout.Item className="hover:bg-primary/5 hover:scale-105 transition-transform">
  {/* Content */}
</ListLayout.Item>

// Custom spacing
<ListLayout.Item className="gap-x-6">
  {/* Content with more spacing */}
</ListLayout.Item>

// Custom background
<ListLayout.Item className="bg-base-200/50 rounded-lg p-4">
  {/* Content with background */}
</ListLayout.Item>
```

### Customizing List Container

```tsx
// Custom background and padding
<ListLayout
  gap={6}
  columns={2}
  className="bg-base-200/30 rounded-lg p-6"
>
  {/* Items */}
</ListLayout>

// Custom responsive behavior
<ListLayout
  gap={6}
  columns={2}
  className="md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
>
  {/* Items with custom breakpoints */}
</ListLayout>
```

## Best Practices

### 1. Content Structure

- Use consistent thumbnail sizes (typically 64x64px or 48x48px)
- Keep titles concise and descriptive
- Use secondary text for metadata or descriptions
- Place actions on the right side when possible

### 2. Responsive Design

- Test on multiple screen sizes
- Ensure content remains readable on mobile
- Consider touch targets for interactive elements
- Use appropriate gap values for different content types

### 3. Accessibility

- Provide meaningful alt text for images
- Use semantic HTML elements within items
- Ensure sufficient color contrast
- Test keyboard navigation

### 4. Performance

- Optimize images for web delivery
- Use appropriate image formats (WebP, AVIF)
- Consider lazy loading for large lists
- Memoize list items when appropriate

### 5. Content Guidelines

- Keep item heights consistent when possible
- Use clear, descriptive titles
- Provide helpful metadata in descriptions
- Include relevant actions or CTAs

## Common Use Cases

### 1. User Directories

- Employee lists
- Team member directories
- User search results
- Contact lists

### 2. Content Lists

- Blog post lists
- Article directories
- News feeds
- Resource libraries

### 3. Navigation Menus

- Dashboard navigation
- Settings menus
- Feature lists
- Help documentation

### 4. File Management

- File browsers
- Document lists
- Media galleries
- Asset libraries

### 5. E-commerce

- Product lists
- Category browsing
- Search results
- Wishlist items

## Integration with Other Components

### With Card Components

```tsx
<ListLayout gap={6} columns={2}>
  {items.map((item) => (
    <ListLayout.Item key={item.id}>
      <Card width="sm" className="w-full">
        <CardMedia aspectRatio="square">
          <img src={item.image} alt={item.title} />
        </CardMedia>
        <CardBody>
          <h3>{item.title}</h3>
          <p>{item.description}</p>
        </CardBody>
      </Card>
    </ListLayout.Item>
  ))}
</ListLayout>
```

### With SidebarLayout

```tsx
<SidebarLayout sidebar={<NavigationMenu />}>
  <ListLayout gap={6} columns={2}>
    {/* Main content list */}
  </ListLayout>
</SidebarLayout>
```

## Performance Considerations

### Large Lists

For lists with many items, consider:

- Virtual scrolling for very large datasets
- Pagination or infinite scroll
- Lazy loading of images
- Debouncing search/filter operations

### Optimization Tips

- Use `React.memo` for list items if they're expensive to render
- Implement proper key props for efficient re-rendering
- Consider using `useCallback` for event handlers
- Optimize images and use appropriate formats

## Troubleshooting

### Common Issues

1. **Items not aligning properly**

   - Check that all items have consistent content structure
   - Ensure images have consistent dimensions
   - Verify flex/grid classes are applied correctly

2. **Responsive behavior not working**

   - Confirm Tailwind responsive utilities are available
   - Check for conflicting CSS classes
   - Verify breakpoint values

3. **Hover effects not working**

   - Ensure no conflicting hover styles
   - Check that `transition` classes are applied
   - Verify hover state specificity

4. **Spacing issues**
   - Confirm gap values are valid Tailwind classes
   - Check for conflicting margin/padding
   - Verify container width constraints

## Conclusion

The ListLayout component provides a robust foundation for creating directory-style lists and navigation menus. Its responsive design, flexible configuration options, and consistent styling make it ideal for a wide range of use cases. By following the best practices outlined in this documentation, developers can create effective and accessible list-based interfaces.

For specific implementation questions or advanced customization, refer to the component source code in `frontend/src/components/ListLayout.tsx`.
