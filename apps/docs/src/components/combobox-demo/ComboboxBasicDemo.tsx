import { type ComboboxInputValueChangeDetails, useFilter, useListCollection } from "@ark-ui/solid";
import {
  ComboboxRoot,
  ComboboxLabel,
  ComboboxControl,
  ComboboxInput,
  ComboboxTrigger,
  ComboboxContent,
} from "@ui/solid";

export default function ComboboxBasicDemo() {
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

  const handleInputChange = (details: ComboboxInputValueChangeDetails) => {
    filter(details.inputValue);
  };

  return (
    <div class="rounded-lg border border-border p-6">
      <ComboboxRoot collection={collection()} onInputValueChange={handleInputChange}>
        <ComboboxLabel>Framework</ComboboxLabel>
        <ComboboxControl>
          <ComboboxInput placeholder="Search frameworks..." />
          <ComboboxTrigger />
        </ComboboxControl>
        <ComboboxContent items={collection().items} />
      </ComboboxRoot>
    </div>
  );
}
