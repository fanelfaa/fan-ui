/**
 * DatePicker documentation — source of truth for docs-spa and LLM .md output.
 */
import { type DocSchema, md, demo, install } from "./docs";
import DatePickerBasicDemo from "../components/demos/date-picker-demo/DatePickerBasicDemo";
export const docs: DocSchema = {
  name: "DatePicker",
  description: "A date input component with a calendar picker",
  category: "Form & Input",
  blocks: [
    install(),
    demo(DatePickerBasicDemo),

    md(`## Usage

TODO: Add usage examples for DatePicker.`),

    md(`## API Reference

See the [Ark UI DatePicker](https://ark-ui.com/docs/components/date-picker) documentation.`),
  ],
};
