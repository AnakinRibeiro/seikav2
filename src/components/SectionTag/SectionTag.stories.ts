import type { Meta, StoryObj } from '../../../.storybook/types';
import SectionTag, { type Props } from './SectionTag.astro';

const meta = {
  title: 'Componentes/SectionTag',
  component: SectionTag,
  tags: ['autodocs'],
  argTypes: {
    icon: { control: 'select', options: ['sun', 'wrench', 'award', 'chat', 'image', 'help'] },
  },
  args: { text: 'Energia solar', icon: 'sun' },
} satisfies Meta<Props>;

export default meta;
type Story = StoryObj<Props>;

export const Padrao: Story = { name: 'Padrão' };
export const Portfolio: Story = { name: 'Portfólio', args: { text: 'Portfólio', icon: 'image' } };
