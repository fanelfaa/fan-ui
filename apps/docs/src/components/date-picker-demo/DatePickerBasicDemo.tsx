import { DatePicker, DatePickerLabel, DatePickerControl } from "@ui/solid";

export default function DatePickerBasicDemo() {
  return (
    <div class="rounded-lg border border-border p-6">
      <DatePicker class="flex flex-col gap-1">
        <DatePickerLabel>Label</DatePickerLabel>
        <DatePickerControl />
      </DatePicker>
    </div>
  );
}
