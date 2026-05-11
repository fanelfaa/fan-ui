import { tv } from '../tv'
import type { VariantProps } from 'tailwind-variants'

export const tooltipVariants = tv({
  slots: {
    root: 'inline-flex',
    trigger: 'inline-flex items-center justify-center gap-2 rounded-md border border-ui-input bg-transparent px-4 py-2 text-sm font-medium text-ui-foreground ring-offset-ui-background transition-colors hover:bg-ui-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ui-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
    positioner: 'z-50',
    content:
      'z-50 overflow-hidden rounded-md border border-ui-border bg-ui-popover px-3 py-1.5 text-xs text-ui-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
    arrow: '',
    arrowTip:
      'h-2 w-2 rotate-45 border-b border-l border-ui-border bg-ui-popover',
  },
})

export type TooltipVariants = VariantProps<typeof tooltipVariants>
