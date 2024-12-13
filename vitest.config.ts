import { defineConfig } from 'vitest/config';
import { getRelativePathsConfig } from './vite.config';

export default defineConfig({
  test: {
    globals: true,
    environment: 'jsdom',
  },
  ...getRelativePathsConfig(),
});
