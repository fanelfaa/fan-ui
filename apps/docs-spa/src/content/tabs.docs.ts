/**
 * Tabs documentation — source of truth for docs-spa and LLM .md output.
 */
import { type DocSchema, md, demo, install } from "./docs";
import TabsBasicDemo from "../components/demos/tabs-demo/TabsBasicDemo";
export const docs: DocSchema = {
  name: "Tabs",
  description: "A set of layered sections of content, known as tab panels",
  category: "Navigation",
  blocks: [
    install(),
    demo(TabsBasicDemo),

    md(`## Usage

TODO: Add usage examples for Tabs.`),

    md(`## API Reference

See the [Ark UI Tabs](https://ark-ui.com/docs/components/tabs) documentation.`),
  ],
};
