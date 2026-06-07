import { ColorPicker } from "@ui/solid";
import { parseColor } from "@ark-ui/solid/color-picker";

export default function ColorPickerControlledDemo() {
  return (
    <div class="rounded-lg border border-border p-6">
      <ColorPicker
        label="Color"
        defaultValue={parseColor("#eb5e41")}
        presets={["#ff0000", "#00ff00", "#0000ff"]}
      />
    </div>
  );
}
