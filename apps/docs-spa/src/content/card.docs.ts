/**
 * Card documentation — source of truth for docs-spa and LLM .md output.
 */
import { type DocSchema, md, install } from "./docs";
import CardBasicDemo from "../components/demos/card-demo/CardBasicDemo";
export const docs: DocSchema = {
  name: "Card",
  description: "Displays a card with header, content, and footer",
  category: "Data Display",
  blocks: [
    { type: "install" },
    demo(CardBasicDemo),

    md(`## Usage

TODO: Add usage examples for Card.`),

    md(`## API Reference

See the [Ark UI Card](https://ark-ui.com/docs/components/card) documentation.`),
  ],
};
