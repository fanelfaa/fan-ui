/**
 * Badge documentation — source of truth for docs-spa and LLM .md output.
 */
import { type DocSchema, md, demo, install } from "./docs";
import BadgeBasicDemo from "../components/demos/badge-demo/BadgeBasicDemo";
export const docs: DocSchema = {
  name: "Badge",
  description: "Displays a badge or a component that looks like a badge",
  category: "Data Display",
  blocks: [
    install(),
    demo(BadgeBasicDemo),

    md(`## Usage

TODO: Add usage examples for Badge.`),

    md(`## API Reference

See the [Ark UI Badge](https://ark-ui.com/docs/components/badge) documentation.`),
  ],
};
