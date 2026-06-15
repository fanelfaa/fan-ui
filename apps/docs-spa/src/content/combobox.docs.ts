/**
 * Combobox documentation — source of truth for docs-spa and LLM .md output.
 */
import { type DocSchema, md, install } from "./docs";
import ComboboxBasicDemo from "../components/demos/combobox-demo/ComboboxBasicDemo";
export const docs: DocSchema = {
  name: "Combobox",
  description: "A combobox input with a list of suggestions",
  category: "Form & Input",
  blocks: [
    { type: "install" },
    demo(ComboboxBasicDemo),

    md(`## Usage

TODO: Add usage examples for Combobox.`),

    md(`## API Reference

See the [Ark UI Combobox](https://ark-ui.com/docs/components/combobox) documentation.`),
  ],
};
