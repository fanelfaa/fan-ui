/**
 * PinInput documentation — source of truth for docs-spa and LLM .md output.
 */
import { type DocSchema, md, demo, install } from "./docs";
import PinInputBasicDemo from "../components/demos/pin-input-demo/PinInputBasicDemo";
export const docs: DocSchema = {
  name: "PinInput",
  description: "A series of inputs for entering one-time passwords",
  category: "Form & Input",
  blocks: [
    install(),
    demo(PinInputBasicDemo),

    md(`## Usage

TODO: Add usage examples for PinInput.`),

    md(`## API Reference

See the [Ark UI PinInput](https://ark-ui.com/docs/components/pin-input) documentation.`),
  ],
};
