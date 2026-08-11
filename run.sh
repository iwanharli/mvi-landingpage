#!/usr/bin/env bash
# MVI Landing Page — runner
#
#   ./run.sh          jalankan dev server (hot reload)
#   ./run.sh dev      sama dengan di atas
#   ./run.sh build    build produksi ke frontend/dist
#   ./run.sh preview  build lalu serve hasil build
#
set -euo pipefail

cd "$(dirname "$0")/frontend"

if ! command -v npm >/dev/null 2>&1; then
  echo "npm tidak ditemukan. Install Node.js terlebih dahulu: https://nodejs.org" >&2
  exit 1
fi

if [ ! -d node_modules ]; then
  echo "==> Memasang dependensi..."
  npm install
fi

case "${1:-dev}" in
  dev)
    echo "==> Dev server: http://localhost:5173"
    exec npm run dev
    ;;
  build)
    echo "==> Build produksi..."
    exec npm run build
    ;;
  preview)
    echo "==> Build produksi..."
    npm run build
    echo "==> Preview: http://localhost:4173"
    exec npm run preview
    ;;
  *)
    echo "Perintah tidak dikenal: $1" >&2
    echo "Gunakan: ./run.sh [dev|build|preview]" >&2
    exit 1
    ;;
esac
