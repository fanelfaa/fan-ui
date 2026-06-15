/**
 * Progress documentation — source of truth for docs-spa and LLM .md output.
 */
import { type DocSchema, md, demo, install } from "./docs";
import ProgressBasicDemo from "../components/demos/progress-demo/ProgressBasicDemo";
export const docs: DocSchema = {
  name: "Progress",
  description: "Shows the progress of a task or operation",
  category: "Feedback",
  blocks: [
    install(),
    demo(ProgressBasicDemo),

    md(`## Usage

TODO: Add usage examples for Progress.`),

    md(`## API Reference

See the [Ark UI Progress](https://ark-ui.com/docs/components/progress) documentation.`),
  ],
};
