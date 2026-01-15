#!/bin/bash

FILE="public/css/00-base/colors/TeamsTheme.css"

echo "Monitoring $FILE"
echo "Initial state:"
ls -la $FILE 2>/dev/null || echo "File does not exist"

echo ""
echo "Running ice-build..."
npx ice-build build > /dev/null 2>&1

echo "After ice-build:"
ls -la $FILE 2>/dev/null || echo "File does not exist"

echo ""
echo "Waiting 1 second..."
sleep 1

echo "After 1 second:"
ls -la $FILE 2>/dev/null || echo "File does not exist"

echo ""
echo "Running PatternLab build..."
npm run pl:build > /dev/null 2>&1 &
PL_PID=$!

# Monitor file every 0.5 seconds while PatternLab runs
for i in {1..10}; do
    echo "After ${i}*0.5 seconds during PatternLab:"
    ls -la $FILE 2>/dev/null || echo "File does not exist"
    sleep 0.5
done

# Wait for PatternLab to finish
wait $PL_PID

echo ""
echo "After PatternLab finished:"
ls -la $FILE 2>/dev/null || echo "File does not exist"
