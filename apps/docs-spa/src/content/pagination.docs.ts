/**
 * Pagination documentation — source of truth for docs-spa and LLM .md output.
 */
import { type DocSchema, md, demo, install } from "./docs";
import PaginationBasicDemo from "../components/demos/pagination-demo/PaginationBasicDemo";
export const docs: DocSchema = {
  name: "Pagination",
  description: "Navigation for paged content",
  category: "Navigation",
  blocks: [
    install(),
    demo(PaginationBasicDemo),

    md(`## Usage

TODO: Add usage examples for Pagination.`),

    md(`## API Reference

See the [Ark UI Pagination](https://ark-ui.com/docs/components/pagination) documentation.`),
  ],
};
