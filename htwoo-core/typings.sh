#!/usr/bin/env bash

find ../packages/htwoo-core/lib/ -name *.d.ts -exec rm {} \;
find ../packages/htwoo-core/lib/ -name *.d.ts -exec rm {} \;
pwd ../packages/htwoo-core/lib/
npx -p typescript -c tsc