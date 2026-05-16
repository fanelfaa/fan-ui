# Component Documentation Conventions

## Scope

Applies when creating or editing documentation for UI components under `apps/docs/src/content/docs/components/*.mdx`.

## Source of Truth

| Artifact | Source Path |
|---|---|
| Recipe (styling primitives) | `packages/core/src/recipes/<component>.ts` |
| Component (Solid.js wrapper) | `packages/solid/src/<component>.tsx` |
| Documentation | `apps/docs/src/content/docs/components/<component>.mdx` |

## MDX Structure

Component docs follow this section order. Sections marked (optional) are included only if the component exposes that feature:

```
1. Frontmatter (title, description, category, updatedDate)          [required]
2. Import statement + H1 title                                      [required]
3. External link to Ark UI docs                                     [required]
4. Live demo block (interactive preview)                            [required]
5. Installation (CLI + Manual)                                      [required]
6. Usage (import + code examples)                                   [required]
7. Variants section                                                 [optional — if variant prop exists]
8. Sizes section                                                    [optional — if size prop exists]
9. Additional sections (Disabled, Loading, etc.)                    [optional — component-specific]
10. API Reference table                                             [required]
```

## MDX Sections — Required vs Optional

| Section | Required? |
|---|---|
| Frontmatter | Yes |
| Import + H1 | Yes |
| Ark UI external link | Yes |
| Live demo block | Yes |
| Installation (CLI + Manual) | Yes |
| Usage | Yes |
| Variants | Only if component has a `variant` prop |
| Sizes | Only if component has a `size` prop |
| Additional sections (Disabled, Loading, etc.) | Only if component exposes that feature |
| API Reference | Yes |

## Frontmatter

```yaml
---
title: <ComponentName>
description: <One-sentence description of the component.>
category: <Category name>
updatedDate: YYYY-MM-DD
---
```

## Import Statements

### Doc Preview Import (line 8)

Used by the docs site to render live interactive demos. Imports from the monorepo package:

```tsx
import { Component } from '@ui/solid'
```

### Manual Installation / Usage Code Blocks

Used in code examples shown to the end user. Imports from a local alias path:

```tsx
import { Component } from "~/components/<component>"
```

**This alias import (`~/components/...`) MUST be used in:**
- All fenced code blocks (```tsx ... ```) under Installation → Manual
- All fenced code blocks under Usage
- All fenced code blocks under Variants, Sizes, and other sections that contain code examples

**DO NOT** use `@ui/solid` in any code block — only in the top-level import for the live demo.

## Installation Section

### CLI

```markdown
### CLI
Run the following command to add the component to your project:
```bash
npx solidui-cli@latest add <component>
```
```

### Manual

The manual section contains **two code blocks**, each wrapped in `<div class="space-y-3">`:

1. **Dependency install** (if needed):
   ```bash
   npm install tailwind-variants
   ```

2. **Recipe file** — copy from `packages/core/src/recipes/<component>.ts`:
   - File path: `src/components/recipes/<component>.ts`
   - Import: `import { tv } from 'tailwind-variants'`
   - Paste the full recipe content verbatim

3. **Component file** — copy from `packages/solid/src/<component>.tsx`:
   - File path: `src/components/<component>.tsx`
   - **Import changes required:**
     - `import { ... } from '@ui/core'` → `import { ... } from '../recipes/<component>'`
     - Ark UI factory imports (`@ark-ui/solid/factory`) remain unchanged
   - Paste the adapted component content

4. **Theme variables note** (if recipe uses CSS variables like `--primary`, `--ring`):
   ```markdown
   > **Note:** Make sure your project has the Tailwind CSS theme variables set up (`--primary`, `--destructive`, `--ring`, etc.) or override the utility classes to match your design system.
   ```

## Usage Section

```markdown
## Usage

Import the component:

```tsx
import { Component } from "~/components/<component>"
```

Basic usage:

```tsx
<Component>...</Component>
```

With <feature>:

```tsx
<Component <props>>...</Component>
```
```

Each usage example is a standalone fenced code block with a short descriptive heading.

## Variants / Sizes / Additional Sections

Each section follows the same pattern:

1. Brief description of the prop
2. Live demo block (interactive, using `@ui/solid` import)
3. No code block needed if the demo is self-explanatory

```markdown
## Variants

Use the `variant` prop to change the visual style.

<div class="flex flex-wrap gap-4">
  <Component variant="...">...</Component>
  ...
</div>
```

## API Reference

Table at the bottom listing all props:

```markdown
## API Reference

| Prop | Type | Default |
|------|------|---------|
| propName | type | default |
```

Include only props explicitly defined or meaningfully overridden by the component. Do NOT list every inherited HTML attribute. Document whatever props the component actually exposes — variant/size props, boolean flags, `class` overrides, `asChild`, or anything else.

## Recipe-to-Doc Code Block Rules

When copying recipe code into the Manual installation section:

1. **Copy verbatim** — do not modify the `tv()` call or variant definitions
2. **File path** in the doc must match: `src/components/recipes/<component>.ts`
3. **Import** in the recipe code block: `import { tv } from 'tailwind-variants'` (no `@ui/core`)

## Component-to-Doc Code Block Rules

When copying component code into the Manual installation section:

1. **Change recipe import**:
   ```diff
   - import { componentVariants } from '@ui/core'
   + import { componentVariants } from '../recipes/<component>'
   ```
2. **Keep Ark UI imports** unchanged (e.g., `@ark-ui/solid/factory`)
3. **Keep all Solid.js imports** unchanged (`solid-js`, `tailwind-variants` types)
4. **File path** in the doc must match: `src/components/<component>.tsx`
5. **Export** must include both component and variants: `export { Component, componentVariants }`

## Ark UI External Link

Every component doc includes a link to the official Ark UI documentation:

```markdown
<a href="https://ark-ui.com/<relevant-path>" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-1.5 mt-4 text-sm text-muted-foreground hover:text-foreground transition-colors">
  <svg ...>...</svg>
  Docs
</a>
```

Use the appropriate Ark UI docs URL for the component.
