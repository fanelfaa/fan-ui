/**
 * PasswordInput documentation — source of truth for docs-spa and LLM .md output.
 */
import { type DocSchema, md, install } from "./docs";
import PasswordInputBasicDemo from "../components/demos/password-input-demo/PasswordInputBasicDemo";
export const docs: DocSchema = {
  name: "PasswordInput",
  description: "A password input field with show/hide toggle",
  category: "Form & Input",
  blocks: [
    { type: "install" },
    demo(PasswordInputBasicDemo),

    md(`## Usage

TODO: Add usage examples for PasswordInput.`),

    md(`## API Reference

See the [Ark UI PasswordInput](https://ark-ui.com/docs/components/password-input) documentation.`),
  ],
};
