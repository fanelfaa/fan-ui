import { Dialog as ArkDialog } from '@ark-ui/solid/dialog'
import { Portal } from 'solid-js/web'
import { splitProps, type Component, type JSX } from 'solid-js'
import { dialogVariants } from '@ui/core'

export const DialogRoot = ArkDialog.Root
export const DialogTrigger = ArkDialog.Trigger

type DialogContentProps = { class?: string; children?: JSX.Element }

const DialogContent: Component<DialogContentProps> = (props) => {
  const styles = dialogVariants()
  return (
    <Portal>
      <ArkDialog.Backdrop class={styles.backdrop()} />
      <ArkDialog.Positioner class={styles.positioner()}>
        <ArkDialog.Content class={styles.content({ class: props.class })}>
          {props.children}
          <ArkDialog.CloseTrigger class={styles.closeTrigger()}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="size-4"><path d="M18 6L6 18"/><path d="M6 6l12 12"/></svg>
          </ArkDialog.CloseTrigger>
        </ArkDialog.Content>
      </ArkDialog.Positioner>
    </Portal>
  )
}

const DialogHeader: Component<{ class?: string; children?: JSX.Element }> = (props) => {
  const styles = dialogVariants()
  return <div class={styles.header({ class: props.class })}>{props.children}</div>
}

const DialogFooter: Component<{ class?: string; children?: JSX.Element }> = (props) => {
  const styles = dialogVariants()
  return <div class={styles.footer({ class: props.class })}>{props.children}</div>
}

const DialogTitle: Component<ArkDialog.TitleProps> = (props) => {
  const styles = dialogVariants()
  return <ArkDialog.Title class={styles.title()} {...props} />
}

const DialogDescription: Component<ArkDialog.DescriptionProps> = (props) => {
  const styles = dialogVariants()
  return <ArkDialog.Description class={styles.description()} {...props} />
}

export { DialogContent, DialogHeader, DialogFooter, DialogTitle, DialogDescription, dialogVariants }