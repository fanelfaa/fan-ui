/**
 * Accordion documentation — source of truth for docs-spa and LLM .md output.
 */
import { type DocSchema, md, demo, install } from "./docs";
import AccordionBasicDemo from "../components/demos/accordion-demo/AccordionBasicDemo";
export const docs: DocSchema = {
  name: "Accordion",
  description: "A vertically stacked header that can be expanded to reveal content",
  category: "Data Display",
  blocks: [
    install(),
    demo(AccordionBasicDemo),

    md(`## Usage

TODO: Add usage examples for Accordion.`),

    md(`## API Reference

See the [Ark UI Accordion](https://ark-ui.com/docs/components/accordion) documentation.`),
  ],
};
