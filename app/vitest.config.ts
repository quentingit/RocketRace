import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    include: [
      'src/app/**/**/**/*.test.tsx',
      'src/components/**/*.test.tsx',
      'tests/**/*.test.ts',
    ],
    environment: 'jsdom',
    globals: true,
    setupFiles: ['./vitest.setup.ts'],
    css: false,
  },
});
