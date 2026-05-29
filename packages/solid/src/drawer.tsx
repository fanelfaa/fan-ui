import { Drawer as ArkDrawer } from "@ark-ui/solid/drawer";
import { Portal } from "solid-js/web";
import { splitProps, type Component, type JSX } from "solid-js";
import { drawerVariants } from "@ui/core";

const styles = drawerVariants();

export const DrawerRoot = ArkDrawer.Root;
export const DrawerTrigger = ArkDrawer.Trigger;

type DrawerContentProps = { class?: string; children?: JSX.Element };

const DrawerContent: Component<DrawerContentProps> = (props) => {
  const [local, others] = splitProps(props, ["class", "children"]);
  return (
    <Portal>
      <ArkDrawer.Backdrop class={styles.backdrop()} />
      <ArkDrawer.Positioner class={styles.positioner()}>
        <ArkDrawer.Content class={styles.content({ class: local.class })} {...others}>
          {local.children}
        </ArkDrawer.Content>
      </ArkDrawer.Positioner>
    </Portal>
  );
};

const DrawerTitle: Component<ArkDrawer.TitleProps> = (props) => {
  const [local, others] = splitProps(props, ["class"]);
  return <ArkDrawer.Title class={styles.title({ class: local.class })} {...others} />;
};

const DrawerDescription: Component<ArkDrawer.DescriptionProps> = (props) => {
  const [local, others] = splitProps(props, ["class"]);
  return <ArkDrawer.Description class={styles.description({ class: local.class })} {...others} />;
};

const DrawerCloseTrigger: Component<{ class?: string; children?: JSX.Element }> = (props) => {
  const [local, others] = splitProps(props, ["class", "children"]);
  return (
    <ArkDrawer.CloseTrigger class={styles.closeTrigger({ class: local.class })} {...others}>
      {local.children}
    </ArkDrawer.CloseTrigger>
  );
};

const DrawerGrabber: Component<{ class?: string; children?: JSX.Element }> = (props) => {
  const [local, others] = splitProps(props, ["class", "children"]);
  return (
    <ArkDrawer.Grabber class={styles.grabber({ class: local.class })} {...others}>
      <ArkDrawer.GrabberIndicator class={styles.grabberIndicator()} />
    </ArkDrawer.Grabber>
  );
};

export {
  DrawerContent,
  DrawerTitle,
  DrawerDescription,
  DrawerCloseTrigger,
  DrawerGrabber,
  drawerVariants,
};
