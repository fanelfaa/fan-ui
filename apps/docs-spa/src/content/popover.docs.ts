/**
 * Popover documentation — source of truth for docs-spa and LLM .md output.
 */
import { type DocSchema, md, install } from "./docs";
import PopoverBasicDemo from "../components/demos/popover-demo/PopoverBasicDemo";
export const docs: DocSchema = {
  name: "Popover",
  description: "Displays rich content in a portal, triggered by a button",
  category: "Overlay",
  blocks: [
    { type: "install" },
    demo(PopoverBasicDemo),

    md(`## Usage

TODO: Add usage examples for Popover.`),

    md(`## API Reference

See the [Ark UI Popover](https://ark-ui.com/docs/components/popover) documentation.`),
  ],
};
