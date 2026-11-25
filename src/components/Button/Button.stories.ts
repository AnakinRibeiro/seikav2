import type { Meta, StoryObj } from '../../../.storybook/types';
import Button, { type Props } from './Button.astro';

const meta = {
  title: 'Componentes/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'inline-radio', options: ['primary', 'secondary', 'secondary-inverse'] },
    icon: { control: 'select', options: ['arrow-right', 'arrow-up-right', 'chat', false] },
    href: { control: 'text' },
  },
  args: { text: 'Simular minha economia', variant: 'primary', icon: 'arrow-right' },
} satisfies Meta<Props>;

export default meta;
type Story = StoryObj<Props>;

export const Primario: Story = { name: 'Primário' };

export const Secundario: Story = {
  name: 'Secundário',
  args: { variant: 'secondary', text: 'Ver todos os serviços' },
};

export const SecundarioInverso: Story = {
  name: 'Secundário inverso',
  args: { variant: 'secondary-inverse', text: 'Ver todos os serviços' },
  globals: { backgrounds: { value: 'inverse' } },
};

export const WhatsApp: Story = {
  args: { text: 'Falar no WhatsApp', icon: 'chat', href: 'https://wa.me/' },
};

export const SemIcone: Story = { name: 'Sem ícone', args: { icon: false } };
