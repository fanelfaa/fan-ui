import { Drawer as ArkDrawer } from '@ark-ui/solid/drawer'
import { Portal } from 'solid-js/web'
import { createMemo, splitProps, type Component, type JSX } from 'solid-js'
import { drawerVariants } from '@ui/core'

export const DrawerRoot = ArkDrawer.Root
export const DrawerTrigger = ArkDrawer.Trigger

type DrawerContentProps = { class?: string; children?: JSX.Element }

const DrawerContent: Component<DrawerContentProps> = (props) => {
  const [local, others] = splitProps(props, ['class', 'children'])
  const styles = drawerVariants()
  const contentClass = createMemo(() => styles.content({ class: local.class }))
  return (
    <Portal>
      <ArkDrawer.Backdrop class={styles.backdrop()} />
      <ArkDrawer.Positioner class={styles.positioner()}>
        <ArkDrawer.Content class={contentClass()} {...others}>
          <ArkDrawer.Grabber class={styles.grabber()}>
            <ArkDrawer.GrabberIndicator class={styles.grabberIndicator()} />
          </ArkDrawer.Grabber>
          {local.children}
          <ArkDrawer.CloseTrigger class={styles.closeTrigger()}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="size-4"><path d="M18 6L6 18"/><path d="M6 6l12 12"/></svg>
          </ArkDrawer.CloseTrigger>
        </ArkDrawer.Content>
      </ArkDrawer.Positioner>
    </Portal>
  )
}

const DrawerBackdrop: Component<{ class?: string; children?: JSX.Element }> = (props) => {
  const [local, others] = splitProps(props, ['class', 'children'])
  const styles = drawerVariants()
  const backdropClass = createMemo(() => styles.backdrop({ class: local.class }))
  return <ArkDrawer.Backdrop class={backdropClass()} {...others}>{local.children}</ArkDrawer.Backdrop>
}

const DrawerPositioner: Component<{ class?: string; children?: JSX.Element }> = (props) => {
  const [local, others] = splitProps(props, ['class', 'children'])
  const styles = drawerVariants()
  const positionerClass = createMemo(() => styles.positioner({ class: local.class }))
  return <ArkDrawer.Positioner class={positionerClass()} {...others}>{local.children}</ArkDrawer.Positioner>
}

const DrawerTitle: Component<ArkDrawer.TitleProps> = (props) => {
  const [local, others] = splitProps(props, ['class'])
  const styles = drawerVariants()
  const titleClass = createMemo(() => styles.title({ class: local.class }))
  return <ArkDrawer.Title class={titleClass()} {...others} />
}

const DrawerDescription: Component<ArkDrawer.DescriptionProps> = (props) => {
  const [local, others] = splitProps(props, ['class'])
  const styles = drawerVariants()
  const descriptionClass = createMemo(() => styles.description({ class: local.class }))
  return <ArkDrawer.Description class={descriptionClass()} {...others} />
}

const DrawerCloseTrigger: Component<{ class?: string; children?: JSX.Element }> = (props) => {
  const [local, others] = splitProps(props, ['class', 'children'])
  const styles = drawerVariants()
  const closeTriggerClass = createMemo(() => styles.closeTrigger({ class: local.class }))
  return <ArkDrawer.CloseTrigger class={closeTriggerClass()} {...others}>{local.children}</ArkDrawer.CloseTrigger>
}

const DrawerGrabber: Component<{ class?: string; children?: JSX.Element }> = (props) => {
  const [local, others] = splitProps(props, ['class', 'children'])
  const styles = drawerVariants()
  const grabberClass = createMemo(() => styles.grabber({ class: local.class }))
  return <ArkDrawer.Grabber class={grabberClass()} {...others}>{local.children}</ArkDrawer.Grabber>
}

const DrawerGrabberIndicator: Component<{ class?: string; children?: JSX.Element }> = (props) => {
  const [local, others] = splitProps(props, ['class', 'children'])
  const styles = drawerVariants()
  const grabberIndicatorClass = createMemo(() => styles.grabberIndicator({ class: local.class }))
  return <ArkDrawer.GrabberIndicator class={grabberIndicatorClass()} {...others}>{local.children}</ArkDrawer.GrabberIndicator>
}

export {
  DrawerContent,
  DrawerBackdrop,
  DrawerPositioner,
  DrawerTitle,
  DrawerDescription,
  DrawerCloseTrigger,
  DrawerGrabber,
  DrawerGrabberIndicator,
  drawerVariants,
}