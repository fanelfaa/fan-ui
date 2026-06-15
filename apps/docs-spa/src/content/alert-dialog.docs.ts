/**
 * AlertDialog documentation — source of truth for docs-spa and LLM .md output.
 */
import { type DocSchema, md, demo, install } from "./docs";
import AlertDialogBasicDemo from "../components/demos/alert-dialog-demo/AlertDialogBasicDemo";
export const docs: DocSchema = {
  name: "AlertDialog",
  description: "A modal dialog for important confirmations or messages",
  category: "Overlay",
  blocks: [
    install(),
    demo(AlertDialogBasicDemo),

    md(`## Usage

TODO: Add usage examples for AlertDialog.`),

    md(`## API Reference

See the [Ark UI AlertDialog](https://ark-ui.com/docs/components/alert-dialog) documentation.`),
  ],
};
