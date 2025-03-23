#!/bin/bash

# Stop any running processes
echo "Stopping any running processes..."
pkill -f next || true

# Clean cache and build files
echo "Cleaning cache and build files..."
rm -rf .next
rm -rf node_modules/.cache

# Fix path aliases in jsconfig.json
echo "Ensuring path aliases are correct..."
cat > jsconfig.json << 'EOF'
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"],
      "@app/*": ["./src/app/*"],
      "@components/*": ["./src/app/_components/*"],
      "@common/*": ["./src/app/_common/*"],
      "@styles/*": ["./src/app/_styles/*"],
      "@appComponents/*": ["./src/app/_components/*"],
      "@layouts/*": ["./src/app/_layouts/*"],
      "@lib/*": ["./src/app/_lib/*"],
      "@data/*": ["./src/app/_data/*"],
      "@sections/*": ["./src/app/_components/sections/*"],
      "@sliders/*": ["./src/app/_components/sliders/*"]
    }
  }
}
EOF

# Start development server
echo "Starting development server..."
npm run dev 