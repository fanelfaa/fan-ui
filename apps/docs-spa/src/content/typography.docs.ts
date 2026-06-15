/**
 * Typography documentation — source of truth for docs-spa and LLM .md output.
 */
import { type DocSchema, md, demo, install } from "./docs";
import TypographyBasicDemo from "../components/demos/typography-demo/TypographyBasicDemo";
export const docs: DocSchema = {
  name: "Typography",
  description: "Text styling components for headings, paragraphs, and more",
  category: "Data Display",
  blocks: [
    install(),
    demo(TypographyBasicDemo),

    md(`## Usage

TODO: Add usage examples for Typography.`),

    md(`## API Reference

See the [Ark UI Typography](https://ark-ui.com/docs/components/typography) documentation.`),
  ],
};
