# F3: Real QA - All Scenarios Executed

## T1: Core package builds and exports tv
- pnpm --filter @ui/core build → SUCCESS
- dist/ contains index.js, index.d.ts, recipes/*.js
- node require → typeof m.tv = 'function' ✓

## T2: Button recipe produces correct class string
- buttonVariants({ variant: 'default', size: 'sm' }) → 'inline-flex items-center justify-center...' ✓

## T3: Input recipe produces class string
- inputVariants().root() → 'grid gap-1.5' ✓

## T4: Dialog recipe produces class string
- dialogVariants().backdrop() → 'fixed inset-0 z-50 bg-black/80...' ✓

## T5: Select recipe produces class string + error variant
- selectVariants().root() → 'grid gap-1.5 w-full' ✓
- selectVariants({ error: true }).control() → 'border-ui-destructive...' ✓

## T6: Toast recipe produces class string + variants
- toastVariants().root() → 'group pointer-events-auto relative...' ✓
- toastVariants({ variant: 'destructive' }).root() → '...bg-ui-destructive text-ui-destructive-foreground' ✓

## T7: All recipes accessible from barrel
- Object.keys(m) = [buttonVariants, dialogVariants, inputVariants, selectVariants, toastVariants, tv] ✓

## T8-T12: Solid package build and typecheck
- pnpm --filter @ui/solid build → SUCCESS ✓
- pnpm --filter @ui/solid typecheck → SUCCESS ✓
- @ui/solid/dist/index.d.ts exports Button, Input, DialogRoot, SelectRoot, Toaster ✓

## T13: React JSX config
- tsconfig.json: jsxImportSource = 'react' ✓

## T14-T18: React package build and typecheck
- pnpm --filter @ui/react build → SUCCESS ✓
- pnpm --filter @ui/react typecheck → SUCCESS ✓
- @ui/react/dist/index.d.ts exports Button, Input, DialogRoot, SelectRoot, Toaster ✓

## T19: React component exports
- button.tsx exports Button, buttonVariants ✓

## T20: CLI --framework flag
- --framework react → copies React button.tsx with forwardRef ✓
- default (solid) → copies Solid button.tsx with splitProps ✓

## T21: Full workspace build + typechecks
- pnpm build (all 4 packages: core, solid, react, cli) → SUCCESS ✓
- All typechecks pass ✓

## Cross-task Integration
- No solid-js imports in packages/react/ ✓
- No react imports in packages/core/ ✓
- No @ark-ui/solid imports in packages/react/ ✓
- No @ark-ui/react imports in packages/ui/ ✓
