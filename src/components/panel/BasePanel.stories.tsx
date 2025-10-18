import type { Meta, StoryObj } from '@storybook/react-vite';

import BasePanel from './BasePanel';

const meta = {
  component: BasePanel,
} satisfies Meta<typeof BasePanel>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: <div className="text-center">
      <h3 className="text-lg font-semibold mb-2">Welcome to BasePanel</h3>
      <p className="text-gray-600">This is a simple example of the BasePanel component.</p>
    </div>
  }
};

export const WithDifferentPadding: Story = {
  args: {
    children: <div className="text-center">
      <h3 className="text-lg font-semibold mb-2">Large Padding</h3>
      <p className="text-gray-600">This panel uses large padding (p-6).</p>
    </div>,
    padding: 'lg'
  }
};

export const WithBackgroundImage: Story = {
  args: {
    children: <div className="text-center text-white">
      <h3 className="text-lg font-semibold mb-2 bg-gray-500">Panel with Background</h3>
      <p className="text-white/80">This panel has a background image with frosted glass effect.</p>
    </div>,
    bgImgUrl: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop',
    bgImgLabel: 'Mountain landscape'
  }
};

export const NoPadding: Story = {
  args: {
    children: <div className="p-4 bg-gray-100 rounded">
      <h3 className="text-lg font-semibold mb-2">No Padding</h3>
      <p className="text-gray-600">This panel has no padding, so content goes to the edges.</p>
    </div>,
    padding: 'none'
  }
};