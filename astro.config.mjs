import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import mdx from '@astrojs/mdx';
import react from '@astrojs/react';

export default defineConfig({
  integrations: [
    starlight({
      title: 'Destiny Design System',
      sidebar: [
        { label: 'Todo comienza aquí', autogenerate: { directory: 'fundamentos' } },
        { label: 'Componentes',       autogenerate: { directory: 'componentes' } },
        { label: 'Logotipos',         autogenerate: { directory: 'logotipos' } },
      ],
    }),
    mdx(),
    react(), // Usa React en tus componentes .jsx/.tsx
  ],

  // <-- Agrega este bloque:
  vite: {
    optimizeDeps: {
      // fuerza a Vite a prebundlear React Flow en cliente
      include: ['react-flow-renderer'],
    },
    ssr: {
      // obliga a Vite a empaquetar React Flow para SSR (no external)
      noExternal: ['react-flow-renderer'],
    },
  },
});
