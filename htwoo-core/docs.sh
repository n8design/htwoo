#!/bin/bash

# Simplified nvm loading - try common locations
if [ -s "$HOME/.nvm/nvm.sh" ]; then
  source "$HOME/.nvm/nvm.sh"
elif [ -s "/opt/homebrew/opt/nvm/nvm.sh" ]; then
  source "/opt/homebrew/opt/nvm/nvm.sh"  
elif [ -s "/usr/local/opt/nvm/nvm.sh" ]; then
  source "/usr/local/opt/nvm/nvm.sh"
fi

# Use nvm if available, otherwise proceed with current node
if command -v nvm &> /dev/null; then
  nvm use
fi

# Ensure destination directories exist
mkdir -p ../docs/htwoo-core/plugins
mkdir -p ../docs/htwoo-core/styleguide/images

# Temporarily swap ice config files to use docs configuration
if [ -f "ice.config.js" ]; then
  mv ice.config.js ice.config.dev.js
fi
if [ -f "ice.docs.config.js" ]; then
  mv ice.docs.config.js ice.config.js
fi

# Run the build process - ice:docs will output CSS to docs folder, pl:publish will output Pattern Lab to docs folder
npx run-s ice:docs pl:publish

# Restore original ice config files
if [ -f "ice.config.js" ]; then
  mv ice.config.js ice.docs.config.js
fi
if [ -f "ice.config.dev.js" ]; then
  mv ice.config.dev.js ice.config.js
fi

# Copy additional files that aren't handled by the build process
cp -r ./src/plugins/* ../docs/htwoo-core/plugins/ 2>/dev/null || echo "No plugins to copy"
cp -r ./src/styleguide/images/* ../docs/htwoo-core/styleguide/images/ 2>/dev/null || echo "No styleguide images to copy"

# Generate sitemap in the docs folder (only if patterns directory exists)
if [ -d "../docs/htwoo-core/patterns" ]; then
  node helpers/tools/sitemap.js
else
  echo "Warning: patterns directory not found, skipping sitemap generation"
fi

echo "Documentation build complete! Pattern Lab has been deployed to ../docs/htwoo-core/"