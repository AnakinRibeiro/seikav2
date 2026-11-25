import type { AstroRenderer, ProjectAnnotations } from '@storybook-astro/framework';

import '../src/styles/global.css';

const preview: ProjectAnnotations<AstroRenderer> = {
  parameters: {
    layout: 'centered',
    controls: { expanded: true },
    backgrounds: {
      options: {
        page: { name: 'bg/page', value: '#ffffff' },
        subtle: { name: 'bg/subtle', value: '#e8f0f4' },
        warm: { name: 'bg/warm', value: '#fdf6ec' },
        inverse: { name: 'bg/inverse', value: '#0a2a3e' },
      },
    },
    viewport: {
      options: {
        mobile: { name: 'Mobile (375)', styles: { width: '375px', height: '812px' } },
        tablet: { name: 'Tablet (768)', styles: { width: '768px', height: '1024px' } },
        desktop: { name: 'Desktop (1440)', styles: { width: '1440px', height: '900px' } },
      },
    },
    a11y: { test: 'error' },
  },
  initialGlobals: { backgrounds: { value: 'page' } },
};

export default preview;
