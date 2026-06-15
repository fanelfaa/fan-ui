/**
 * Breadcrumb documentation — source of truth for docs-spa and LLM .md output.
 */
import { type DocSchema, md, install } from "./docs";
import BreadcrumbBasicDemo from "../components/demos/breadcrumb-demo/BreadcrumbBasicDemo";
export const docs: DocSchema = {
  name: "Breadcrumb",
  description: "Shows the current page's location within a navigational hierarchy",
  category: "Navigation",
  blocks: [
    { type: "install" },
    demo(BreadcrumbBasicDemo),

    md(`## Usage

TODO: Add usage examples for Breadcrumb.`),

    md(`## API Reference

See the [Ark UI Breadcrumb](https://ark-ui.com/docs/components/breadcrumb) documentation.`),
  ],
};
