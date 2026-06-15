/**
 * HoverCard documentation — source of truth for docs-spa and LLM .md output.
 */
import { type DocSchema, md, demo, install } from "./docs";
import HoverCardBasicDemo from "../components/demos/hover-card-demo/HoverCardBasicDemo";
export const docs: DocSchema = {
  name: "HoverCard",
  description: "For previewing content related to a trigger element",
  category: "Overlay",
  blocks: [
    install(),
    demo(HoverCardBasicDemo),

    md(`## Usage

TODO: Add usage examples for HoverCard.`),

    md(`## API Reference

See the [Ark UI HoverCard](https://ark-ui.com/docs/components/hover-card) documentation.`),
  ],
};
