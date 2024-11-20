#!/bin/bash

# Check if dry-run mode is enabled
DRY_RUN=false
if [ "$1" == "--dry-run" ]; then
    DRY_RUN=true
fi

# Read versions and commit hashes from the file
while read -r commit version; do
    if [ "$DRY_RUN" = true ]; then
        # Simulate tagging
        echo "[Dry Run] Would tag $commit with version htwoo-core-v$version"
    else
        # Create the tag
        git tag -a "htwoo-core-v$version" "$commit" -m "Retroactive tag for version $version"
        echo "Tagged $commit with version $version"
    fi
done < versions.txt

if [ "$DRY_RUN" = false ]; then
    # Push tags only if not a dry run
    # git push --tags
else
    echo "[Dry Run] No tags were created or pushed."
fi