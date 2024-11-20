#!/bin/bash

# Get a list of all tags in chronological order
tags=$(git tag -l 'htwoo-core-v*' | sort)

# Loop over all tags and generate changelog between consecutive tags
previous_tag=""
for tag in $tags; do
    if [ -n "$previous_tag" ]; then
        echo "Generating changelog between $previous_tag and $tag"

        # Generate the changelog between the current tag and the previous one
        npx conventional-changelog -n ./.versionrc.json -i CHANGELOG.md -s -r 0 --tag-prefix 'htwoo-core-v' -p conventionalcommits --from "$previous_tag" --to "$tag"
    fi
    previous_tag=$tag
done

echo "Changelog updated for all tags."