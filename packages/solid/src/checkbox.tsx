import { Checkbox as ArkCheckbox } from '@ark-ui/solid/checkbox'
import { createMemo, splitProps, type Component } from 'solid-js'
import { checkboxVariants } from '@ui/core'

export { checkboxVariants }

type CheckboxRootProps = ArkCheckbox.RootProps

const CheckboxRoot: Component<CheckboxRootProps> = (props) => {
  const [local, others] = splitProps(props, ['class'])
  const styles = checkboxVariants()
  const rootClass = createMemo(() => styles.root({ class: local.class }))
  return (
    <ArkCheckbox.Root class={rootClass()} {...others}>
      <ArkCheckbox.Control class={styles.control()}>
        <ArkCheckbox.Indicator class={styles.indicator()}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="size-3.5">
            <path d="M20 6 9 17l-5-5"/>
          </svg>
        </ArkCheckbox.Indicator>
      </ArkCheckbox.Control>
      <ArkCheckbox.HiddenInput />
    </ArkCheckbox.Root>
  )
}

const CheckboxLabel: Component<ArkCheckbox.LabelProps> = (props) => {
  const [local, others] = splitProps(props, ['class'])
  const styles = checkboxVariants()
  const labelClass = createMemo(() => styles.label({ class: local.class }))
  return <ArkCheckbox.Label class={labelClass()} {...others} />
}

export { CheckboxRoot as Checkbox, CheckboxLabel }
