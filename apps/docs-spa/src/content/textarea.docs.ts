/**
 * Textarea documentation — source of truth for docs-spa and LLM .md output.
 */
import { type DocSchema, md, install } from "./docs";
import TextareaBasicDemo from "../components/demos/textarea-demo/TextareaBasicDemo";
export const docs: DocSchema = {
  name: "Textarea",
  description: "A native textarea element styled with Tailwind",
  category: "Form & Input",
  blocks: [
    { type: "install" },
    demo(TextareaBasicDemo),

    md(`## Usage

TODO: Add usage examples for Textarea.`),

    md(`## API Reference

See the [Ark UI Textarea](https://ark-ui.com/docs/components/textarea) documentation.`),
  ],
};
