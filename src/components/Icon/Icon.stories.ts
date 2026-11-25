import type { Meta, StoryObj } from '../../../.storybook/types';
import Icon, { type Props } from './Icon.astro';

const names = [
  'arrow-left',
  'arrow-right',
  'arrow-up-right',
  'award',
  'chat',
  'facebook',
  'help',
  'home',
  'image',
  'instagram',
  'leaf',
  'linkedin',
  'mail',
  'menu',
  'minus',
  'pin',
  'plus',
  'shield',
  'star',
  'sun',
  'trend-down',
  'wrench',
  'zap',
] as const;

const meta = {
  title: 'Componentes/Icon',
  component: Icon,
  tags: ['autodocs'],
  argTypes: {
    name: { control: 'select', options: names },
    size: { control: { type: 'number', min: 12, max: 64, step: 2 } },
    class: {
      control: 'select',
      options: ['text-icon-primary', 'text-icon-accent', 'text-icon-on-photo'],
    },
  },
  args: { name: 'sun', size: 24, class: 'text-icon-primary' },
} satisfies Meta<Props>;

export default meta;
type Story = StoryObj<Props>;

export const Padrao: Story = { name: 'Padrão' };
export const Destaque: Story = { args: { name: 'zap', size: 20, class: 'text-icon-accent' } };
