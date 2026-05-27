import { Field as ArkField } from "@ark-ui/solid/field";
import { splitProps, type Component } from "solid-js";
import { textareaVariants, type TextareaVariants } from "@ui/core";
import { ark, type HTMLArkProps } from "@ark-ui/solid/factory";

const styles = textareaVariants();

export const TextareaRoot: Component<ArkField.RootProps> = (props) => {
  const [local, others] = splitProps(props, ["class"]);
  return <ArkField.Root class={styles.root({ class: local.class })} {...others} />;
};

export const TextareaLabel: Component<ArkField.LabelProps> = (props) => {
  const [local, others] = splitProps(props, ["class"]);
  return <ArkField.Label class={styles.label({ class: local.class })} {...others} />;
};

export const TextareaField: Component<HTMLArkProps<"textarea"> & TextareaVariants> = (props) => {
  const [local, others] = splitProps(props, ["class", "error"]);
  return (
    <ark.textarea
      class={styles.textarea({ class: local.class, error: local.error })}
      {...others}
    />
  );
};

export const TextareaDescription: Component<ArkField.HelperTextProps> = (props) => {
  const [local, others] = splitProps(props, ["class"]);
  return <ArkField.HelperText class={styles.description({ class: local.class })} {...others} />;
};

export const TextareaErrorText: Component<ArkField.ErrorTextProps> = (props) => {
  const [local, others] = splitProps(props, ["class"]);
  return <ArkField.ErrorText class={styles.error({ class: local.class })} {...others} />;
};
