import { useFilter } from "@ark-ui/solid";
import { useCombobox, useListCollection } from "@ark-ui/solid/combobox";
import {
  ComboboxRootProvider,
  ComboboxLabel,
  ComboboxControl,
  ComboboxInput,
  ComboboxTrigger,
  ComboboxContent,
} from "@ui/solid";

export default function ComboboxRootProviderDemo() {
  const filterFn = useFilter({ sensitivity: "base" });
  const { collection, filter } = useListCollection({
    initialItems: [
      { label: "React", value: "react" },
      { label: "Solid.js", value: "solid" },
      { label: "Vue", value: "vue" },
      { label: "Svelte", value: "svelte" },
    ],
    filter: filterFn().contains,
  });

  const combobox = useCombobox({
    get collection() {
      return collection();
    },
    defaultValue: ["solid"],
    onInputValueChange(details) {
      filter(details.inputValue);
    },
  });

  return (
    <div class="rounded-lg border border-border p-6 space-y-4">
      <output class="block text-sm text-muted-foreground">
        Value: {JSON.stringify(combobox().value)}
      </output>

      <ComboboxRootProvider value={combobox}>
        <ComboboxLabel>Framework</ComboboxLabel>
        <ComboboxControl>
          <ComboboxInput placeholder="Search frameworks..." />
          <ComboboxTrigger />
        </ComboboxControl>
        <ComboboxContent items={collection().items} />
      </ComboboxRootProvider>
    </div>
  );
}
