#!/bin/bash

# Parse git log for commit hashes and version changes
git log --pretty=format:'%H' -p package.json | awk '
/^[[:xdigit:]]{40}$/ { 
    commit = $0 # A line with a 40-character hash
}
/^[+-].*"version"/ { 
    if (commit) { 
        split($0, arr, "\"") 
        version = arr[4]
        if (version != "") {
            print commit, version
            commit = "" # Avoid duplicate matches
        }
    }
}'