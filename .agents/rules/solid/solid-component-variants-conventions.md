# Solid Component + Tailwind Variants Conventions

## Class Props & Variants Consumption Pattern

### 1. Always `splitProps` for `class`

Extract `class` (and other local props) from remaining props before passing to element/component:

```tsx
const [local, others] = splitProps(props, ['class', 'error', 'children'])
```

### 2. Variants with Reactive Props → `createMemo`

If variants depend on reactive props (`error`, `variant`, `size`, etc.), wrap with `createMemo`:

```tsx
// ✅ Reactive-dependent variants → createMemo
const styles = createMemo(() => selectVariants({ error: !!local.error }))
const rootClass = createMemo(() => styles().root({ class: local.class }))
```

### 3. Static Variants (no Props) → no `createMemo`

If `variants()` takes no arguments or has no reactive dependencies, call directly:

```tsx
// ✅ Static variants, no createMemo needed
const styles = selectVariants()
```

### 4. Class Merging via Variants

Use `{ class: local.class }` to merge user-supplied class with built-in variant classes:

```tsx
// ✅ Merge user class with variant styles
const controlClass = createMemo(() => styles.control({ class: local.class }))
```

Never spread `{...props}` before `class={}` — it can override variant classes:
```tsx
// ❌ CAN OVERRIDE variant class
<ArkDialog.Title class={styles.title()} {...props} />

// ✅ Class merged via variants
const titleClass = createMemo(() => styles.title({ class: local.class }))
<ArkDialog.Title class={titleClass()} {...others} />
```

### 5. Merged Slot → Dedicated `createMemo`

Every slot that uses `{ class: local.class }` must have its own `createMemo`:

```tsx
const styles = createMemo(() => inputVariants({ error: !!local.error }))
const rootClass = createMemo(() => styles().root({ class: local.class }))  // ✅ slot memo
```

Slots without class merging can use `styles.slot()` directly:
```tsx
<Field.Label class={styles().label()} />    // ✅ direct
<Field.Input class={styles().input()} />     // ✅ direct
```

### 6. Reference Examples

| File | Component | Type |
|---|---|---|
| `packages/solid/src/input.tsx` | Input | Reactive variants (`error`) + slot memo |
| `packages/solid/src/button.tsx` | Button | Reactive variants (`variant`, `size`) |
| `packages/solid/src/select.tsx` | SelectRoot | Reactive variants (`error`) + slot memo |
| `packages/solid/src/select.tsx` | SelectLabel | Static variants, no memo |
| `packages/solid/src/select.tsx` | SelectControl | Static variants + slot memo (`controlClass`) |
| `packages/solid/src/dialog.tsx` | DialogContent | Static variants + slot memo (`contentClass`) |

### 7. Rule Summary

```
splitProps + createMemo + classMerge
│              │               │
│              │               └── styles.slot({ class: local.class })
│              │
│              ├── Yes, if variants have reactive dependencies
│              └── No, if variants are static
│
└── Always extract 'class' from props
    spread remaining props ({...others}) on element
```
