/**
 * Carousel documentation — source of truth for docs-spa and LLM .md output.
 */
import { type DocSchema, md, demo, install } from "./docs";
import CarouselBasicDemo from "../components/demos/carousel-demo/CarouselBasicDemo";
export const docs: DocSchema = {
  name: "Carousel",
  description: "A slideshow component for cycling through elements",
  category: "Data Display",
  blocks: [
    install(),
    demo(CarouselBasicDemo),

    md(`## Usage

TODO: Add usage examples for Carousel.`),

    md(`## API Reference

See the [Ark UI Carousel](https://ark-ui.com/docs/components/carousel) documentation.`),
  ],
};
