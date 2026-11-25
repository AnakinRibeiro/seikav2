import type { AstroRenderer } from '@storybook-astro/framework';
import type { Args, ComponentAnnotations, StoryAnnotations } from 'storybook/internal/types';

// @storybook-astro/framework does not export Meta/StoryObj helpers yet.
export type Meta<TArgs extends Args = Args> = ComponentAnnotations<AstroRenderer, TArgs>;
export type StoryObj<TArgs extends Args = Args> = StoryAnnotations<AstroRenderer, TArgs>;
