import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: './index.html'
    }
  },
  publicDir: 'public' // Ensures public files like _redirects are included
});
