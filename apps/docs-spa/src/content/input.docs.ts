/**
 * Input documentation — source of truth for docs-spa and LLM .md output.
 */
import { type DocSchema, md, demo, install } from "./docs";
import InputBasicDemo from "../components/demos/input-demo/InputBasicDemo";
export const docs: DocSchema = {
  name: "Input",
  description: "A native input element styled with Tailwind",
  category: "Form & Input",
  blocks: [
    install(),
    demo(InputBasicDemo),

    md(`## Usage

TODO: Add usage examples for Input.`),

    md(`## API Reference

See the [Ark UI Input](https://ark-ui.com/docs/components/input) documentation.`),
  ],
};
