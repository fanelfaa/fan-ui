/**
 * Table documentation — source of truth for docs-spa and LLM .md output.
 */
import { type DocSchema, md, install } from "./docs";
import TableBasicDemo from "../components/demos/table-demo/TableBasicDemo";
export const docs: DocSchema = {
  name: "Table",
  description: "A structured set of data with rows and columns",
  category: "Data Display",
  blocks: [
    { type: "install" },
    demo(TableBasicDemo),

    md(`## Usage

TODO: Add usage examples for Table.`),

    md(`## API Reference

See the [Ark UI Table](https://ark-ui.com/docs/components/table) documentation.`),
  ],
};
