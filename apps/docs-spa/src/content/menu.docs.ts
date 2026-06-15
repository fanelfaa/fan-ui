/**
 * Menu documentation — source of truth for docs-spa and LLM .md output.
 */
import { type DocSchema, md, install } from "./docs";
import MenuBasicDemo from "../components/demos/menu-demo/MenuBasicDemo";
export const docs: DocSchema = {
  name: "Menu",
  description: "A menu of items that can be activated to perform actions",
  category: "Overlay",
  blocks: [
    { type: "install" },
    demo(MenuBasicDemo),

    md(`## Usage

TODO: Add usage examples for Menu.`),

    md(`## API Reference

See the [Ark UI Menu](https://ark-ui.com/docs/components/menu) documentation.`),
  ],
};
