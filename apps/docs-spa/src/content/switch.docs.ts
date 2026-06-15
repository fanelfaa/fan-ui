/**
 * Switch documentation — source of truth for docs-spa and LLM .md output.
 */
import { type DocSchema, md, install } from "./docs";
import SwitchBasicDemo from "../components/demos/switch-demo/SwitchBasicDemo";
export const docs: DocSchema = {
  name: "Switch",
  description: "A control that can be toggled between on and off",
  category: "Form & Input",
  blocks: [
    { type: "install" },
    demo(SwitchBasicDemo),

    md(`## Usage

TODO: Add usage examples for Switch.`),

    md(`## API Reference

See the [Ark UI Switch](https://ark-ui.com/docs/components/switch) documentation.`),
  ],
};
