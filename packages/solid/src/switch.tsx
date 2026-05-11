import { Switch as ArkSwitch } from '@ark-ui/solid/switch'
import { createMemo, splitProps, type Component } from 'solid-js'
import { switchVariants } from '@ui/core'

type SwitchProps = ArkSwitch.RootProps

const SwitchRoot: Component<SwitchProps> = (props) => {
  const [local, others] = splitProps(props, ['class'])
  const styles = switchVariants()
  const rootClass = createMemo(() => styles.root({ class: local.class }))
  return (
    <ArkSwitch.Root class={rootClass()} {...others}>
      <ArkSwitch.Control class={styles.control()}>
        <ArkSwitch.Thumb class={styles.thumb()} />
      </ArkSwitch.Control>
      <ArkSwitch.HiddenInput />
    </ArkSwitch.Root>
  )
}

const SwitchLabel: Component<ArkSwitch.LabelProps> = (props) => {
  const [local, others] = splitProps(props, ['class'])
  const styles = switchVariants()
  const labelClass = createMemo(() => styles.label({ class: local.class }))
  return <ArkSwitch.Label class={labelClass()} {...others} />
}

export { SwitchRoot as Switch, SwitchLabel, switchVariants }
