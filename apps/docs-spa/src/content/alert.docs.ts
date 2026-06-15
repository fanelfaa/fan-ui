/**
 * Alert documentation — source of truth for docs-spa and LLM .md output.
 */
import { type DocSchema, md, install } from "./docs";
import AlertBasicDemo from "../components/demos/alert-demo/AlertBasicDemo";
export const docs: DocSchema = {
  name: "Alert",
  description: "Displays a callout for important information",
  category: "Feedback",
  blocks: [
    { type: "install" },
    demo(AlertBasicDemo),

    md(`## Usage

TODO: Add usage examples for Alert.`),

    md(`## API Reference

See the [Ark UI Alert](https://ark-ui.com/docs/components/alert) documentation.`),
  ],
};
