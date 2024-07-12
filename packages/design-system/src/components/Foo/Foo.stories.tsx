import type { Meta, StoryObj } from '@storybook/react';
import Foo from './Foo';
import { bool } from 'prop-types';

const meta: Meta = {
  component: Foo,
  argTypes: {
    children: { control: 'text' },
    bool: { control: 'boolean' },
  },
  args: {
    bool: false,
  },
  parameters: {
    docs: {
      underlyingHtmlElements: ['p'],
    },
  },
};

export default meta;

type Story = StoryObj<typeof Foo>;
const FooTemplate: Story = {
  render: ({ ...args }) => {
    return <Foo {...args}>{args.children}</Foo>;
  },
};

/**
 * This is a Foo component with some text.
 */

export const Default = {
  ...FooTemplate,
  args: {
    children: 'Hello, world!',
  },
};
