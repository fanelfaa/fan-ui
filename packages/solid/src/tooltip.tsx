import { Tooltip as ArkTooltip } from '@ark-ui/solid/tooltip'
import { createMemo, splitProps, type Component } from 'solid-js'
import { tooltipVariants } from '@ui/core'

const TooltipRoot: Component<ArkTooltip.RootProps> = (props) => {
  return <ArkTooltip.Root {...props} />
}

const TooltipTrigger: Component<ArkTooltip.TriggerProps> = (props) => {
  const [local, others] = splitProps(props, ['class'])
  const styles = tooltipVariants()
  const triggerClass = createMemo(() => styles.trigger({ class: local.class }))
  return <ArkTooltip.Trigger class={triggerClass()} {...others} />
}

const TooltipPositioner: Component<ArkTooltip.PositionerProps> = (props) => {
  const [local, others] = splitProps(props, ['class'])
  const styles = tooltipVariants()
  const positionerClass = createMemo(() => styles.positioner({ class: local.class }))
  return <ArkTooltip.Positioner class={positionerClass()} {...others} />
}

const TooltipContent: Component<ArkTooltip.ContentProps> = (props) => {
  const [local, others] = splitProps(props, ['class'])
  const styles = tooltipVariants()
  const contentClass = createMemo(() => styles.content({ class: local.class }))
  return <ArkTooltip.Content class={contentClass()} {...others} />
}

const TooltipArrow: Component<ArkTooltip.ArrowProps> = (props) => {
  const [local, others] = splitProps(props, ['class'])
  const styles = tooltipVariants()
  const arrowClass = createMemo(() => styles.arrow({ class: local.class }))
  return <ArkTooltip.Arrow class={arrowClass()} {...others} />
}

const TooltipArrowTip: Component<ArkTooltip.ArrowTipProps> = (props) => {
  const [local, others] = splitProps(props, ['class'])
  const styles = tooltipVariants()
  const arrowTipClass = createMemo(() => styles.arrowTip({ class: local.class }))
  return <ArkTooltip.ArrowTip class={arrowTipClass()} {...others} />
}

export {
  TooltipRoot as Tooltip,
  TooltipTrigger,
  TooltipPositioner,
  TooltipContent,
  TooltipArrow,
  TooltipArrowTip,
  tooltipVariants,
}
