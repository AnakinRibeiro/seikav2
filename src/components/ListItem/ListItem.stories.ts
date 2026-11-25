import type { Meta, StoryObj } from '../../../.storybook/types';
import ListWrapper from '../../../.storybook/decorators/ListWrapper.astro';
import ListItem, { type Props } from './ListItem.astro';

const meta = {
  title: 'Componentes/ListItem',
  component: ListItem,
  tags: ['autodocs'],
  args: { text: 'Indústrias', icon: 'zap' },
  decorators: [() => ({ component: ListWrapper })],
} satisfies Meta<Props>;

export default meta;
type Story = StoryObj<Props>;

export const Padrao: Story = { name: 'Padrão' };
