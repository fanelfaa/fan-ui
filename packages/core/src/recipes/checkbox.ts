import { tv } from '../tv'
import type { VariantProps } from 'tailwind-variants'

export const checkboxVariants = tv({
  slots: {
    root: 'inline-flex items-center gap-2',
    control:
      'peer size-4 shrink-0 rounded-sm border border-ui-input ring-offset-ui-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ui-ring focus-visible:ring-offset-2 data-[disabled]:cursor-not-allowed data-[disabled]:opacity-50 data-[state=checked]:bg-ui-primary data-[state=checked]:text-ui-primary-foreground data-[state=checked]:border-ui-primary data-[state=indeterminate]:bg-ui-primary data-[state=indeterminate]:text-ui-primary-foreground data-[state=indeterminate]:border-ui-primary',
    indicator: 'flex items-center justify-center text-current',
    label: 'text-sm font-medium text-ui-foreground leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70',
  },
})

export type CheckboxVariants = VariantProps<typeof checkboxVariants>
