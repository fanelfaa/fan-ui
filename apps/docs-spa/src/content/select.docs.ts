/**
 * Select documentation — source of truth for docs-spa and LLM .md output.
 */
import { type DocSchema, md, demo, install } from "./docs";
import SelectBasicDemo from "../components/demos/select-demo/SelectBasicDemo";

export const docs: DocSchema = {
  name: "Select",
  description: "A dropdown component that allows users to select one or more options from a list.",
  category: "Form & Input",
  blocks: [
    { type: "install" },

    md(`## Usage

Import the components:

\`\`\`tsx
import {
  Select,
  SelectLabel,
  SelectTrigger,
  SelectContent,
  SelectItem,
} from "@fan-ui/solid";
import { createListCollection } from "@ark-ui/solid";
\`\`\`

Basic usage:

\`\`\`tsx
const frameworks = createListCollection({
  items: [
    { label: "React", value: "react" },
    { label: "Vue", value: "vue" },
    { label: "Solid", value: "solid" },
  ],
});

<Select collection={frameworks} defaultValue={["solid"]}>
  <SelectLabel>Framework</SelectLabel>
  <SelectTrigger>
    <SelectValue placeholder="Select" />
  </SelectTrigger>
  <SelectContent>
    <For each={frameworks.items}>
      {(item) => (
        <SelectItem item={item}>{item.label}</SelectItem>
      )}
    </For>
  </SelectContent>
</Select>
\`\`\``),

    demo(SelectBasicDemo),

    md(`### With Label

Add a label to describe the select field:

\`\`\`tsx
<SelectLabel>Framework</SelectLabel>
\`\`\``),

    md(`### Controlled

Use \`value\` and \`onValueChange\` for controlled usage.

\`\`\`tsx
const [value, setValue] = createSignal<string[]>([]);

<Select collection={frameworks} value={value()} onValueChange={setValue}>
  ...
</Select>
\`\`\``),

    md(`### Multiple Selection

Select supports multiple selection via the \`multiple\` prop:

\`\`\`tsx
<Select collection={frameworks} multiple>
  ...
</Select>
\`\`\``),

    md(`### Error State

Use the \`error\` prop to show an error state:

\`\`\`tsx
<Select collection={frameworks} error>
  ...
</Select>
\`\`\``),

    md(`## API Reference

See the [Ark UI Select](https://ark-ui.com/docs/components/select) documentation.`),
  ],
};
