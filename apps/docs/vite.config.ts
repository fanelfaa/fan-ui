import { defineConfig } from 'vite'
import solid from 'vite-plugin-solid'
import tailwindcss from '@tailwindcss/vite'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  plugins: [tailwindcss(), solid(), tsconfigPaths()],
  resolve: {
    conditions: ['development', 'module', 'import', 'resolve'],
  },
  optimizeDeps: {
    exclude: ['@ui/solid', '@ui/core'],
  },
})