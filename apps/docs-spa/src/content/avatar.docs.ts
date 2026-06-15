/**
 * Avatar documentation — source of truth for docs-spa and LLM .md output.
 */
import { type DocSchema, md, demo, install } from "./docs";
import AvatarBasicDemo from "../components/demos/avatar-demo/AvatarBasicDemo";
export const docs: DocSchema = {
  name: "Avatar",
  description: "An image element with a fallback representing the user",
  category: "Data Display",
  blocks: [
    install(),
    demo(AvatarBasicDemo),

    md(`## Usage

TODO: Add usage examples for Avatar.`),

    md(`## API Reference

See the [Ark UI Avatar](https://ark-ui.com/docs/components/avatar) documentation.`),
  ],
};
