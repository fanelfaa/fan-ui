/**
 * ScrollArea documentation — source of truth for docs-spa and LLM .md output.
 */
import { type DocSchema, md, demo, install } from "./docs";
import ScrollAreaBasicDemo from "../components/demos/scroll-area-demo/ScrollAreaBasicDemo";
export const docs: DocSchema = {
  name: "ScrollArea",
  description: "A scrollable container with custom scrollbar",
  category: "Data Display",
  blocks: [
    install(),
    demo(ScrollAreaBasicDemo),

    md(`## Usage

TODO: Add usage examples for ScrollArea.`),

    md(`## API Reference

See the [Ark UI ScrollArea](https://ark-ui.com/docs/components/scroll-area) documentation.`),
  ],
};
