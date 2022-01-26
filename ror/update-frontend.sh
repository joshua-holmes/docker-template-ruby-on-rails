#!/bin/bash
set -e

# Sets DIRECTORY variable to current directory of this file
DIRECTORY=$(dirname "${BASH_SOURCE[0]}")

npm run build --prefix $DIRECTORY/client
echo "---------------------------------------------------------------"
echo "Built React app, creating static frontend files"
echo "---------------------------------------------------------------"

rm -fr $DIRECTORY/public/*
echo "---------------------------------------------------------------"
echo "Removed existing static frontend files from ./public/"
echo "---------------------------------------------------------------"

mv $DIRECTORY/client/build/* $DIRECTORY/public/
echo "---------------------------------------------------------------"
echo "Moved static files from React app into ./public/"
echo "---------------------------------------------------------------"

echo "---------------------------------------------------------------"
echo "Update successful"