/**
 * Tooltip documentation — source of truth for docs-spa and LLM .md output.
 */
import { type DocSchema, md, install } from "./docs";
import TooltipBasicDemo from "../components/demos/tooltip-demo/TooltipBasicDemo";
export const docs: DocSchema = {
  name: "Tooltip",
  description: "A popup that displays information on hover",
  category: "Overlay",
  blocks: [
    { type: "install" },
    demo(TooltipBasicDemo),

    md(`## Usage

TODO: Add usage examples for Tooltip.`),

    md(`## API Reference

See the [Ark UI Tooltip](https://ark-ui.com/docs/components/tooltip) documentation.`),
  ],
};
