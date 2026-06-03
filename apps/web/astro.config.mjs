// @ts-check
import { defineConfig } from 'astro/config'
import { fontProviders } from 'astro/config'

import tailwindcss from '@tailwindcss/vite'

// https://astro.build/config
export default defineConfig({
  site: 'https://perreo.space',

  fonts: [
    {
      provider: fontProviders.fontsource(),
      name: 'Jacquard 24',
      cssVariable: '--font-jacquard-24',
    },
  ],

  vite: {
    plugins: [tailwindcss()],
  },
})
