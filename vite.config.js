import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  base: '/Makes360/', // <-- your repo name
  plugins: [react()],
});
