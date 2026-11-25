import type { Meta, StoryObj } from '../../../.storybook/types';
import IconButton, { type Props } from './IconButton.astro';

const meta = {
  title: 'Componentes/IconButton',
  component: IconButton,
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'inline-radio', options: ['primary', 'secondary', 'secondary-inverse'] },
    icon: { control: 'select', options: ['arrow-left', 'arrow-right', 'menu'] },
  },
  args: { icon: 'arrow-right', label: 'Próximo', variant: 'primary' },
} satisfies Meta<Props>;

export default meta;
type Story = StoryObj<Props>;

export const Primario: Story = { name: 'Primário' };

export const Secundario: Story = {
  name: 'Secundário',
  args: { variant: 'secondary', icon: 'arrow-left', label: 'Anterior' },
};

export const SecundarioInverso: Story = {
  name: 'Secundário inverso (menu)',
  args: { variant: 'secondary-inverse', icon: 'menu', label: 'Abrir menu' },
  globals: { backgrounds: { value: 'inverse' } },
};
