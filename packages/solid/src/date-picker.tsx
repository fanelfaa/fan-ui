import { children, Show, splitProps } from 'solid-js'
import { DatePicker as DatePickerPrimitive } from '@ark-ui/solid/date-picker'
import { datePickerVariants, buttonVariants } from '@ui/core'

const {
  control,
  input,
  trigger,
  content,
  view,
  viewControl,
  navTrigger,
  viewTrigger,
  rangeText,
  table,
  tableRow,
  tableHeader,
  tableCell,
  tableCellTrigger,
} = datePickerVariants()

// ---------------------------------------------------------------------------
// Re-exports (no styling needed)
// ---------------------------------------------------------------------------
 
const DatePicker = DatePickerPrimitive.Root
const DatePickerLabel = DatePickerPrimitive.Label
const DatePickerContext = DatePickerPrimitive.Context
const DatePickerTableHead = DatePickerPrimitive.TableHead
const DatePickerTableBody = DatePickerPrimitive.TableBody
const DatePickerYearSelect = DatePickerPrimitive.YearSelect
const DatePickerMonthSelect = DatePickerPrimitive.MonthSelect
const DatePickerPositioner = DatePickerPrimitive.Positioner
 
// ---------------------------------------------------------------------------
// Styled components
// ---------------------------------------------------------------------------
 
const DatePickerControl = (props: DatePickerPrimitive.ControlProps) => {
  const [local, others] = splitProps(props, ["class"])
  return (
    <DatePickerPrimitive.Control
      class={control({ class: local.class })}
      {...others}
    />
  )
}
 
const DatePickerInput = (props: DatePickerPrimitive.InputProps) => {
  const [local, others] = splitProps(props, ["class"])
  return (
    <DatePickerPrimitive.Input
      class={input({ class: local.class })}
      {...others}
    />
  )
}
 
const DatePickerTrigger = (props: DatePickerPrimitive.TriggerProps) => {
  const [local, others] = splitProps(props, ["class", "children"])
 
  const resolvedChildren = children(() => local.children)
  const hasChildren = () => resolvedChildren.toArray().length !== 0
 
  return (
    <DatePickerPrimitive.Trigger
      class={trigger({ class: local.class })}
      {...others}
    >
      <Show when={!hasChildren()} fallback={resolvedChildren()}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="size-4"
        >
          <path d="M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z" />
          <path d="M16 3v4" />
          <path d="M8 3v4" />
          <path d="M4 11h16" />
          <path d="M11 15h1" />
          <path d="M12 15v3" />
          <title>Calendar</title>
        </svg>
      </Show>
    </DatePickerPrimitive.Trigger>
  )
}
 
const DatePickerContent = (props: DatePickerPrimitive.ContentProps) => {
  const [local, others] = splitProps(props, ["class", "children"])
  return (
    <DatePickerPrimitive.Content
      class={content({ class: local.class })}
      {...others}
    >
      {local.children}
    </DatePickerPrimitive.Content>
  )
}
 
const DatePickerView = (props: DatePickerPrimitive.ViewProps) => {
  const [local, others] = splitProps(props, ["class"])
  return (
    <DatePickerPrimitive.View
      class={view({ class: local.class })}
      {...others}
    />
  )
}
 
const DatePickerViewControl = (props: DatePickerPrimitive.ViewControlProps) => {
  const [local, others] = splitProps(props, ["class"])
  return (
    <DatePickerPrimitive.ViewControl
      class={viewControl({ class: local.class })}
      {...others}
    />
  )
}
 
const DatePickerPrevTrigger = (props: DatePickerPrimitive.PrevTriggerProps) => {
  const [local, others] = splitProps(props, ["class", "children"])
 
  const resolvedChildren = children(() => local.children)
  const hasChildren = () => resolvedChildren.toArray().length !== 0
 
  return (
    <DatePickerPrimitive.PrevTrigger
      class={navTrigger({ class: [buttonVariants({ variant: "outline" }), local.class, "size-7"] })}
      {...others}
    >
      <Show when={!hasChildren()} fallback={resolvedChildren()}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="size-4"
        >
          <path d="M15 6l-6 6l6 6" />
          <title>Previous</title>
        </svg>
      </Show>
    </DatePickerPrimitive.PrevTrigger>
  )
}
 
const DatePickerNextTrigger = (props: DatePickerPrimitive.NextTriggerProps) => {
  const [local, others] = splitProps(props, ["class", "children"])
 
  const resolvedChildren = children(() => local.children)
  const hasChildren = () => resolvedChildren.toArray().length !== 0
 
  return (
    <DatePickerPrimitive.NextTrigger
      class={navTrigger({ class: [buttonVariants({ variant: "outline" }), local.class, "size-7"] })}
      {...others}
    >
      <Show when={!hasChildren()} fallback={resolvedChildren()}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="size-4"
        >
          <path d="M9 6l6 6l-6 6" />
          <title>Next</title>
        </svg>
      </Show>
    </DatePickerPrimitive.NextTrigger>
  )
}
 
const DatePickerViewTrigger = (props: DatePickerPrimitive.ViewTriggerProps) => {
  const [local, others] = splitProps(props, ["class"])
  return (
    <DatePickerPrimitive.ViewTrigger
      class={viewTrigger({ class: [buttonVariants({ variant: "ghost" }), local.class] })}
      {...others}
    />
  )
}
 
const DatePickerRangeText = (props: DatePickerPrimitive.RangeTextProps) => {
  const [local, others] = splitProps(props, ["class"])
  return (
    <DatePickerPrimitive.RangeText
      class={rangeText({ class: local.class })}
      {...others}
    />
  )
}
 
const DatePickerTable = (props: DatePickerPrimitive.TableProps) => {
  const [local, others] = splitProps(props, ["class"])
  return (
    <DatePickerPrimitive.Table
      class={table({ class: local.class })}
      {...others}
    />
  )
}
 
const DatePickerTableRow = (props: DatePickerPrimitive.TableRowProps) => {
  const [local, others] = splitProps(props, ["class"])
  return (
    <DatePickerPrimitive.TableRow
      class={tableRow({ class: local.class })}
      {...others}
    />
  )
}
 
const DatePickerTableHeader = (props: DatePickerPrimitive.TableHeaderProps) => {
  const [local, others] = splitProps(props, ["class"])
  return (
    <DatePickerPrimitive.TableHeader
      class={tableHeader({ class: local.class })}
      {...others}
    />
  )
}
 
const DatePickerTableCell = (props: DatePickerPrimitive.TableCellProps) => {
  const [local, others] = splitProps(props, ["class"])
  return (
    <DatePickerPrimitive.TableCell
      class={tableCell({ class: local.class })}
      {...others}
    />
  )
}
 
const DatePickerTableCellTrigger = (props: DatePickerPrimitive.TableCellTriggerProps) => {
  const [local, others] = splitProps(props, ["class"])
  return (
    <DatePickerPrimitive.TableCellTrigger
      class={tableCellTrigger({ class: [buttonVariants({ variant: "ghost" }), local.class] })}
      {...others}
    />
  )
}
 
export {
  DatePicker,
  DatePickerLabel,
  DatePickerControl,
  DatePickerInput,
  DatePickerTrigger,
  DatePickerContent,
  DatePickerView,
  DatePickerViewControl,
  DatePickerPrevTrigger,
  DatePickerNextTrigger,
  DatePickerViewTrigger,
  DatePickerRangeText,
  DatePickerContext,
  DatePickerTable,
  DatePickerTableHead,
  DatePickerTableBody,
  DatePickerTableRow,
  DatePickerTableHeader,
  DatePickerTableCell,
  DatePickerTableCellTrigger,
  DatePickerYearSelect,
  DatePickerMonthSelect,
  DatePickerPositioner,
  datePickerVariants
}