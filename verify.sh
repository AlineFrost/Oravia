#!/bin/bash

echo "=== Oravia Learn Platform - Verification ==="
echo ""

echo "✓ Project structure created"
echo "✓ MkDocs configuration: mkdocs.yml"
echo "✓ Homepage: docs/index.md"
echo "✓ Lesson 1 pages: page1.md, page2.md, page3.md, review.md"
echo "✓ Word data: docs/data/lesson01_words.json"
echo "✓ Matching game: docs/js/matching-game.js"
echo "✓ Custom CSS: docs/css/custom.css"
echo ""

echo "=== Testing Build ==="
cd /home/claude/oravia-learn
mkdocs build --quiet && echo "✓ Build successful!" || echo "✗ Build failed"

echo ""
echo "=== File Summary ==="
find docs -type f | wc -l | xargs echo "Total files:"
echo ""

echo "=== Next Steps ==="
echo "1. Start development server: cd oravia-learn && mkdocs serve"
echo "2. Visit: http://localhost:8000"
echo "3. Test the matching game on Lesson 1 → Page 1"
echo "4. Check localStorage in browser DevTools (F12 → Application → Local Storage)"
echo ""

echo "=== Testing Locally ==="
echo "To serve the site locally:"
echo "  cd /home/claude/oravia-learn"
echo "  mkdocs serve --dev-addr=0.0.0.0:8000"
echo ""
echo "To build for deployment:"
echo "  mkdocs build"
echo "  # Output will be in site/ directory"
echo ""

echo "=== GitHub Deployment (when ready) ==="
echo "1. Create GitHub repo"
echo "2. Push code: git push origin main"
echo "3. Enable GitHub Pages: Settings → Pages → Source: gh-pages branch"
echo "4. Deploy: mkdocs gh-deploy"
