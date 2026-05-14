import { tv, type VariantProps } from 'tailwind-variants'

export const numberInputVariants = tv({
  slots: {
    root: 'inline-flex items-center gap-2',
    label: 'text-sm font-medium text-foreground',
    control: 'inline-flex items-center gap-1 rounded-md border border-input bg-background px-2 py-1.5 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
    input: 'flex h-6 w-20 flex-1 appearance-none text-center text-sm font-medium',
    incrementTrigger: 'flex items-center justify-center h-4 w-4 rounded-md text-sm hover:bg-accent',
    decrementTrigger: 'flex items-center justify-center h-4 w-4 rounded-md text-sm hover:bg-accent',
    scrubber: 'flex h-1 w-0 grow bg-transparent',
    valueText: 'text-sm font-mono text-foreground'
  },
  variants: {
    disabled: {
      true: {
        control: 'opacity-50 pointer-events-none',
        input: 'opacity-50',
        incrementTrigger: 'opacity-50',
        decrementTrigger: 'opacity-50'
      }
    },
    invalid: {
      true: {
        control: 'border-destructive focus-visible:ring-destructive',
        input: 'text-destructive',
        incrementTrigger: 'text-destructive',
        decrementTrigger: 'text-destructive'
      }
    }
  },
  defaultVariants: {
    disabled: false,
    invalid: false
  }
})

export type NumberInputVariants = VariantProps<typeof numberInputVariants>