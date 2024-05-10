#!/usr/bin/env bash

find ../packages/htwoo-core/lib/ -name *.d.ts -exec rm {} \;
find ../packages/htwoo-core/lib/ -name *.d.ts -exec rm {} \;
pwd ../packages/htwoo-core/lib/
# npx -p typescript -c tsc
npx -p typescript tsc src/**/*.js --declaration --allowJs --emitDeclarationOnly --outDir ../packages/htwoo-core/lib/js/