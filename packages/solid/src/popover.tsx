import { Popover as ArkPopover } from '@ark-ui/solid/popover'
import { Portal } from 'solid-js/web'
import { createMemo, splitProps, type Component, type JSX } from 'solid-js'
import { popoverVariants } from '@ui/core'

export const PopoverRoot = ArkPopover.Root
export const PopoverTrigger = ArkPopover.Trigger

const PopoverPositioner: Component<ArkPopover.PositionerProps> = (props) => {
  const [local, others] = splitProps(props, ['class'])
  const styles = popoverVariants()
  const positionerClass = createMemo(() => styles.positioner({ class: local.class }))
  return <ArkPopover.Positioner class={positionerClass()} {...others} />
}

type PopoverContentProps = ArkPopover.ContentProps & { class?: string; children?: JSX.Element }

const PopoverContent: Component<PopoverContentProps> = (props) => {
  const [local, others] = splitProps(props, ['class', 'children'])
  const styles = popoverVariants()
  const contentClass = createMemo(() => styles.content({ class: local.class }))
  const positionerClass = createMemo(() => styles.positioner({ class: local.class }))
  return (
    <Portal>
      <ArkPopover.Positioner class={positionerClass()}>
        <ArkPopover.Content class={contentClass()} {...others}>
          {local.children}
        </ArkPopover.Content>
      </ArkPopover.Positioner>
    </Portal>
  )
}

const PopoverTitle: Component<ArkPopover.TitleProps> = (props) => {
  const [local, others] = splitProps(props, ['class'])
  const styles = popoverVariants()
  const titleClass = createMemo(() => styles.title({ class: local.class }))
  return <ArkPopover.Title class={titleClass()} {...others} />
}

const PopoverDescription: Component<ArkPopover.DescriptionProps> = (props) => {
  const [local, others] = splitProps(props, ['class'])
  const styles = popoverVariants()
  const descriptionClass = createMemo(() => styles.description({ class: local.class }))
  return <ArkPopover.Description class={descriptionClass()} {...others} />
}

const PopoverCloseTrigger: Component<ArkPopover.CloseTriggerProps> = (props) => {
  const [local, others] = splitProps(props, ['class'])
  const styles = popoverVariants()
  const closeClass = createMemo(() => styles.closeTrigger({ class: local.class }))
  return (
    <ArkPopover.CloseTrigger class={closeClass()} {...others}>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="size-4"><path d="M18 6L6 18"/><path d="M6 6l12 12"/></svg>
    </ArkPopover.CloseTrigger>
  )
}

const PopoverArrow: Component<ArkPopover.ArrowProps> = (props) => {
  const [local, others] = splitProps(props, ['class'])
  const styles = popoverVariants()
  const arrowClass = createMemo(() => styles.arrow({ class: local.class }))
  return <ArkPopover.Arrow class={arrowClass()} {...others} />
}

const PopoverArrowTip: Component<ArkPopover.ArrowTipProps> = (props) => {
  const [local, others] = splitProps(props, ['class'])
  const styles = popoverVariants()
  const arrowTipClass = createMemo(() => styles.arrowTip({ class: local.class }))
  return <ArkPopover.ArrowTip class={arrowTipClass()} {...others} />
}

const PopoverIndicator: Component<ArkPopover.IndicatorProps> = (props) => {
  const [local, others] = splitProps(props, ['class'])
  const styles = popoverVariants()
  const indicatorClass = createMemo(() => styles.indicator({ class: local.class }))
  return (
    <ArkPopover.Indicator class={indicatorClass()} {...others}>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="size-4"><path d="m6 9 6 6 6-6"/></svg>
    </ArkPopover.Indicator>
  )
}

export {
  PopoverPositioner,
  PopoverContent,
  PopoverTitle,
  PopoverDescription,
  PopoverCloseTrigger,
  PopoverArrow,
  PopoverArrowTip,
  PopoverIndicator,
  popoverVariants,
}