import type { Meta, StoryObj } from '../../../.storybook/types';
import Badge, { type Props } from './Badge.astro';

const meta = {
  title: 'Componentes/Badge',
  component: Badge,
  tags: ['autodocs'],
  args: { text: 'Sistema fotovoltaico residencial - Execução Seika', icon: 'sun' },
  globals: { backgrounds: { value: 'inverse' } },
} satisfies Meta<Props>;

export default meta;
type Story = StoryObj<Props>;

export const Desktop: Story = {};

export const Mobile: Story = {
  globals: { viewport: { value: 'mobile' }, backgrounds: { value: 'inverse' } },
};
