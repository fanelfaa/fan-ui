/**
 * RatingGroup documentation — source of truth for docs-spa and LLM .md output.
 */
import { type DocSchema, md, demo, install } from "./docs";
import RatingGroupBasicDemo from "../components/demos/rating-group-demo/RatingGroupBasicDemo";
export const docs: DocSchema = {
  name: "RatingGroup",
  description: "A control for rating (e.g. star ratings)",
  category: "Form & Input",
  blocks: [
    install(),
    demo(RatingGroupBasicDemo),

    md(`## Usage

TODO: Add usage examples for RatingGroup.`),

    md(`## API Reference

See the [Ark UI RatingGroup](https://ark-ui.com/docs/components/rating-group) documentation.`),
  ],
};
