import { tv } from '../tv'
import type { VariantProps } from 'tailwind-variants'

export const tabsVariants = tv({
  slots: {
    root: 'w-full',
    list: 'inline-flex h-10 items-center justify-center rounded-md bg-ui-muted p-1 text-ui-muted-foreground',
    trigger:
      'inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-ui-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ui-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-ui-background data-[state=active]:text-ui-foreground data-[state=active]:shadow-sm',
    content:
      'mt-2 ring-offset-ui-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ui-ring focus-visible:ring-offset-2',
    indicator: '',
  },
})

export type TabsVariants = VariantProps<typeof tabsVariants>
