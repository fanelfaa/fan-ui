import { splitProps, type Component } from "solid-js";
import {
  TextareaRoot,
  TextareaLabel,
  TextareaField,
  TextareaDescription,
  TextareaErrorText,
} from "./textarea.base";
import { type TextareaVariants } from "@ui/core";

type TextareaProps = {
  label?: string;
  description?: string;
  error?: string;
} & import("@ark-ui/solid/factory").HTMLArkProps<"textarea"> &
  Omit<TextareaVariants, "error">;

export const Textarea: Component<TextareaProps> = (props) => {
  const [local, others] = splitProps(props, ["class", "label", "description", "error", "children"]);
  return (
    <TextareaRoot class={local.class} invalid={!!local.error}>
      {local.label && <TextareaLabel>{local.label}</TextareaLabel>}
      <TextareaField error={!!local.error} {...others} />
      {local.description && !local.error && (
        <TextareaDescription>{local.description}</TextareaDescription>
      )}
      {local.error && <TextareaErrorText>{local.error}</TextareaErrorText>}
    </TextareaRoot>
  );
};

export * from "./textarea.base";

export { textareaVariants, type TextareaVariants } from "@ui/core";
