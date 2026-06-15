/**
 * Checkbox documentation — source of truth for docs-spa and LLM .md output.
 */
import { type DocSchema, md, install } from "./docs";
import CheckboxBasicDemo from "../components/demos/checkbox-demo/CheckboxBasicDemo";
export const docs: DocSchema = {
  name: "Checkbox",
  description: "A control that allows the user to toggle between checked and not checked",
  category: "Form & Input",
  blocks: [
    { type: "install" },
    demo(CheckboxBasicDemo),

    md(`## Usage

TODO: Add usage examples for Checkbox.`),

    md(`## API Reference

See the [Ark UI Checkbox](https://ark-ui.com/docs/components/checkbox) documentation.`),
  ],
};
