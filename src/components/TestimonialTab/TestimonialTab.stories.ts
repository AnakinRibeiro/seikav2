import type { Meta, StoryObj } from '../../../.storybook/types';
import TabListWrapper from '../../../.storybook/decorators/TabListWrapper.astro';
import TestimonialTab, { type Props } from './TestimonialTab.astro';

const meta = {
  title: 'Componentes/TestimonialTab',
  component: TestimonialTab,
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
  decorators: [() => ({ component: TabListWrapper })],
  args: {
    initials: 'SA',
    name: 'Sílvio Alberto',
    description: 'Cliente residencial',
    selected: true,
    class: 'tablet:w-92',
  },
} satisfies Meta<Props>;

export default meta;
type Story = StoryObj<Props>;

export const Ativa: Story = {};
export const Inativa: Story = { args: { selected: false } };
export const AtivaMobile: Story = {
  name: 'Ativa (mobile)',
  globals: { viewport: { value: 'mobile' } },
};
export const InativaMobile: Story = {
  name: 'Inativa (mobile)',
  args: { selected: false },
  globals: { viewport: { value: 'mobile' } },
};
