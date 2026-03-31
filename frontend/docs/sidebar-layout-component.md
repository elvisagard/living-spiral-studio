# SidebarLayout Component Documentation

## Overview

The SidebarLayout component is a responsive layout system designed for creating two-column layouts with a sidebar and main content area. Built with React, TypeScript, and Tailwind CSS, it provides a flexible and consistent way to build layouts commonly used in blogs, dashboards, documentation sites, and content management systems.

## Core Philosophy

### Two-Column Layouts

SidebarLayout is specifically designed for layouts that require:

- A sidebar with navigation, controls, or supplementary content
- A main content area for primary content
- Responsive behavior that adapts to different screen sizes
- Flexible positioning (sidebar on left or right)

### Key Principles

- **Responsive**: Stacks vertically on mobile, side-by-side on desktop
- **Flexible**: Supports both left and right sidebar positioning
- **Consistent**: Unified spacing and behavior across all instances
- **Accessible**: Proper semantic structure with `main` and `aside` elements

## Component Architecture

### Main Component

#### `SidebarLayout` (Container)

The primary container that manages the sidebar and main content layout.

```tsx
import { SidebarLayout } from "@/components/SidebarLayout";

<SidebarLayout sidebar={<NavigationMenu />} sidebarPosition="left" gap={8}>
  <MainContent />
</SidebarLayout>;
```

## Configuration Options

### SidebarLayout Props

| Prop              | Type                | Default        | Description                                         |
| ----------------- | ------------------- | -------------- | --------------------------------------------------- |
| `sidebar`         | `React.ReactNode`   | -              | Content to render in the sidebar                    |
| `children`        | `React.ReactNode`   | -              | Content to render in the main area                  |
| `sidebarPosition` | `'left' \| 'right'` | `'left'`       | Position of the sidebar                             |
| `gap`             | `number`            | `8`            | Horizontal spacing between sidebar and main content |
| `className`       | `string`            | `''`           | Additional CSS classes                              |
| `id`              | `string`            | Auto-generated | Unique identifier for the layout                    |

## Layout Behavior

### Responsive Design

#### Mobile (< 768px)

- **Layout**: Vertical stacking (`grid-cols-1`)
- **Order**: Sidebar appears above main content
- **Spacing**: Uses `mb-8` for vertical spacing between sidebar and main content
- **Width**: Both sidebar and main content are full width

#### Desktop (≥ 768px)

- **Layout**: Side-by-side using CSS Grid
- **Sidebar Width**: Fixed at 300px (`md:grid-cols-[300px_1fr]` or `md:grid-cols-[1fr_300px]`)
- **Main Content**: Flexible width that fills remaining space
- **Spacing**: Uses `gap-{gap}` for horizontal spacing

### Sidebar Positioning

#### Left Sidebar (Default)

- **Mobile**: Sidebar appears first, then main content
- **Desktop**: Sidebar on left, main content on right
- **Grid Template**: `md:grid-cols-[300px_1fr]`

#### Right Sidebar

- **Mobile**: Sidebar appears first, then main content
- **Desktop**: Main content on left, sidebar on right
- **Grid Template**: `md:grid-cols-[1fr_300px]`

### Gap Values

The `gap` prop accepts Tailwind spacing values:

- `1` = 0.25rem (4px)
- `2` = 0.5rem (8px)
- `3` = 0.75rem (12px)
- `4` = 1rem (16px)
- `6` = 1.5rem (24px)
- `8` = 2rem (32px) - **Default**
- `12` = 3rem (48px)
- `16` = 4rem (64px)

## Usage Examples

### Basic Left Sidebar Layout

```tsx
import { SidebarLayout } from "@/components/SidebarLayout";

<SidebarLayout
  sidebar={
    <div className="bg-base-200 rounded-lg p-6">
      <h3 className="font-semibold mb-4">Navigation</h3>
      <nav className="space-y-2">
        <a href="#" className="block p-2 rounded hover:bg-base-300">
          Dashboard
        </a>
        <a href="#" className="block p-2 rounded hover:bg-base-300">
          Profile
        </a>
        <a href="#" className="block p-2 rounded hover:bg-base-300">
          Settings
        </a>
      </nav>
    </div>
  }
>
  <div className="bg-base-100 rounded-lg p-6">
    <h1 className="text-2xl font-bold mb-4">Main Content</h1>
    <p>This is the main content area of the layout.</p>
  </div>
</SidebarLayout>;
```

### Right Sidebar Layout

```tsx
<SidebarLayout
  sidebar={
    <div className="bg-secondary/10 rounded-lg p-6">
      <h3 className="font-semibold mb-4">Related Content</h3>
      <div className="space-y-3">
        <div className="p-3 bg-base-200 rounded">
          <h4 className="font-medium">Related Article 1</h4>
          <p className="text-sm text-base-content/70">Brief description...</p>
        </div>
        <div className="p-3 bg-base-200 rounded">
          <h4 className="font-medium">Related Article 2</h4>
          <p className="text-sm text-base-content/70">Brief description...</p>
        </div>
      </div>
    </div>
  }
  sidebarPosition="right"
  gap={6}
>
  <article className="prose max-w-none">
    <h1>Article Title</h1>
    <p>Article content goes here...</p>
    <p>More content...</p>
  </article>
</SidebarLayout>
```

### Dashboard Layout

```tsx
<SidebarLayout
  sidebar={
    <div className="bg-base-200 rounded-lg p-6">
      <div className="mb-6">
        <h2 className="text-xl font-bold">Dashboard</h2>
        <p className="text-sm text-base-content/70">Welcome back, User</p>
      </div>

      <nav className="space-y-1">
        <a
          href="#"
          className="flex items-center p-3 rounded-lg bg-primary text-primary-content"
        >
          <span className="mr-3">📊</span>
          Overview
        </a>
        <a
          href="#"
          className="flex items-center p-3 rounded-lg hover:bg-base-300"
        >
          <span className="mr-3">📈</span>
          Analytics
        </a>
        <a
          href="#"
          className="flex items-center p-3 rounded-lg hover:bg-base-300"
        >
          <span className="mr-3">👥</span>
          Users
        </a>
        <a
          href="#"
          className="flex items-center p-3 rounded-lg hover:bg-base-300"
        >
          <span className="mr-3">⚙️</span>
          Settings
        </a>
      </nav>
    </div>
  }
  gap={8}
>
  <div className="space-y-6">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="bg-base-200 rounded-lg p-6">
        <h3 className="font-semibold">Total Users</h3>
        <p className="text-3xl font-bold text-primary">1,234</p>
      </div>
      <div className="bg-base-200 rounded-lg p-6">
        <h3 className="font-semibold">Revenue</h3>
        <p className="text-3xl font-bold text-success">$45,678</p>
      </div>
      <div className="bg-base-200 rounded-lg p-6">
        <h3 className="font-semibold">Orders</h3>
        <p className="text-3xl font-bold text-warning">567</p>
      </div>
    </div>

    <div className="bg-base-200 rounded-lg p-6">
      <h3 className="font-semibold mb-4">Recent Activity</h3>
      <div className="space-y-3">
        <div className="flex items-center gap-3">
          <div className="w-2 h-2 bg-success rounded-full"></div>
          <span className="text-sm">New user registered</span>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-2 h-2 bg-warning rounded-full"></div>
          <span className="text-sm">Order completed</span>
        </div>
      </div>
    </div>
  </div>
</SidebarLayout>
```

### Documentation Layout

```tsx
<SidebarLayout
  sidebar={
    <div className="bg-base-200 rounded-lg p-6">
      <h3 className="font-semibold mb-4">Documentation</h3>
      <nav className="space-y-2">
        <div>
          <h4 className="font-medium text-sm text-base-content/70 mb-2">
            Getting Started
          </h4>
          <div className="space-y-1 ml-2">
            <a href="#" className="block text-sm p-2 rounded hover:bg-base-300">
              Installation
            </a>
            <a href="#" className="block text-sm p-2 rounded hover:bg-base-300">
              Quick Start
            </a>
            <a
              href="#"
              className="block text-sm p-2 rounded bg-primary text-primary-content"
            >
              Components
            </a>
          </div>
        </div>
        <div>
          <h4 className="font-medium text-sm text-base-content/70 mb-2">
            Layouts
          </h4>
          <div className="space-y-1 ml-2">
            <a href="#" className="block text-sm p-2 rounded hover:bg-base-300">
              SidebarLayout
            </a>
            <a href="#" className="block text-sm p-2 rounded hover:bg-base-300">
              CardLayout
            </a>
            <a href="#" className="block text-sm p-2 rounded hover:bg-base-300">
              ListLayout
            </a>
          </div>
        </div>
      </nav>
    </div>
  }
  sidebarPosition="right"
  gap={6}
>
  <article className="prose max-w-none">
    <h1>SidebarLayout Component</h1>
    <p>
      The SidebarLayout component provides a responsive two-column layout...
    </p>

    <h2>Usage</h2>
    <pre className="bg-base-300 p-4 rounded">
      <code>{`<SidebarLayout sidebar={<Nav />}>
  <MainContent />
</SidebarLayout>`}</code>
    </pre>

    <h2>Props</h2>
    <table className="w-full border-collapse">
      <thead>
        <tr className="border-b">
          <th className="text-left p-2">Prop</th>
          <th className="text-left p-2">Type</th>
          <th className="text-left p-2">Default</th>
        </tr>
      </thead>
      <tbody>
        <tr className="border-b">
          <td className="p-2">sidebar</td>
          <td className="p-2">React.ReactNode</td>
          <td className="p-2">-</td>
        </tr>
        <tr className="border-b">
          <td className="p-2">sidebarPosition</td>
          <td className="p-2">'left' | 'right'</td>
          <td className="p-2">'left'</td>
        </tr>
      </tbody>
    </table>
  </article>
</SidebarLayout>
```

### Blog Layout

```tsx
<SidebarLayout
  sidebar={
    <div className="bg-base-200 rounded-lg p-6">
      <div className="mb-6">
        <h3 className="font-semibold mb-2">About</h3>
        <p className="text-sm text-base-content/70">
          A blog about web development, design, and technology.
        </p>
      </div>

      <div className="mb-6">
        <h3 className="font-semibold mb-2">Categories</h3>
        <div className="space-y-1">
          <a href="#" className="block text-sm p-2 rounded hover:bg-base-300">
            Web Development
          </a>
          <a href="#" className="block text-sm p-2 rounded hover:bg-base-300">
            Design
          </a>
          <a href="#" className="block text-sm p-2 rounded hover:bg-base-300">
            Technology
          </a>
        </div>
      </div>

      <div>
        <h3 className="font-semibold mb-2">Recent Posts</h3>
        <div className="space-y-3">
          <div>
            <h4 className="text-sm font-medium">Getting Started with React</h4>
            <p className="text-xs text-base-content/70">2 days ago</p>
          </div>
          <div>
            <h4 className="text-sm font-medium">CSS Grid Layout</h4>
            <p className="text-xs text-base-content/70">1 week ago</p>
          </div>
        </div>
      </div>
    </div>
  }
  sidebarPosition="right"
  gap={8}
>
  <article className="prose max-w-none">
    <header className="mb-8">
      <h1 className="text-4xl font-bold mb-4">Building Responsive Layouts</h1>
      <div className="flex items-center gap-4 text-sm text-base-content/70">
        <span>By John Doe</span>
        <span>•</span>
        <span>March 15, 2024</span>
        <span>•</span>
        <span>5 min read</span>
      </div>
    </header>

    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>

    <h2>Understanding Layout Systems</h2>
    <p>Modern web development requires flexible and responsive layouts...</p>

    <h2>CSS Grid vs Flexbox</h2>
    <p>Both CSS Grid and Flexbox have their strengths...</p>
  </article>
</SidebarLayout>
```

## Styling and Customization

### Default Styling

The SidebarLayout component includes these default styles:

- **Container**: CSS Grid with responsive breakpoints
- **Sidebar**: Fixed width of 300px on desktop, full width on mobile
- **Main Content**: Flexible width that fills remaining space
- **Spacing**: Configurable gap between sidebar and main content
- **Overflow**: Hidden overflow to prevent content from breaking layout

### Customizing Layout

```tsx
// Custom sidebar width
<SidebarLayout
  sidebar={<SidebarContent />}
  className="md:grid-cols-[250px_1fr]" // Custom sidebar width
>
  <MainContent />
</SidebarLayout>

// Custom responsive behavior
<SidebarLayout
  sidebar={<SidebarContent />}
  className="lg:grid-cols-[300px_1fr]" // Use lg breakpoint instead of md
>
  <MainContent />
</SidebarLayout>

// Custom background and padding
<SidebarLayout
  sidebar={<SidebarContent />}
  className="bg-base-200 p-6 rounded-lg"
>
  <MainContent />
</SidebarLayout>
```

### Customizing Sidebar Content

```tsx
// Sticky sidebar
<SidebarLayout
  sidebar={
    <div className="sticky top-4 bg-base-200 rounded-lg p-6">
      <SidebarContent />
    </div>
  }
>
  <MainContent />
</SidebarLayout>

// Sidebar with scroll
<SidebarLayout
  sidebar={
    <div className="bg-base-200 rounded-lg p-6 max-h-[80vh] overflow-y-auto">
      <SidebarContent />
    </div>
  }
>
  <MainContent />
</SidebarLayout>
```

## Best Practices

### 1. Content Organization

- Use sidebar for navigation, controls, or supplementary content
- Keep main content focused on primary information
- Ensure sidebar content is relevant and useful
- Consider the user's workflow and information hierarchy

### 2. Responsive Design

- Test on multiple screen sizes
- Ensure content remains accessible on mobile
- Consider collapsible sidebar for mobile
- Use appropriate spacing for different screen sizes

### 3. Accessibility

- Use semantic HTML elements (`main`, `aside`)
- Ensure proper heading hierarchy
- Provide keyboard navigation for sidebar links
- Consider screen reader navigation patterns

### 4. Performance

- Keep sidebar content lightweight
- Consider lazy loading for heavy sidebar content
- Optimize images and media in sidebar
- Use appropriate caching strategies

### 5. Content Guidelines

- Keep sidebar width consistent across pages
- Use clear, descriptive navigation labels
- Provide visual feedback for active states
- Consider breadcrumbs for deep navigation

## Common Use Cases

### 1. Dashboards

- Navigation menu in sidebar
- Main content area for charts and data
- Quick actions and filters in sidebar
- User profile and settings access

### 2. Documentation Sites

- Table of contents in sidebar
- Main content area for articles
- Search and navigation in sidebar
- Related links and references

### 3. Blogs and Content Sites

- Category navigation in sidebar
- Main content area for articles
- Author information and social links
- Related posts and advertisements

### 4. E-commerce

- Category filters in sidebar
- Main content area for products
- Shopping cart and account info
- Recently viewed items

### 5. Admin Panels

- Main navigation in sidebar
- Content management area
- User management and settings
- System status and notifications

## Integration with Other Components

### With Navigation Components

```tsx
<SidebarLayout sidebar={<NavigationMenu />}>
  <MainContent />
</SidebarLayout>
```

### With Card Components

```tsx
<SidebarLayout sidebar={<FilterPanel />}>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {products.map((product) => (
      <Card key={product.id}>
        <CardMedia aspectRatio="square">
          <img src={product.image} alt={product.name} />
        </CardMedia>
        <CardBody>
          <h3>{product.name}</h3>
          <p>{product.description}</p>
        </CardBody>
      </Card>
    ))}
  </div>
</SidebarLayout>
```

### With ListLayout

```tsx
<SidebarLayout sidebar={<CategoryMenu />}>
  <ListLayout gap={6} columns={2}>
    {articles.map((article) => (
      <ListLayout.Item key={article.id}>
        <img src={article.thumbnail} alt={article.title} />
        <div>
          <h3>{article.title}</h3>
          <p>{article.excerpt}</p>
        </div>
      </ListLayout.Item>
    ))}
  </ListLayout>
</SidebarLayout>
```

## Performance Considerations

### Large Sidebars

For sidebars with many items, consider:

- Virtual scrolling for very large navigation lists
- Lazy loading of sidebar content
- Collapsible sections for better organization
- Search functionality for quick navigation

### Optimization Tips

- Use `React.memo` for sidebar components if they're expensive to render
- Implement proper key props for navigation items
- Consider using `useCallback` for event handlers
- Optimize images and media in sidebar content

## Troubleshooting

### Common Issues

1. **Sidebar not appearing correctly**

   - Check that sidebar content is provided
   - Verify CSS Grid classes are applied correctly
   - Ensure no conflicting CSS is overriding layout

2. **Responsive behavior not working**

   - Confirm Tailwind responsive utilities are available
   - Check for conflicting CSS classes
   - Verify breakpoint values

3. **Content overflow issues**

   - Check that `overflow-hidden` is applied
   - Ensure content fits within sidebar width
   - Consider using `overflow-y-auto` for scrollable content

4. **Spacing issues**
   - Confirm gap values are valid Tailwind classes
   - Check for conflicting margin/padding
   - Verify container width constraints

## Conclusion

The SidebarLayout component provides a robust foundation for creating responsive two-column layouts. Its flexible configuration options, consistent behavior, and accessibility features make it ideal for a wide range of applications. By following the best practices outlined in this documentation, developers can create effective and user-friendly sidebar layouts.

For specific implementation questions or advanced customization, refer to the component source code in `frontend/src/components/SidebarLayout.tsx`.
