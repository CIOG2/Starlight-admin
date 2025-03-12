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
          items: [
            { label: 'Introducción', link: '/fundamentos/introduccion' },
            { label: 'Conoce nuestras marcas', link: '/fundamentos/marcas' },
          ],
        },
        {
          label: 'Componentes',
          items: [
            { label: 'Modal', link: '/componentes/modal' },
          ],
        },
        {
          label: 'Logotipos',
          autogenerate: { directory: 'logotipos' },
        },
      ],
    }),
  ],
});
