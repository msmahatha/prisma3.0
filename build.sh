#!/bin/bash

# Clean up vendor directory before Vercel caching to save space
echo "Cleaning vendor directory..."

# Delete unnecessary documentation, text files, and markdown files
find vendor -type f \( -name '*.md' -o -name '*.txt' -o -name 'CHANGELOG*' -o -name 'LICENSE*' -o -name '*.dist' -o -name '*.yml' -o -name '*.yaml' -o -name '*.xml' \) -delete

# Delete test and document directories
find vendor -type d \( -name 'tests' -o -name 'test' -o -name 'docs' -o -name 'doc' \) -exec rm -rf {} + 2>/dev/null

echo "Vendor cleanup complete!"
exit 0
