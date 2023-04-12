#!/bin/bash
echo "----------------------"
mkdir .tmp .tmp/components .tmp/sass .tmp/output

echo "Copy files"
cp -r ./lib/components/* .tmp/components
cp -r ./lib/sass/* .tmp/sass
echo "Change PWD"
cd .tmp/components/ && for file in _*.scss; do
    mv -- "$file" "${file:1}"
done
PWD
for file in *.scss; do
    echo "$file"
    newFile="${file%.*}.css"
    sass $file ../output/$newFile
    echo "-------"
done

