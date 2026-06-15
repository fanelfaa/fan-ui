/**
 * AspectRatio documentation — source of truth for docs-spa and LLM .md output.
 */
import { type DocSchema, md, install } from "./docs";
import AspectRatioBasicDemo from "../components/demos/aspect-ratio-demo/AspectRatioBasicDemo";
export const docs: DocSchema = {
  name: "AspectRatio",
  description: "Maintains a consistent width-to-height ratio",
  category: "Layout",
  blocks: [
    { type: "install" },
    demo(AspectRatioBasicDemo),

    md(`## Usage

TODO: Add usage examples for AspectRatio.`),

    md(`## API Reference

See the [Ark UI AspectRatio](https://ark-ui.com/docs/components/aspect-ratio) documentation.`),
  ],
};
