import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        auth: resolve(__dirname, 'src/pages/auth.html'),
        welcome: resolve(__dirname, 'src/pages/welcome.html'),
      },
    },
  },
});
