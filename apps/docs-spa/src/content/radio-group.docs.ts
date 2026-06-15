/**
 * RadioGroup documentation — source of truth for docs-spa and LLM .md output.
 */
import { type DocSchema, md, install } from "./docs";
import RadioGroupBasicDemo from "../components/demos/radio-group-demo/RadioGroupBasicDemo";
export const docs: DocSchema = {
  name: "RadioGroup",
  description: "A set of checkable buttons where only one can be checked",
  category: "Form & Input",
  blocks: [
    { type: "install" },
    demo(RadioGroupBasicDemo),

    md(`## Usage

TODO: Add usage examples for RadioGroup.`),

    md(`## API Reference

See the [Ark UI RadioGroup](https://ark-ui.com/docs/components/radio-group) documentation.`),
  ],
};
