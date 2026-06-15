/**
 * Spinner documentation — source of truth for docs-spa and LLM .md output.
 */
import { type DocSchema, md, demo, install } from "./docs";
import SpinnerBasicDemo from "../components/demos/spinner-demo/SpinnerBasicDemo";
export const docs: DocSchema = {
  name: "Spinner",
  description: "A visual indicator of loading",
  category: "Feedback",
  blocks: [
    install(),
    demo(SpinnerBasicDemo),

    md(`## Usage

TODO: Add usage examples for Spinner.`),

    md(`## API Reference

See the [Ark UI Spinner](https://ark-ui.com/docs/components/spinner) documentation.`),
  ],
};
