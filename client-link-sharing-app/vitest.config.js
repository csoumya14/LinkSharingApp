import { plugin } from 'typescript-eslint';
import config from './vite.config.js';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [...config.plugins],
  test: {
    // this means we dont have to import describe
    // it and expect into every test file
    environment: 'jsdom',
    globals: true,
    setupFiles: './test/vitest-setup.js',
  },
});
