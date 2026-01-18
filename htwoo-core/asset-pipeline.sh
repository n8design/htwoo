#!/usr/bin/env bash
#
# HTWOO Core - Asset Pipeline (Phase 4)
#
# This script implements an optimized asset pipeline for building the htwoo-core package.
# It includes validation checks, improved performance, and prepares for Nx.js integration.
#

# Set variables
SOURCE_DIR="/Volumes/Code/n8design/projects/htwoo/htwoo-core"
TARGET_DIR="/Volumes/Code/n8design/projects/htwoo/packages/htwoo-core"
TEMP_DIR="$SOURCE_DIR/temp"
LOG_FILE="$SOURCE_DIR/build.log"

# Function to log messages
log() {
  local message="$1"
  local timestamp=$(date +"%Y-%m-%d %H:%M:%S")
  echo "[$timestamp] $message" | tee -a "$LOG_FILE"
}

# Function to check for errors
check_error() {
  local exit_code=$?
  local step="$1"
  if [ $exit_code -ne 0 ]; then
    log "❌ Error in step: $step (exit code: $exit_code)"
    exit $exit_code
  fi
}

# Start the build process
log "🚀 Starting HTWOO Core Asset Pipeline"
log "-------------------------------------"

# Clean log file
> "$LOG_FILE"

# Create temp directory
mkdir -p "$TEMP_DIR"
check_error "Create temp directory"

# Clean target directory
log "🧹 Cleaning target directories..."
rm -rf "$TARGET_DIR/lib" "$TARGET_DIR/dist"
check_error "Clean target directory"

# Build CSS
log "🎨 Building CSS..."
npm run build:css-prod
check_error "Build CSS"

# Optimize CSS with postcss
log "✨ Optimizing CSS..."
npx postcss public/css/htwoo.min.css --use autoprefixer cssnano --no-map -o "$TEMP_DIR/htwoo.min.css"
check_error "Optimize CSS"

# Copy optimized CSS
log "📋 Copying optimized CSS..."
mkdir -p "$TARGET_DIR/dist/css"
cp "$TEMP_DIR/htwoo.min.css" "$TARGET_DIR/dist/css/"
check_error "Copy optimized CSS"

# Copy and optimize SCSS
log "📋 Copying and optimizing SCSS..."
mkdir -p "$TARGET_DIR/lib/sass"
cp -r "$SOURCE_DIR/src/styles/"* "$TARGET_DIR/lib/sass/"
rm -rf "$TARGET_DIR/lib/sass/00-base/fonts"
check_error "Copy and optimize SCSS"

# Copy component files
log "📋 Copying component files..."
mkdir -p "$TARGET_DIR/lib/components"
cp -r "$SOURCE_DIR/src/components/"* "$TARGET_DIR/lib/components/"
check_error "Copy component files"

# Copy JavaScript source
log "📋 Copying JavaScript source..."
mkdir -p "$TARGET_DIR/lib/js"
cp -r "$SOURCE_DIR/src/js/"* "$TARGET_DIR/lib/js/"
check_error "Copy JavaScript source"

# Bundle JavaScript
log "📦 Bundling JavaScript..."
npx rollup -c "$SOURCE_DIR/rollup.config.mjs"
check_error "Bundle JavaScript"

# Generate TypeScript declarations
log "📝 Generating TypeScript declarations..."
bash "$SOURCE_DIR/enhanced-typings.sh"
check_error "Generate TypeScript declarations"

# Copy documentation
log "📚 Copying documentation..."
cp -r "$SOURCE_DIR/LICENSE" "$SOURCE_DIR/README.md" "$TARGET_DIR/"
check_error "Copy documentation"

# Validate package
log "🔍 Validating package integrity..."

# Check if CSS files exist
if [ ! -f "$TARGET_DIR/dist/css/htwoo.min.css" ]; then
  log "❌ Validation failed: Missing CSS files"
  exit 1
fi

# Check if JS bundles exist
if [ ! -f "$TARGET_DIR/dist/js/umd/htwoo.min.js" ] || 
   [ ! -f "$TARGET_DIR/dist/js/cjs/htwoo.min.js" ] || 
   [ ! -f "$TARGET_DIR/dist/js/amd/htwoo.min.js" ]; then
  log "❌ Validation failed: Missing JavaScript bundles"
  exit 1
fi

# Check if TypeScript declarations exist
if [ ! -f "$TARGET_DIR/lib/js/main.d.ts" ]; then
  log "❌ Validation failed: Missing TypeScript declarations"
  exit 1
fi

# Check if no font files exist
if [ -d "$TARGET_DIR/lib/sass/00-base/fonts" ]; then
  log "❌ Validation failed: Font files should not be included"
  exit 1
fi

# Check that all exports in package.json point to valid files
log "🔍 Validating package.json exports..."
node -e "
const pkg = require('$TARGET_DIR/package.json');
const fs = require('fs');
const path = require('path');
let valid = true;

// Helper function to check if a file exists relative to the package root
function checkFile(file) {
  const fullPath = path.join('$TARGET_DIR', file.replace(/^\.\//, ''));
  if (!fs.existsSync(fullPath)) {
    console.error(\`❌ File not found: \${file} (expected at \${fullPath})\`);
    valid = false;
    return false;
  }
  return true;
}

// Check exports paths
if (pkg.exports) {
  Object.entries(pkg.exports).forEach(([key, value]) => {
    if (typeof value === 'string') {
      checkFile(value);
    } else if (typeof value === 'object') {
      Object.values(value).forEach(path => checkFile(path));
    }
  });
}

// Check main, module, types paths
['main', 'module', 'types'].forEach(field => {
  if (pkg[field]) checkFile(pkg[field]);
});

process.exit(valid ? 0 : 1);
"
check_error "Validate package.json exports"

log "✅ Package validation complete"
log "🏁 HTWOO Core Asset Pipeline completed successfully"
