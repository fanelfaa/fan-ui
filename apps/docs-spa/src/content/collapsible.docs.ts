/**
 * Collapsible documentation — source of truth for docs-spa and LLM .md output.
 */
import { type DocSchema, md, demo, install } from "./docs";
import CollapsibleBasicDemo from "../components/demos/collapsible-demo/CollapsibleBasicDemo";
export const docs: DocSchema = {
  name: "Collapsible",
  description: "An interactive component which expands/collapses a panel",
  category: "Data Display",
  blocks: [
    install(),
    demo(CollapsibleBasicDemo),

    md(`## Usage

TODO: Add usage examples for Collapsible.`),

    md(`## API Reference

See the [Ark UI Collapsible](https://ark-ui.com/docs/components/collapsible) documentation.`),
  ],
};
