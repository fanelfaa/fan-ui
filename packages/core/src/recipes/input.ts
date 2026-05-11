import { tv } from '../tv'
import type { VariantProps } from 'tailwind-variants'

export const inputVariants = tv({
  slots: {
    root: 'grid gap-1.5',
    label: 'text-sm font-medium text-ui-foreground',
    input:
      'flex h-8 w-full rounded-md border border-ui-input bg-ui-background px-2.5 py-1.5 text-sm ring-offset-ui-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-ui-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ui-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
    description: 'text-sm text-ui-muted-foreground',
    error: 'text-sm text-ui-destructive',
  },
  variants: {
    error: {
      true: {
        input: 'border-ui-destructive focus-visible:ring-ui-destructive',
      },
    },
  },
  defaultVariants: {
    error: false,
  },
})

export type InputVariants = VariantProps<typeof inputVariants>