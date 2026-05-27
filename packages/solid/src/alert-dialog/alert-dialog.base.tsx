import { Dialog as ArkDialog } from "@ark-ui/solid/dialog";
import { splitProps, type Component } from "solid-js";
import { alertDialogVariants, buttonVariants, type ButtonVariants } from "@ui/core";
import { HTMLProps } from "@ark-ui/solid";
import { ark, type HTMLArkProps } from "@ark-ui/solid/factory";

const styles = alertDialogVariants();

export const AlertDialogRoot = ArkDialog.Root;
export const AlertDialogRootProvider = ArkDialog.RootProvider;
export const AlertDialogTrigger = ArkDialog.Trigger;

export const AlertDialogBackdrop: Component<ArkDialog.BackdropProps> = (props) => {
  const [local, others] = splitProps(props, ["class"]);
  return <ArkDialog.Backdrop class={styles.backdrop({ class: local.class })} {...others} />;
};

export const AlertDialogPositioner: Component<ArkDialog.PositionerProps> = (props) => {
  const [local, others] = splitProps(props, ["class"]);
  return <ArkDialog.Positioner class={styles.positioner({ class: local.class })} {...others} />;
};

export const AlertDialogContent: Component<ArkDialog.ContentProps> = (props) => {
  const [local, others] = splitProps(props, ["class"]);
  return <ArkDialog.Content class={styles.content({ class: local.class })} {...others} />;
};

export const AlertDialogCloseTrigger: Component<ArkDialog.CloseTriggerProps> = (props) => {
  const [local, others] = splitProps(props, ["class"]);
  return <ArkDialog.CloseTrigger class={styles.closeTrigger({ class: local.class })} {...others} />;
};

export const AlertDialogTitle: Component<ArkDialog.TitleProps> = (props) => {
  const [local, others] = splitProps(props, ["class"]);
  return <ArkDialog.Title class={styles.title({ class: local.class })} {...others} />;
};

export const AlertDialogDescription: Component<ArkDialog.DescriptionProps> = (props) => {
  const [local, others] = splitProps(props, ["class"]);
  return <ArkDialog.Description class={styles.description({ class: local.class })} {...others} />;
};

export const AlertDialogHeader: Component<HTMLProps<"div">> = (props) => {
  const [local, others] = splitProps(props, ["class"]);
  return <div class={styles.header({ class: local.class })} {...others} />;
};

export const AlertDialogFooter: Component<HTMLProps<"div">> = (props) => {
  const [local, others] = splitProps(props, ["class"]);
  return <div class={styles.footer({ class: local.class })} {...others} />;
};

export const AlertDialogCancel: Component<
  HTMLProps<"button"> & ArkDialog.CloseTriggerProps & ButtonVariants
> = (props) => {
  const [local, others] = splitProps(props, ["class", "variant", "size"]);
  return (
    <ArkDialog.CloseTrigger
      class={buttonVariants({ variant: local.variant, size: local.size, class: local.class })}
      {...others}
    />
  );
};

export const AlertDialogAction: Component<HTMLArkProps<"button"> & ButtonVariants> = (props) => {
  const [local, others] = splitProps(props, ["class", "variant", "size"]);
  return (
    <ark.button
      type="button"
      class={buttonVariants({ variant: local.variant, size: local.size, class: local.class })}
      {...others}
    />
  );
};
