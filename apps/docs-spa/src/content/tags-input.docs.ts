/**
 * TagsInput documentation — source of truth for docs-spa and LLM .md output.
 */
import { type DocSchema, md, demo, install } from "./docs";
import TagsInputBasicDemo from "../components/demos/tags-input-demo/TagsInputBasicDemo";
export const docs: DocSchema = {
  name: "TagsInput",
  description: "An input for entering multiple tags",
  category: "Form & Input",
  blocks: [
    install(),
    demo(TagsInputBasicDemo),

    md(`## Usage

TODO: Add usage examples for TagsInput.`),

    md(`## API Reference

See the [Ark UI TagsInput](https://ark-ui.com/docs/components/tags-input) documentation.`),
  ],
};
