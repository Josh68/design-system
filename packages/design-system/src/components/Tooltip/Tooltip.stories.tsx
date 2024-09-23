import Tooltip from './Tooltip';
import TooltipIcon from './TooltipIcon';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Tooltip> = {
  title: 'Components/Tooltip',
  component: Tooltip as any,
  subcomponents: { TooltipIcon },
  decorators: [
    (Story) => (
      <div style={{ margin: '11rem auto', textAlign: 'center' }}>
        <Story />
      </div>
    ),
  ],
  argTypes: {
    placement: {
      options: [
        'auto',
        'auto-start',
        'auto-end',
        'left',
        'left-start',
        'left-end',
        'right',
        'right-start',
        'right-end',
        'top',
        'top-start',
        'top-end',
        'bottom',
        'bottom-start',
        'bottom-end',
      ],
      control: 'radio',
    },
  },
  parameters: {
    docs: {
      underlyingHtmlElements: ['a', 'button'],
    },
  },
};
export default meta;

type Story = StoryObj<typeof Tooltip>;

export const IconTrigger: Story = {
  render: function Component(args) {
    return (
      <>
        <p className="ds-u-margin--0 ds-u-display--inline">Tooltip with icon trigger</p>
        <Tooltip {...(args as any)} />
      </>
    );
  },
  args: {
    ariaLabel: 'Label describing the subject of the tooltip',
    className: 'ds-c-tooltip__trigger-icon ds-u-display--inline',
    title: 'Tooltip trigger uses <TooltipIcon> for the trigger content',
    children: <TooltipIcon />,
  },
};

export const InlineTrigger: Story = {
  render: function Component(args) {
    return (
      <>
        <span>Tooltip with&nbsp;</span>
        <Tooltip {...(args as any)} />
      </>
    );
  },
  args: {
    className: 'ds-c-tooltip__trigger-link',
    component: 'a',
    title: 'Tooltip trigger uses <a> for the trigger, styled with dotted underline',
    children: 'inline trigger',
  },
};

export const InversedTrigger: Story = {
  render: function Component(args) {
    return (
      <>
        <p className="ds-u-margin--0 ds-u-color--base-inverse ds-u-display--inline">
          Tooltip with icon trigger
        </p>
        <Tooltip {...(args as any)} />
      </>
    );
  },
  parameters: {
    // Must supply `layout: 'fullscreen'` when we use `onDark: true`
    onDark: true,
    layout: 'fullscreen',
  },
  args: {
    ariaLabel: 'Label describing the subject of the tooltip',
    className: 'ds-c-tooltip__trigger-icon ds-u-display--inline',
    title: 'Tooltip trigger uses <TooltipIcon> for the trigger content',
    children: <TooltipIcon inversed />,
    inversed: true,
  },
};
