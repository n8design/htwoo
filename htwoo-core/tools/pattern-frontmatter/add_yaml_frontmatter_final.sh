#!/bin/bash

# Final script to add YAML frontmatter to remaining files

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

# Process organism accordion
add_frontmatter "./organism/accordion/accordion-group.md" "Accordion Group" "10"

# Process organism cards
add_frontmatter "./organism/cards/_cards.md" "Card Components" "1"
add_frontmatter "./organism/cards/document-card.md" "Document Card" "10"
add_frontmatter "./organism/cards/teams-splash-card.md" "Teams Splash Card" "11"
add_frontmatter "./organism/cards/document-card-html.md" "Document Card HTML" "12"
add_frontmatter "./organism/cards/document-card-shimmer.md" "Document Card Shimmer" "13"
add_frontmatter "./organism/cards/document-card-click.md" "Document Card Click" "14"

# Process organism dialogs
add_frontmatter "./organism/dialogs/_dialogs.md" "Dialog Components" "1"
add_frontmatter "./organism/dialogs/msgbars.md" "Message Bars" "10"
add_frontmatter "./organism/dialogs/generic-dialog.md" "Generic Dialog" "11"
add_frontmatter "./organism/dialogs/legacy/_legacy.md" "Legacy Dialog Components" "90"

# Process organism facepiles
add_frontmatter "./organism/facepiles/_facepiles.md" "Facepile Components" "1"
add_frontmatter "./organism/facepiles/facepile.md" "Facepile" "10"
add_frontmatter "./organism/facepiles/facepile~32.md" "Facepile 32px" "11"
add_frontmatter "./organism/facepiles/facepile~40.md" "Facepile 40px" "12"
add_frontmatter "./organism/facepiles/facepile~48.md" "Facepile 48px" "13"
add_frontmatter "./organism/facepiles/facepile~64.md" "Facepile 64px" "14"

# Process templates
add_frontmatter "./templates/teams/_teams-dashboard.md" "Teams Dashboard Templates" "1"
add_frontmatter "./templates/teams/teams-dashboard.md" "Teams Dashboard Template" "10"
add_frontmatter "./templates/teams/teams-splash-screen.md" "Teams Splash Screen Template" "11"
add_frontmatter "./templates/teams/teams-splash-screen-multi.md" "Teams Splash Screen Multi Template" "12"

# Process pages
add_frontmatter "./pages/teams/teams-dashboard.md" "Teams Dashboard Page" "10"
add_frontmatter "./pages/teams/teams-splash-screen.md" "Teams Splash Screen Page" "11"
add_frontmatter "./pages/teams/teams-splash-screen-multi.md" "Teams Splash Screen Multi Page" "12"

echo "Final YAML frontmatter addition complete!"
