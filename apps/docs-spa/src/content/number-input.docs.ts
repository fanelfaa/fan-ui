/**
 * NumberInput documentation — source of truth for docs-spa and LLM .md output.
 */
import { type DocSchema, md, install } from "./docs";
import NumberInputBasicDemo from "../components/demos/number-input-demo/NumberInputBasicDemo";
export const docs: DocSchema = {
  name: "NumberInput",
  description: "A number input field with increment/decrement controls",
  category: "Form & Input",
  blocks: [
    { type: "install" },
    demo(NumberInputBasicDemo),

    md(`## Usage

TODO: Add usage examples for NumberInput.`),

    md(`## API Reference

See the [Ark UI NumberInput](https://ark-ui.com/docs/components/number-input) documentation.`),
  ],
};
