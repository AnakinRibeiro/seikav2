import type { Meta, StoryObj } from '../../../.storybook/types';
import BenefitTile, { type Props } from './BenefitTile.astro';

const meta = {
  title: 'Componentes/BenefitTile',
  component: BenefitTile,
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
  argTypes: {
    type: { control: 'inline-radio', options: ['featured', 'default'] },
    icon: { control: 'select', options: ['trend-down', 'leaf', 'home', 'wrench', 'shield'] },
  },
  args: {
    type: 'default',
    title: 'Sustentabilidade',
    description:
      'Ajude o planeta com uma fonte de energia limpa e renovável. Energia solar não polui e contribui para um futuro mais verde.',
    icon: 'leaf',
    class: 'tablet:w-68',
  },
} satisfies Meta<Props>;

export default meta;
type Story = StoryObj<Props>;

export const Destaque: Story = {
  args: {
    type: 'featured',
    title: 'Redução na conta de luz',
    value: 'até 95%',
    description:
      'da sua conta de luz. Energia solar é uma das formas mais inteligentes de economizar no longo prazo.',
    icon: 'trend-down',
    class: 'tablet:w-92',
  },
};

export const Padrao: Story = { name: 'Padrão' };

export const DestaqueMobile: Story = {
  ...Destaque,
  name: 'Destaque (mobile)',
  globals: { viewport: { value: 'mobile' } },
};

export const PadraoMobile: Story = {
  name: 'Padrão (mobile)',
  globals: { viewport: { value: 'mobile' } },
};
