#!/bin/bash
echo "=== Checking for duplicate nested directories ==="
echo ""

if [ -d "test-result/htwoo-core/_data/_data" ]; then
    echo "❌ ERROR: test-result/htwoo-core/_data/_data exists!"
else
    echo "✅ GOOD: No _data/_data"
fi

if [ -d "test-result/htwoo-core/_data/images" ]; then
    echo "❌ ERROR: test-result/htwoo-core/_data/images exists!"
else
    echo "✅ GOOD: No _data/images"
fi

if [ -d "test-result/htwoo-core/_patterns/_data" ]; then
    echo "❌ ERROR: test-result/htwoo-core/_patterns/_data exists!"
else
    echo "✅ GOOD: No _patterns/_data"
fi

if [ -d "test-result/htwoo-core/_patterns/_patterns" ]; then
    echo "❌ ERROR: test-result/htwoo-core/_patterns/_patterns exists!"
else
    echo "✅ GOOD: No _patterns/_patterns"
fi

if [ -d "test-result/htwoo-core/_patterns/images" ]; then
    echo "❌ ERROR: test-result/htwoo-core/_patterns/images exists!"
else
    echo "✅ GOOD: No _patterns/images"
fi

if [ -d "test-result/htwoo-core/images/_data" ]; then
    echo "❌ ERROR: test-result/htwoo-core/images/_data exists!"
else
    echo "✅ GOOD: No images/_data"
fi

if [ -d "test-result/htwoo-core/images/_patterns" ]; then
    echo "❌ ERROR: test-result/htwoo-core/images/_patterns exists!"
else
    echo "✅ GOOD: No images/_patterns"
fi

if [ -d "test-result/htwoo-core/images/images" ]; then
    echo "❌ ERROR: test-result/htwoo-core/images/images exists!"
else
    echo "✅ GOOD: No images/images"
fi

echo ""
echo "=== Expected structure: ==="
echo "test-result/htwoo-core/_data/ (20 JSON files)"
echo "test-result/htwoo-core/_patterns/ (620 pattern files)"  
echo "test-result/htwoo-core/images/ (39 image files with subdirs)"
