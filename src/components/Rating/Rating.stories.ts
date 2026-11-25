import type { Meta, StoryObj } from '../../../.storybook/types';
import Rating, { type Props } from './Rating.astro';

const meta = {
  title: 'Componentes/Rating',
  component: Rating,
  tags: ['autodocs'],
  argTypes: { size: { control: 'inline-radio', options: ['P', 'M'] } },
  args: { size: 'P' },
} satisfies Meta<Props>;

export default meta;
type Story = StoryObj<Props>;

export const P: Story = {};
export const M: Story = { args: { size: 'M' } };
