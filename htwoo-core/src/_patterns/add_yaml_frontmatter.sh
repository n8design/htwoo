#!/bin/bash

# Script to add YAML frontmatter to markdown files that don't have it

cd /Volumes/Code/n8design/projects/htwoo/htwoo-core/src/_patterns

# Function to add YAML frontmatter to a file
add_frontmatter() {
    local file="$1"
    local title="$2"
    local order="$3"
    
    # Check if file already has YAML frontmatter
    if ! head -1 "$file" | grep -q "^---"; then
        # Create temporary file with YAML frontmatter
        temp_file=$(mktemp)
        echo "---" > "$temp_file"
        echo "title: $title" >> "$temp_file"
        if [ -n "$order" ]; then
            echo "order: $order" >> "$temp_file"
        fi
        echo "---" >> "$temp_file"
        echo "" >> "$temp_file"
        cat "$file" >> "$temp_file"
        
        # Replace original file
        mv "$temp_file" "$file"
        echo "Added YAML frontmatter to: $file"
    fi
}

# Process molecule quick-links files
add_frontmatter "./molecules/quick-links/ql-tiles-fill.md" "Quick Link Tiles - Fill" "22"
add_frontmatter "./molecules/quick-links/ql-tiles-large.md" "Quick Link Tiles - Large" "23"
add_frontmatter "./molecules/quick-links/ql-tiles-xlarge.md" "Quick Link Tiles - XLarge" "24"
add_frontmatter "./molecules/quick-links/ql-list-button-fill-oneline.md" "Quick Link Button - Fill One Line" "30"
add_frontmatter "./molecules/quick-links/ql-list-button-outline.md" "Quick Link Button - Outline" "31"
add_frontmatter "./molecules/quick-links/ql-list-button-no-outline-center.md" "Quick Link Button - No Outline Center" "32"
add_frontmatter "./molecules/quick-links/ql-list-button-fill-center-oneline.md" "Quick Link Button - Fill Center One Line" "33"
add_frontmatter "./molecules/quick-links/ql-list-button-no-outline-center-oneline.md" "Quick Link Button - No Outline Center One Line" "34"
add_frontmatter "./molecules/quick-links/ql-list-button-fill-center.md" "Quick Link Button - Fill Center" "35"
add_frontmatter "./molecules/quick-links/ql-list-button-outline-center-oneline.md" "Quick Link Button - Outline Center One Line" "36"
add_frontmatter "./molecules/quick-links/ql-list-grid.md" "Quick Link List Grid" "37"

# Process webpart-related
add_frontmatter "./molecules/webpart-related/_webpart-related.md" "Webpart Related Components" "1"
add_frontmatter "./molecules/webpart-related/webpart-title.md" "Webpart Title" "10"

# Process cards elements
add_frontmatter "./molecules/cards-elements/teams-dashboard-card.md" "Teams Dashboard Card" "20"

# Process menus
add_frontmatter "./molecules/menus/breadcrumb.md" "Breadcrumb" "15"

# Process persona
add_frontmatter "./molecules/persona/_persona.md" "Persona Components" "1"
add_frontmatter "./molecules/persona/persona.md" "Persona" "10"
add_frontmatter "./molecules/persona/persona-overflow.md" "Persona Overflow" "11"

# Process atoms
add_frontmatter "./atoms/buttons/button-group.md" "Button Group" "50"
add_frontmatter "./atoms/input/select-grouped.md" "Select Grouped" "60"
add_frontmatter "./atoms/input/input-readonly-showcase.md" "Input Readonly Showcase" "61"

echo "YAML frontmatter addition complete!"
