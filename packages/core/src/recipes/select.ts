import { tv } from '../tv'
import type { VariantProps } from 'tailwind-variants'

export const selectVariants = tv({
  slots: {
    root: 'grid gap-1.5 w-full',
    label: 'text-sm font-medium text-ui-foreground',
    control: 'flex h-8 w-full items-center justify-between rounded-md border border-ui-input bg-ui-background px-2.5 py-1.5 text-sm ring-offset-ui-background focus-within:outline-none focus-within:ring-2 focus-within:ring-ui-ring focus-within:ring-offset-2',
    trigger: 'flex flex-1 items-center justify-start size-4 [&[data-state=open]>svg]:rotate-180',
    valueText: 'text-sm data-[placeholder-shown]:text-ui-muted-foreground',
    indicator: 'size-4 transition-transform text-ui-muted-foreground',
    positioner: 'z-50',
    content: 'z-50 min-w-[8rem] max-h-60 overflow-y-auto rounded-md border border-ui-border bg-ui-background p-1 shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
    item: 'relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none focus:bg-ui-accent focus:text-ui-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[highlighted]:bg-ui-accent data-[highlighted]:text-ui-accent-foreground',
    itemText: 'flex-1',
    itemIndicator: 'absolute right-2 flex size-4 items-center justify-center',
  },
  variants: {
    error: {
      true: {
        control: 'border-ui-destructive focus-within:ring-ui-destructive',
        label: 'text-ui-destructive',
      },
    },
  },
  defaultVariants: {
    error: false,
  },
})

export type SelectVariants = VariantProps<typeof selectVariants>