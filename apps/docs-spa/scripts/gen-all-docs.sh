#!/bin/bash
# Generate .docs.ts files for all components
# Run from apps/docs-spa/

CONTENT_DIR="src/content"
ROUTES_DIR="src/routes/components"

# Component descriptions extracted from hand-typed routes
declare -A DESCRIPTIONS=(
  ["accordion"]="A vertically stacked header that can be expanded to reveal content"
  ["alert"]="Displays a callout for important information"
  ["alert-dialog"]="A modal dialog for important confirmations or messages"
  ["aspect-ratio"]="Maintains a consistent width-to-height ratio"
  ["avatar"]="An image element with a fallback representing the user"
  ["badge"]="Displays a badge or a component that looks like a badge"
  ["breadcrumb"]="Shows the current page's location within a navigational hierarchy"
  ["card"]="Displays a card with header, content, and footer"
  ["carousel"]="A slideshow component for cycling through elements"
  ["checkbox"]="A control that allows the user to toggle between checked and not checked"
  ["collapsible"]="An interactive component which expands/collapses a panel"
  ["color-picker"]="A control for selecting a color from a palette"
  ["combobox"]="A combobox input with a list of suggestions"
  ["date-picker"]="A date input component with a calendar picker"
  ["drawer"]="A dialog that slides in from the edge of the screen"
  ["hover-card"]="For previewing content related to a trigger element"
  ["input"]="A native input element styled with Tailwind"
  ["listbox"]="A listbox for selecting one or more options"
  ["menu"]="A menu of items that can be activated to perform actions"
  ["number-input"]="A number input field with increment/decrement controls"
  ["pagination"]="Navigation for paged content"
  ["password-input"]="A password input field with show/hide toggle"
  ["pin-input"]="A series of inputs for entering one-time passwords"
  ["popover"]="Displays rich content in a portal, triggered by a button"
  ["progress"]="Shows the progress of a task or operation"
  ["radio-group"]="A set of checkable buttons where only one can be checked"
  ["rating-group"]="A control for rating (e.g. star ratings)"
  ["scroll-area"]="A scrollable container with custom scrollbar"
  ["segment-group"]="A single-select segment control"
  ["separator"]="Visually or semantically separates content"
  ["skeleton"]="Use to show a placeholder while content is loading"
  ["slider"]="A control for selecting a value from a range"
  ["spinner"]="A visual indicator of loading"
  ["switch"]="A control that can be toggled between on and off"
  ["table"]="A structured set of data with rows and columns"
  ["tabs"]="A set of layered sections of content, known as tab panels"
  ["tags-input"]="An input for entering multiple tags"
  ["textarea"]="A native textarea element styled with Tailwind"
  ["toast"]="A brief message that appears temporarily"
  ["toggle"]="A two-state button that can be either on or off"
  ["toggle-group"]="A set of two-state buttons that can be toggled on or off"
  ["tooltip"]="A popup that displays information on hover"
  ["typography"]="Text styling components for headings, paragraphs, and more"
)

# Category mapping
declare -A CATEGORIES=(
  ["accordion"]="Data Display"
  ["alert"]="Feedback"
  ["alert-dialog"]="Overlay"
  ["aspect-ratio"]="Layout"
  ["avatar"]="Data Display"
  ["badge"]="Data Display"
  ["breadcrumb"]="Navigation"
  ["card"]="Data Display"
  ["carousel"]="Data Display"
  ["checkbox"]="Form & Input"
  ["collapsible"]="Data Display"
  ["color-picker"]="Form & Input"
  ["combobox"]="Form & Input"
  ["date-picker"]="Form & Input"
  ["drawer"]="Overlay"
  ["hover-card"]="Overlay"
  ["input"]="Form & Input"
  ["listbox"]="Form & Input"
  ["menu"]="Overlay"
  ["number-input"]="Form & Input"
  ["pagination"]="Navigation"
  ["password-input"]="Form & Input"
  ["pin-input"]="Form & Input"
  ["popover"]="Overlay"
  ["progress"]="Feedback"
  ["radio-group"]="Form & Input"
  ["rating-group"]="Form & Input"
  ["scroll-area"]="Data Display"
  ["segment-group"]="Form & Input"
  ["separator"]="Layout"
  ["skeleton"]="Data Display"
  ["slider"]="Form & Input"
  ["spinner"]="Feedback"
  ["switch"]="Form & Input"
  ["table"]="Data Display"
  ["tabs"]="Navigation"
  ["tags-input"]="Form & Input"
  ["textarea"]="Form & Input"
  ["toast"]="Feedback"
  ["toggle"]="Form & Input"
  ["toggle-group"]="Navigation"
  ["tooltip"]="Overlay"
  ["typography"]="Data Display"
)

# Already migrated
MIGRATED="button select dialog"

# Skip
SKIP="quickstart"

mkdir -p "$CONTENT_DIR"

for route_file in "$ROUTES_DIR"/*.tsx; do
  name=$(basename "$route_file" .tsx)
  
  # Skip already migrated
  if echo "$MIGRATED" | grep -qw "$name"; then
    echo "⏭️  $name (already migrated)"
    continue
  fi
  
  # Skip non-components
  if [ "$name" = "$SKIP" ] || [[ "$name" == \$* ]]; then
    echo "⏭️  $name (skipped)"
    continue
  fi
  
  # Get description
  desc="${DESCRIPTIONS[$name]}"
  if [ -z "$desc" ]; then
    desc="TODO: Add description for $name"
  fi
  
  # Get category
  category="${CATEGORIES[$name]}"
  if [ -z "$category" ]; then
    category="Other"
  fi
  
  # Convert to PascalCase
  pascal=$(echo "$name" | sed -r 's/(^|-)([a-z])/\U\2/g')
  
  # Check if demo exists
  demo_dir="src/components/demos/${name}-demo"
  demo_file="${demo_dir}/${pascal}BasicDemo.tsx"
  demo_import=""
  demo_block=""
  
  if [ -f "$demo_file" ]; then
    if grep -q "export default" "$demo_file"; then
      demo_import="import ${pascal}BasicDemo from \"../components/demos/${name}-demo/${pascal}BasicDemo\";"
    else
      demo_import="import { ${pascal}BasicDemo } from \"../components/demos/${name}-demo/${pascal}BasicDemo\";"
    fi
    demo_block="
    demo(${pascal}BasicDemo),"
  fi
  
  # Generate .docs.ts file
  cat > "$CONTENT_DIR/${name}.docs.ts" << EOF
/**
 * ${pascal} documentation — source of truth for docs-spa and LLM .md output.
 */
import { type DocSchema, md, install } from "./docs";
${demo_import:+$demo_import
}export const docs: DocSchema = {
  name: "${pascal}",
  description: "${desc}",
  category: "${category}",
  blocks: [
    { type: "install" },${demo_block}

    md(\`## Usage

TODO: Add usage examples for ${pascal}.\`),

    md(\`## API Reference

See the [Ark UI ${pascal}](https://ark-ui.com/docs/components/${name}) documentation.\`),
  ],
};
EOF
  
  echo "✅ ${name}.docs.ts ($category)"
done

echo ""
echo "Done! Created .docs.ts files for all components"
