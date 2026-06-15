/**
 * Skeleton documentation — source of truth for docs-spa and LLM .md output.
 */
import { type DocSchema, md, install } from "./docs";
import SkeletonBasicDemo from "../components/demos/skeleton-demo/SkeletonBasicDemo";
export const docs: DocSchema = {
  name: "Skeleton",
  description: "Use to show a placeholder while content is loading",
  category: "Data Display",
  blocks: [
    { type: "install" },
    demo(SkeletonBasicDemo),

    md(`## Usage

TODO: Add usage examples for Skeleton.`),

    md(`## API Reference

See the [Ark UI Skeleton](https://ark-ui.com/docs/components/skeleton) documentation.`),
  ],
};
