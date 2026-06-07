import { ColorPicker } from "@ui/solid";

export default function ColorPickerInlineDemo() {
  return (
    <div class="rounded-lg border border-border p-6">
      <ColorPicker
        inline
        label="Inline Color Picker"
        presets={["#ff0000", "#00ff00", "#0000ff"]}
      />
    </div>
  );
}
