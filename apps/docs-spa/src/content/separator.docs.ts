/**
 * Separator documentation — source of truth for docs-spa and LLM .md output.
 */
import { type DocSchema, md, demo, install } from "./docs";
import SeparatorBasicDemo from "../components/demos/separator-demo/SeparatorBasicDemo";
export const docs: DocSchema = {
  name: "Separator",
  description: "Visually or semantically separates content",
  category: "Layout",
  blocks: [
    install(),
    demo(SeparatorBasicDemo),

    md(`## Usage

TODO: Add usage examples for Separator.`),

    md(`## API Reference

See the [Ark UI Separator](https://ark-ui.com/docs/components/separator) documentation.`),
  ],
};
