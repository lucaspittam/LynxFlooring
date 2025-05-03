#!/bin/bash

# Exit on any error
set -e

echo "Starting middleware fix process..."

# Clean directories
echo "Cleaning .next directory..."
rm -rf .next

echo "Cleaning node_modules cache..."
rm -rf node_modules/.cache

# Make sure package.json is properly set up
echo "Verifying package.json configuration..."
if ! grep -q "\"clean-install\"" package.json; then
  echo "ERROR: Please run this script after updating package.json with the clean-install script."
  exit 1
fi

# Build the project
echo "Building the project..."
npm run build

echo "Middleware fix process completed successfully!"
echo "You can now start the development server with: npm run dev" 