import { tv } from '../tv'
import type { VariantProps } from 'tailwind-variants'

export const datePickerVariants = tv({
  slots: {
    root: 'w-full',
    label: 'text-sm font-medium text-ui-foreground',
    control: 'flex h-9 w-full items-center justify-between rounded-md border border-ui-input bg-ui-background px-3 py-2 text-sm ring-offset-ui-background focus-within:outline-none focus-within:ring-2 focus-within:ring-ui-ring focus-within:ring-offset-2',
    input: 'flex-1 bg-transparent text-sm outline-none',
    trigger: 'flex size-9 items-center justify-center rounded-md border border-ui-border bg-ui-background transition-[box-shadow,background-color] hover:bg-ui-accent hover:text-ui-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ui-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>svg]:size-4',
    view: 'space-y-4',
    positioner: 'z-50',
    content:
      'z-50 rounded-md border border-ui-border bg-ui-background p-3 shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
    viewControl: 'flex items-center justify-between gap-4',
    viewTrigger: 'flex-1 text-center text-sm font-medium',
    prevTrigger: 'size-7 bg-transparent p-0 opacity-50 hover:opacity-100',
    nextTrigger: 'size-7 bg-transparent p-0 opacity-50 hover:opacity-100',
    monthSelect: 'flex-1 text-center text-sm font-medium bg-transparent',
    yearSelect: 'flex-1 text-center text-sm font-medium bg-transparent',
    table: 'w-full border-collapse space-y-1',
    tableHead: '',
    tableRow: 'mt-2 flex w-full',
    tableHeader: 'w-9 text-[0.8rem] font-normal text-ui-muted-foreground',
    tableBody: '',
    tableCell: 'relative flex-1 p-0 text-center text-sm focus-within:bg-transparent focus-within:z-10 has-[[data-range-end]]:rounded-r-md has-[[data-range-start]]:rounded-l-md has-[[data-in-range]]:bg-accent has-[[data-outside-range][data-in-range]]:bg-accent/50 has-[[data-in-range]]:first-of-type:rounded-l-md has-[[data-in-range]]:last-of-type:rounded-r-md',
    tableCellTrigger:
      'aspect-square size-8 p-0 font-normal data-[selected]:opacity-100 data-[today]:bg-accent data-[today]:text-accent-foreground data-[selected]:bg-primary data-[selected]:text-primary-foreground data-[selected]:hover:bg-primary data-[selected]:hover:text-primary-foreground data-[disabled]:text-muted-foreground data-[disabled]:opacity-50 data-[outside-range]:text-muted-foreground data-[outside-range]:opacity-50 [&:is([data-today][data-selected])]:bg-primary [&:is([data-today][data-selected])]:text-primary-foreground [&:is([data-outside-range][data-in-range])]:bg-accent/50 [&:is([data-outside-range][data-in-range])]:text-muted-foreground [&:is([data-outside-range][data-in-range])]:opacity-30',
    rangeText: 'text-sm text-ui-muted-foreground',
    valueText: 'text-sm text-ui-foreground',
    clearTrigger: 'size-4 text-ui-muted-foreground hover:text-ui-foreground',
    presetTrigger: 'text-sm px-2 py-1 rounded-md hover:bg-ui-accent hover:text-ui-accent-foreground',
    weekNumberCell: 'text-center text-xs text-ui-muted-foreground font-normal w-9',
    weekNumberHeaderCell: 'text-center text-xs text-ui-muted-foreground font-normal w-9',
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

export type DatePickerVariants = VariantProps<typeof datePickerVariants>