import type { Meta, StoryObj } from '../../../.storybook/types';
import CarouselControls, { type Props } from './CarouselControls.astro';

const meta = {
  title: 'Componentes/CarouselControls',
  component: CarouselControls,
  tags: ['autodocs'],
  args: { prevLabel: 'Depoimento anterior', nextLabel: 'Próximo depoimento' },
} satisfies Meta<Props>;

export default meta;
type Story = StoryObj<Props>;

export const Padrao: Story = { name: 'Padrão' };
