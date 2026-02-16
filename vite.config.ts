import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
<<<<<<< HEAD
  base: '/',
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
      },
    },
  },
=======
>>>>>>> 9b713193146e74afb0948171ce300acbd016751c
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
