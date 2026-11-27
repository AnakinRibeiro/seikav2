// Contact data and in-page navigation shared by the sections.
export const whatsapp = {
  display: '(41) 98828-5439',
  url: 'https://wa.me/5541988285439',
};

export const contact = {
  email: 'seikaengenharia@gmail.com',
  location: 'Curitiba/PR e Região metropolitana',
};

// shortcut: the Instagram URL was not provided yet; the footer hides the button until it is set.
export const social: { instagram?: string } = {};

export const navLinks = [
  { label: 'Início', href: '#inicio' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Depoimentos', href: '#depoimentos' },
  { label: 'Portfólio', href: '#portfolio' },
  { label: 'FAQ', href: '#faq' },
] as const;
