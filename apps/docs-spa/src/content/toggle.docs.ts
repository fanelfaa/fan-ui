/**
 * Toggle documentation — source of truth for docs-spa and LLM .md output.
 */
import { type DocSchema, md, demo, install } from "./docs";
import ToggleBasicDemo from "../components/demos/toggle-demo/ToggleBasicDemo";
export const docs: DocSchema = {
  name: "Toggle",
  description: "A two-state button that can be either on or off",
  category: "Form & Input",
  blocks: [
    install(),
    demo(ToggleBasicDemo),

    md(`## Usage

TODO: Add usage examples for Toggle.`),

    md(`## API Reference

See the [Ark UI Toggle](https://ark-ui.com/docs/components/toggle) documentation.`),
  ],
};
