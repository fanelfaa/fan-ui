import { Select as ArkSelect, createListCollection, type ListCollection } from '@ark-ui/solid/select'
import { Portal } from 'solid-js/web'
import { Index, splitProps, type Component, type JSX } from 'solid-js'
import { selectVariants } from '@ui/core'

type SelectRootProps = ArkSelect.RootProps<{ label: string; value: string }> & { class?: string; error?: boolean }

const SelectRoot: Component<SelectRootProps> = (props) => {
  const [local, others] = splitProps(props, ['class', 'error'])
  const styles = selectVariants({ error: !!local.error })
  return (
    <ArkSelect.Root class={styles.root()} {...others} />
  )
}

const SelectLabel: Component<ArkSelect.LabelProps> = (props) => {
  const styles = selectVariants()
  return <ArkSelect.Label class={styles.label()} {...props} />
}

const SelectControl: Component<ArkSelect.ControlProps & { class?: string; children?: JSX.Element }> = (props) => {
  const [local, others] = splitProps(props, ['class', 'children'])
  const styles = selectVariants()
  return (
    <ArkSelect.Control class={styles.control({ class: local.class })} {...others}>
      {local.children}
      <ArkSelect.Indicator class={styles.indicator()}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="size-4"><path d="m6 9 6 6 6-6"/></svg>
      </ArkSelect.Indicator>
    </ArkSelect.Control>
  )
}

const SelectTrigger: Component<ArkSelect.TriggerProps> = (props) => {
  const styles = selectVariants()
  return <ArkSelect.Trigger class={styles.trigger()} {...props} />
}

const SelectValue: Component<ArkSelect.ValueTextProps> = (props) => {
  const styles = selectVariants()
  return <ArkSelect.ValueText class={styles.valueText()} {...props} />
}

type SelectContentProps = ArkSelect.ContentProps & {
  class?: string
  items: ListCollection<{ label: string; value: string }>['items']
}

const SelectContent: Component<SelectContentProps> = (props) => {
  const [local, others] = splitProps(props, ['class', 'items'])
  const styles = selectVariants()
  return (
    <Portal>
      <ArkSelect.Positioner class={styles.positioner()}>
        <ArkSelect.Content class={styles.content({ class: local.class })} {...others}>
          <Index each={local.items}>
            {(item) => (
              <ArkSelect.Item class={styles.item()} item={item()}>
                <ArkSelect.ItemText class={styles.itemText()}>{item().label}</ArkSelect.ItemText>
                <ArkSelect.ItemIndicator class={styles.itemIndicator()}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="size-4"><path d="M20 6 9 17l-5-5"/></svg>
                </ArkSelect.ItemIndicator>
              </ArkSelect.Item>
            )}
          </Index>
        </ArkSelect.Content>
      </ArkSelect.Positioner>
    </Portal>
  )
}

const SelectItem: Component<ArkSelect.ItemProps> = (props) => {
  const styles = selectVariants()
  return <ArkSelect.Item class={styles.item()} {...props} />
}

const SelectItemText: Component<ArkSelect.ItemTextProps> = (props) => {
  const styles = selectVariants()
  return <ArkSelect.ItemText class={styles.itemText()} {...props} />
}

const SelectItemIndicator: Component<ArkSelect.ItemIndicatorProps> = (props) => {
  const styles = selectVariants()
  return <ArkSelect.ItemIndicator class={styles.itemIndicator()} {...props} />
}

export { createListCollection }
export { SelectRoot, SelectLabel, SelectControl, SelectTrigger, SelectValue, SelectContent, SelectItem, SelectItemText, SelectItemIndicator, selectVariants }