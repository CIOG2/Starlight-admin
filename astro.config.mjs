import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: 'Destiny Design System',
      social: {
        // Agrega aquí tus redes sociales si las necesitas
      },
      sidebar: [
        {
          label: 'Todo comienza aqui',
          autogenerate: { directory: 'fundamentos' },
        },
        {
          label: 'Componentes',
          autogenerate: { directory: 'componentes' },
        },
        {
          label: 'Logotipos',
          autogenerate: { directory: 'logotipos' },
        },
      ],
    }),
  ],
});
