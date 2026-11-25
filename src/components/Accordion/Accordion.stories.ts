import type { Meta, StoryObj } from '../../../.storybook/types';
import AccordionGroupDemo from '../../../.storybook/demos/AccordionGroupDemo.astro';
import Accordion, { type Props } from './Accordion.astro';

const meta = {
  title: 'Componentes/Accordion',
  component: Accordion,
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
  argTypes: { theme: { control: 'inline-radio', options: ['dark', 'light'] } },
  args: {
    theme: 'dark',
    open: true,
    title: 'Energia Solar Fotovoltaica',
    content:
      'Projeto, dimensionamento e instalação de sistemas fotovoltaicos para residências, comércios e indústrias, proporcionando economia e sustentabilidade.',
    class: 'tablet:max-w-140',
  },
  globals: { backgrounds: { value: 'inverse' } },
} satisfies Meta<Props>;

export default meta;
type Story = StoryObj<Props>;

export const EscuroAberto: Story = { name: 'Escuro aberto' };
export const EscuroFechado: Story = {
  name: 'Escuro fechado',
  args: { open: false, title: 'Projetos Elétricos' },
};

const faq = {
  theme: 'light',
  title: 'Em quanto tempo o investimento se paga?',
  content:
    'Na maioria dos projetos residenciais o retorno acontece entre 2 a 3 anos e o sistema continua gerando energia por 25 anos.',
  class: 'tablet:max-w-164',
} as const;

export const ClaroAberto: Story = {
  name: 'Claro aberto',
  args: faq,
  globals: { backgrounds: { value: 'subtle' } },
};
export const ClaroFechado: Story = {
  name: 'Claro fechado',
  args: { ...faq, open: false, title: 'Como é feito o pagamento?' },
  globals: { backgrounds: { value: 'subtle' } },
};

export const GrupoEscuro: Story = {
  name: 'Grupo escuro (um aberto por vez)',
  render: () => ({ component: AccordionGroupDemo, props: { theme: 'dark' } }),
};

export const GrupoClaro: Story = {
  name: 'Grupo claro (um aberto por vez)',
  render: () => ({ component: AccordionGroupDemo, props: { theme: 'light' } }),
  globals: { backgrounds: { value: 'subtle' } },
};
