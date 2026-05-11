import { tv } from '../tv'
import type { VariantProps } from 'tailwind-variants'

export const radioGroupVariants = tv({
  slots: {
    root: 'flex flex-col gap-2',
    label: 'text-sm font-medium text-ui-foreground',
    item: 'inline-flex items-center gap-2',
    itemControl:
      'peer size-5 shrink-0 rounded-full border border-ui-input ring-offset-ui-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ui-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:border-ui-primary',
    itemIndicator: 'size-2 rounded-full bg-ui-primary',
    itemText: 'text-sm font-medium text-ui-foreground',
    itemHiddenInput: 'absolute opacity-0 w-0 h-0 pointer-events-none',
  },
})

export type RadioGroupVariants = VariantProps<typeof radioGroupVariants>
