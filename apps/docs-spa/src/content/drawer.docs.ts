/**
 * Drawer documentation — source of truth for docs-spa and LLM .md output.
 */
import { type DocSchema, md, install } from "./docs";
import DrawerBasicDemo from "../components/demos/drawer-demo/DrawerBasicDemo";
export const docs: DocSchema = {
  name: "Drawer",
  description: "A dialog that slides in from the edge of the screen",
  category: "Overlay",
  blocks: [
    { type: "install" },
    demo(DrawerBasicDemo),

    md(`## Usage

TODO: Add usage examples for Drawer.`),

    md(`## API Reference

See the [Ark UI Drawer](https://ark-ui.com/docs/components/drawer) documentation.`),
  ],
};
