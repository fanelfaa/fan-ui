import {
  Select as ArkSelect,
  createListCollection,
  type ListCollection,
} from "@ark-ui/solid/select";
import { Portal } from "solid-js/web";
import { Index, splitProps, type Component, type JSX } from "solid-js";
import { selectVariants } from "@ui/core";

const styles = selectVariants();

type SelectRootProps = ArkSelect.RootProps<{ label: string; value: string }> & {
  error?: boolean;
};

const SelectRoot: Component<SelectRootProps> = (props) => {
  const [local, others] = splitProps(props, ["class", "error"]);
  // If error param needed, create local styles with params
  const localStyles = () => selectVariants({ error: !!local.error });
  return <ArkSelect.Root class={localStyles().root({ class: local.class })} {...others} />;
};

type SelectRootProviderProps = ArkSelect.RootProviderProps<{ label: string; value: string }>;

const SelectRootProvider: Component<SelectRootProviderProps> = (props) => {
  const [local, others] = splitProps(props, ["class"]);
  return <ArkSelect.RootProvider class={styles.root({ class: local.class })} {...others} />;
};

const SelectLabel: Component<ArkSelect.LabelProps> = (props) => {
  const [local, others] = splitProps(props, ["class"]);
  return <ArkSelect.Label class={styles.label({ class: local.class })} {...others} />;
};

const SelectControl: Component<
  ArkSelect.ControlProps & { class?: string; children?: JSX.Element }
> = (props) => {
  const [local, others] = splitProps(props, ["class", "children"]);
  return (
    <ArkSelect.Control class={styles.control({ class: local.class })} {...others}>
      {local.children}
      <ArkSelect.Indicator class={styles.indicator()}>
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
      </ArkSelect.Indicator>
    </ArkSelect.Control>
  );
};

const SelectTrigger: Component<ArkSelect.TriggerProps> = (props) => {
  return <ArkSelect.Trigger class={styles.trigger({ class: props.class })} {...props} />;
};

const SelectValue: Component<ArkSelect.ValueTextProps> = (props) => {
  return <ArkSelect.ValueText class={styles.valueText({ class: props.class })} {...props} />;
};

type SelectContentProps = ArkSelect.ContentProps & {
  class?: string;
  items: ListCollection<{ label: string; value: string }>["items"];
};

const SelectContent: Component<SelectContentProps> = (props) => {
  const [local, others] = splitProps(props, ["class", "items"]);
  return (
    <Portal>
      <ArkSelect.Positioner class={styles.positioner()}>
        <ArkSelect.Content class={styles.content({ class: local.class })} {...others}>
          <Index each={local.items}>
            {(item) => (
              <ArkSelect.Item class={styles.item()} item={item()}>
                <ArkSelect.ItemText class={styles.itemText()}>{item().label}</ArkSelect.ItemText>
                <ArkSelect.ItemIndicator class={styles.itemIndicator()}>
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
                </ArkSelect.ItemIndicator>
              </ArkSelect.Item>
            )}
          </Index>
        </ArkSelect.Content>
      </ArkSelect.Positioner>
    </Portal>
  );
};

const SelectItem: Component<ArkSelect.ItemProps> = (props) => {
  return <ArkSelect.Item class={styles.item({ class: props.class })} {...props} />;
};

const SelectItemText: Component<ArkSelect.ItemTextProps> = (props) => {
  return <ArkSelect.ItemText class={styles.itemText({ class: props.class })} {...props} />;
};

const SelectItemIndicator: Component<ArkSelect.ItemIndicatorProps> = (props) => {
  return (
    <ArkSelect.ItemIndicator class={styles.itemIndicator({ class: props.class })} {...props} />
  );
};

export { createListCollection };
export {
  SelectRoot,
  SelectRootProvider,
  SelectLabel,
  SelectControl,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
  SelectItemText,
  SelectItemIndicator,
  selectVariants,
};
