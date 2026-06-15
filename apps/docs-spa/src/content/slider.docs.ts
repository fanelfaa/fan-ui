/**
 * Slider documentation — source of truth for docs-spa and LLM .md output.
 */
import { type DocSchema, md, demo, install } from "./docs";
import SliderBasicDemo from "../components/demos/slider-demo/SliderBasicDemo";
export const docs: DocSchema = {
  name: "Slider",
  description: "A control for selecting a value from a range",
  category: "Form & Input",
  blocks: [
    install(),
    demo(SliderBasicDemo),

    md(`## Usage

TODO: Add usage examples for Slider.`),

    md(`## API Reference

See the [Ark UI Slider](https://ark-ui.com/docs/components/slider) documentation.`),
  ],
};
