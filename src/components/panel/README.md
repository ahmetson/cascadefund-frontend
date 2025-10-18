# Panel Components

A modern panel system built with shadcn-ui Card components featuring frosted glass effects and interactive capabilities.

## Components

### BasePanel
The foundation panel component with frosted glass background effects.

```tsx
import { BasePanel } from '@/components/panel'

<BasePanel
  bgImgUrl="/path/to/image.jpg"
  bgImgLabel="Background image"
  padding="lg"
  className="custom-styles"
>
  <p>Your content here</p>
</BasePanel>
```

### InteractivePanel
Extends BasePanel with hover effects and expandable functionality.

```tsx
import { InteractivePanel } from '@/components/panel'

<InteractivePanel
  expandable={true}
  defaultExpanded={false}
  hoverable={true}
  onHover={(hovered) => console.log('Hovered:', hovered)}
  onClick={() => console.log('Clicked')}
>
  <p>Interactive content</p>
</InteractivePanel>
```

### PageLikePanel
A full-featured panel with title, actions, and content layout.

```tsx
import { PageLikePanel } from '@/components/panel'

<PageLikePanel
  icon="project"
  title="Project Dashboard"
  subtitle="Manage your projects"
  rightHeader={<button>Settings</button>}
  actions={[
    { variant: 'primary', children: 'Save', onClick: () => {} },
    { variant: 'outline', children: 'Cancel', onClick: () => {} }
  ]}
  contentHeight="300px"
  hoverable={true}
  expandable={true}
  bgImgUrl="/background.jpg"
>
  <p>Panel content with scrollable area</p>
</PageLikePanel>
```

## Features

- **Frosted Glass Effect**: Background images are automatically blurred with backdrop blur
- **Interactive Hover**: Smooth hover animations with gradient borders
- **Expandable Content**: Collapsible panels with smooth animations
- **Flexible Layout**: Support for titles, subtitles, icons, and action buttons
- **Scrollable Content**: Optional content height with scroll functionality
- **TypeScript Support**: Full type safety with comprehensive interfaces

## Props

All components extend the base panel props and support:
- `bgImgUrl`: Background image URL for frosted glass effect
- `bgImgLabel`: Alt text for background image
- `padding`: 'none' | 'sm' | 'md' | 'lg'
- `className`: Additional CSS classes
- `children`: Panel content
