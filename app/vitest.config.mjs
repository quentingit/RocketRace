import { defineConfig } from 'vitest/config';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [tsconfigPaths()],
  test: {
    include: [
      'src/app/**/**/**/*.test.tsx',
      'src/components/**/*.test.tsx',
      'src/**/*.test.ts',
      'tests/**/*.test.ts',
    ],
    environment: 'jsdom',
    globals: true,
    setupFiles: ['./vitest.setup.mjs'],
    css: false,
  },
});
