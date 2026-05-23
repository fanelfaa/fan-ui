import { Combobox, createListCollection } from "@ark-ui/react/combobox";
import { forwardRef, type ComponentRef } from "react";
import { comboboxVariants } from "@ui/core/recipes/combobox";

export { createListCollection };

export const ComboboxRoot = Combobox.Root;
export const ComboboxRootProvider = Combobox.RootProvider;
export const ComboboxLabel = Combobox.Label;

export const ComboboxControl = forwardRef<
  ComponentRef<typeof Combobox.Control>,
  Combobox.ControlProps & { className?: string }
>(({ className, children, ...props }, ref) => {
  const styles = comboboxVariants();
  return (
    <Combobox.Control ref={ref} className={styles.control({ class: className })} {...props}>
      {children}
      <Combobox.Trigger className={styles.trigger()}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="size-4"
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </Combobox.Trigger>
    </Combobox.Control>
  );
});
ComboboxControl.displayName = "ComboboxControl";

export const ComboboxInput = Combobox.Input;
export const ComboboxTrigger = Combobox.Trigger;
export const ComboboxClearTrigger = Combobox.ClearTrigger;

export const ComboboxContent = forwardRef<
  ComponentRef<typeof Combobox.Content>,
  Combobox.ContentProps & { className?: string }
>(({ className, children, ...props }, ref) => {
  const styles = comboboxVariants();
  return (
    <Combobox.Positioner className={styles.positioner()}>
      <Combobox.Content ref={ref} className={styles.content({ class: className })} {...props}>
        {children}
      </Combobox.Content>
    </Combobox.Positioner>
  );
});
ComboboxContent.displayName = "ComboboxContent";

export const ComboboxList = forwardRef<
  ComponentRef<typeof Combobox.List>,
  Combobox.ListProps & { className?: string }
>(({ className, children, ...props }, ref) => {
  const styles = comboboxVariants();
  return (
    <Combobox.List ref={ref} className={styles.list({ class: className })} {...props}>
      {children}
    </Combobox.List>
  );
});
ComboboxList.displayName = "ComboboxList";

const ComboboxItem = forwardRef<
  ComponentRef<typeof Combobox.Item>,
  Combobox.ItemProps
>((props, ref) => {
  const styles = comboboxVariants();
  return (
    <Combobox.Item ref={ref} className={styles.item()} {...props}>
      <Combobox.ItemText className={styles.itemText()} />
      <Combobox.ItemIndicator className={styles.itemIndicator()}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="size-4"
        >
          <path d="M20 6 9 17l-5-5" />
        </svg>
      </Combobox.ItemIndicator>
    </Combobox.Item>
  );
});
ComboboxItem.displayName = "ComboboxItem";
export { ComboboxItem };

export const ComboboxItemText = Combobox.ItemText;
export const ComboboxItemIndicator = Combobox.ItemIndicator;

export { comboboxVariants };