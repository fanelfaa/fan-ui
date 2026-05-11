import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/index.ts', 'src/recipes/button.ts', 'src/recipes/input.ts', 'src/recipes/dialog.ts', 'src/recipes/select.ts', 'src/recipes/toast.ts'],
  format: ['esm', 'cjs'],
  dts: true,
  sourcemap: true,
  clean: true,
  external: ['tailwind-variants'],
})
