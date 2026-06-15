/**
 * SegmentGroup documentation — source of truth for docs-spa and LLM .md output.
 */
import { type DocSchema, md, install } from "./docs";
import SegmentGroupBasicDemo from "../components/demos/segment-group-demo/SegmentGroupBasicDemo";
export const docs: DocSchema = {
  name: "SegmentGroup",
  description: "A single-select segment control",
  category: "Form & Input",
  blocks: [
    { type: "install" },
    demo(SegmentGroupBasicDemo),

    md(`## Usage

TODO: Add usage examples for SegmentGroup.`),

    md(`## API Reference

See the [Ark UI SegmentGroup](https://ark-ui.com/docs/components/segment-group) documentation.`),
  ],
};
