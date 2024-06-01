import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import sassDts from 'vite-plugin-sass-dts';

export default defineConfig({
  plugins: [react(), sassDts()],
  resolve: {
    alias: {
      '@app': '/src/app',
      '@pages': '/src/pages',
      '@widgets': '/src/widgets',
      '@feature': '/src/feature',
      '@entities': '/src/entities',
      '@shared': '/src/shared',
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
      @import "./src/app/styles/colors.scss";
      @import "./src/app/styles/mixins.scss";
      @import "./src/app/styles/typography.scss";
      `,
      },
    },
  },
  server: {
    port: 3030,
  },
});
