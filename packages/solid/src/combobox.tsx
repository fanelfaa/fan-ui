import { Combobox as ArkCombobox, type ListCollection } from "@ark-ui/solid/combobox";
import { Portal } from "solid-js/web";
import { Index, splitProps, type Component } from "solid-js";
import { comboboxVariants } from "@ui/core";

const styles = comboboxVariants();

type ComboboxRootProps = ArkCombobox.RootProps<{ label: string; value: string }> & {
  error?: boolean;
};

const ComboboxRoot: Component<ComboboxRootProps> = (props) => {
  const [local, others] = splitProps(props, ["class", "error"]);
  const localStyles = () => comboboxVariants({ error: !!local.error });
  return <ArkCombobox.Root class={localStyles().root({ class: local.class })} {...others} />;
};

type ComboboxRootProviderProps = ArkCombobox.RootProviderProps<{ label: string; value: string }>;

const ComboboxRootProvider: Component<ComboboxRootProviderProps> = (props) => {
  const [local, others] = splitProps(props, ["class"]);
  return <ArkCombobox.RootProvider class={styles.root({ class: local.class })} {...others} />;
};

const ComboboxLabel: Component<ArkCombobox.LabelProps> = (props) => {
  const [local, others] = splitProps(props, ["class"]);
  return <ArkCombobox.Label class={styles.label({ class: local.class })} {...others} />;
};

const ComboboxControl: Component<
  ArkCombobox.ControlProps & { class?: string; children?: import("solid-js").JSX.Element }
> = (props) => {
  const [local, others] = splitProps(props, ["class", "children"]);
  return (
    <ArkCombobox.Control class={styles.control({ class: local.class })} {...others}>
      {local.children}
      <ArkCombobox.Trigger class={styles.trigger()}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="size-4"
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </ArkCombobox.Trigger>
    </ArkCombobox.Control>
  );
};

const ComboboxInput: Component<ArkCombobox.InputProps> = (props) => {
  const [local, others] = splitProps(props, ["class"]);
  return <ArkCombobox.Input class={styles.input({ class: local.class })} {...others} />;
};

const ComboboxTrigger: Component<ArkCombobox.TriggerProps> = (props) => {
  const [local, others] = splitProps(props, ["class"]);
  return <ArkCombobox.Trigger class={styles.trigger({ class: local.class })} {...others} />;
};

const ComboboxClearTrigger: Component<ArkCombobox.ClearTriggerProps> = (props) => {
  const [local, others] = splitProps(props, ["class"]);
  return (
    <ArkCombobox.ClearTrigger class={styles.clearTrigger({ class: local.class })} {...others}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="size-4"
      >
        <path d="M18 6 6 18" />
        <path d="m6 6 12 12" />
      </svg>
    </ArkCombobox.ClearTrigger>
  );
};

type ComboboxContentProps = ArkCombobox.ContentProps & {
  class?: string;
  items: ListCollection<{ label: string; value: string }>["items"];
};

const ComboboxContent: Component<ComboboxContentProps> = (props) => {
  const [local, others] = splitProps(props, ["class", "items"]);
  return (
    <Portal>
      <ArkCombobox.Positioner class={styles.positioner()}>
        <ArkCombobox.Content class={styles.content({ class: local.class })} {...others}>
          <ArkCombobox.List class={styles.list()}>
            <Index each={local.items}>
              {(item) => (
                <ArkCombobox.Item class={styles.item()} item={item()}>
                  <ArkCombobox.ItemText class={styles.itemText()}>
                    {item().label}
                  </ArkCombobox.ItemText>
                  <ArkCombobox.ItemIndicator class={styles.itemIndicator()}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="size-4"
                    >
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                  </ArkCombobox.ItemIndicator>
                </ArkCombobox.Item>
              )}
            </Index>
          </ArkCombobox.List>
        </ArkCombobox.Content>
      </ArkCombobox.Positioner>
    </Portal>
  );
};

const ComboboxItem: Component<ArkCombobox.ItemProps> = (props) => {
  const [local, others] = splitProps(props, ["class"]);
  return <ArkCombobox.Item class={styles.item({ class: local.class })} {...others} />;
};

const ComboboxItemText: Component<ArkCombobox.ItemTextProps> = (props) => {
  const [local, others] = splitProps(props, ["class"]);
  return <ArkCombobox.ItemText class={styles.itemText({ class: local.class })} {...others} />;
};

const ComboboxItemIndicator: Component<ArkCombobox.ItemIndicatorProps> = (props) => {
  const [local, others] = splitProps(props, ["class"]);
  return (
    <ArkCombobox.ItemIndicator class={styles.itemIndicator({ class: local.class })} {...others} />
  );
};

const ComboboxEmpty: Component<ArkCombobox.EmptyProps> = (props) => {
  const [local, others] = splitProps(props, ["class"]);
  return <ArkCombobox.Empty class={styles.empty({ class: local.class })} {...others} />;
};

export {
  ComboboxRoot,
  ComboboxRootProvider,
  ComboboxLabel,
  ComboboxControl,
  ComboboxInput,
  ComboboxTrigger,
  ComboboxClearTrigger,
  ComboboxContent,
  ComboboxItem,
  ComboboxItemText,
  ComboboxItemIndicator,
  ComboboxEmpty,
  comboboxVariants,
};
