/**
 * ToggleGroup documentation — source of truth for docs-spa and LLM .md output.
 */
import { type DocSchema, md, demo, install } from "./docs";
import ToggleGroupBasicDemo from "../components/demos/toggle-group-demo/ToggleGroupBasicDemo";
export const docs: DocSchema = {
  name: "ToggleGroup",
  description: "A set of two-state buttons that can be toggled on or off",
  category: "Navigation",
  blocks: [
    install(),
    demo(ToggleGroupBasicDemo),

    md(`## Usage

TODO: Add usage examples for ToggleGroup.`),

    md(`## API Reference

See the [Ark UI ToggleGroup](https://ark-ui.com/docs/components/toggle-group) documentation.`),
  ],
};
