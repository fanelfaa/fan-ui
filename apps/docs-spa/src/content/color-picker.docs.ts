/**
 * ColorPicker documentation — source of truth for docs-spa and LLM .md output.
 */
import { type DocSchema, md, install } from "./docs";
import ColorPickerBasicDemo from "../components/demos/color-picker-demo/ColorPickerBasicDemo";
export const docs: DocSchema = {
  name: "ColorPicker",
  description: "A control for selecting a color from a palette",
  category: "Form & Input",
  blocks: [
    { type: "install" },
    demo(ColorPickerBasicDemo),

    md(`## Usage

TODO: Add usage examples for ColorPicker.`),

    md(`## API Reference

See the [Ark UI ColorPicker](https://ark-ui.com/docs/components/color-picker) documentation.`),
  ],
};
