#!/bin/bash

# Remove Next.js cache
echo "Cleaning .next directory..."
rm -rf .next

# Remove node_modules cache
echo "Cleaning node_modules cache..."
rm -rf node_modules/.cache

# Start development server
echo "Starting development server..."
npx next dev 