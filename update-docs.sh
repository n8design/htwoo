#!/bin/bash
echo '################################'
echo PWD
echo '################################'
git branch
echo '################################'
git checkout origin/main -- docs/*
echo '################################'
echo "Hello world"