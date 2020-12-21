import type { SvelteComponent } from 'svelte';

export interface IFrameWindow extends Window {
  app: SvelteComponent
}
