/**
 * Toast documentation — source of truth for docs-spa and LLM .md output.
 */
import { type DocSchema, md, demo, install } from "./docs";
import ToastBasicDemo from "../components/demos/toast-demo/ToastBasicDemo";
export const docs: DocSchema = {
  name: "Toast",
  description: "A brief message that appears temporarily",
  category: "Feedback",
  blocks: [
    install(),
    demo(ToastBasicDemo),

    md(`## Usage

TODO: Add usage examples for Toast.`),

    md(`## API Reference

See the [Ark UI Toast](https://ark-ui.com/docs/components/toast) documentation.`),
  ],
};
