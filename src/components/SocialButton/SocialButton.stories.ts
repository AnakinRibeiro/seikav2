import type { Meta, StoryObj } from '../../../.storybook/types';
import SocialButton, { type Props } from './SocialButton.astro';

const meta = {
  title: 'Componentes/SocialButton',
  component: SocialButton,
  tags: ['autodocs'],
  argTypes: {
    network: { control: 'inline-radio', options: ['instagram', 'facebook', 'linkedin'] },
  },
  args: { network: 'instagram', href: 'https://instagram.com/' },
} satisfies Meta<Props>;

export default meta;
type Story = StoryObj<Props>;

export const Instagram: Story = {};
export const Facebook: Story = { args: { network: 'facebook', href: 'https://facebook.com/' } };
export const LinkedIn: Story = { args: { network: 'linkedin', href: 'https://linkedin.com/' } };
