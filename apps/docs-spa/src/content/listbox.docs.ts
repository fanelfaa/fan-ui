/**
 * Listbox documentation — source of truth for docs-spa and LLM .md output.
 */
import { type DocSchema, md, demo, install } from "./docs";
import ListboxBasicDemo from "../components/demos/listbox-demo/ListboxBasicDemo";
export const docs: DocSchema = {
  name: "Listbox",
  description: "A listbox for selecting one or more options",
  category: "Form & Input",
  blocks: [
    install(),
    demo(ListboxBasicDemo),

    md(`## Usage

TODO: Add usage examples for Listbox.`),

    md(`## API Reference

See the [Ark UI Listbox](https://ark-ui.com/docs/components/listbox) documentation.`),
  ],
};
