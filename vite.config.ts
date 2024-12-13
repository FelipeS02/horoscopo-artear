import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import MillionLint from '@million/lint';
import path from 'path';

export const getRelativePathsConfig = () => ({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});

// https://vite.dev/config/
export default defineConfig({
  plugins: [MillionLint.vite(), react()],
  ...getRelativePathsConfig(),
});
