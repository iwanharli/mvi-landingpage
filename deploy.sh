#!/usr/bin/env bash
# Deploy MVI landing page ke server produksi.
#
#   ./deploy.sh
#
# Yang dilakukan di server (217.76.51.113):
#   1. git pull repo di /var/www/_demo-project/demo-mvi
#   2. npm install (kalau package.json berubah) + npm run build
#   3. reload nginx (config vhost tidak disentuh — sudah terpasang)
#
# Prasyarat: perubahan sudah di-push ke GitHub (origin/main). Skrip ini
# men-deploy state repo GitHub, bukan file lokal yang belum ter-commit.
set -euo pipefail

HOST="root@217.76.51.113"
REMOTE_DIR="/var/www/_demo-project/demo-mvi"

if ! command -v ssh >/dev/null 2>&1; then
  echo "ssh tidak ditemukan." >&2
  exit 1
fi

echo "==> Cek perubahan belum ter-push..."
if [ -n "$(git status --porcelain)" ]; then
  echo "    Ada perubahan lokal yang belum di-commit. Lanjutkan? (commit dulu direkomendasikan)"
  read -r -p "    Lanjutkan deploy tanpa commit? [y/N] " ans
  [ "$ans" = "y" ] || [ "$ans" = "Y" ] || { echo "Dibatalkan."; exit 1; }
fi

AHEAD="$(git rev-list --left-right --count origin/main...HEAD 2>/dev/null | awk '{print $2}' || echo 0)"
if [ "${AHEAD:-0}" != "0" ]; then
  echo "    Ada $AHEAD commit lokal yang belum di-push ke origin/main."
  read -r -p "    Push sekarang? [Y/n] " ans
  if [ "$ans" != "n" ] && [ "$ans" != "N" ]; then
    git push origin main
  else
    echo "    Lanjut deploy versi origin/main yang lama (belum termasuk commit lokal barumu)."
  fi
fi

echo "==> Deploy ke $HOST:$REMOTE_DIR"
ssh -o ConnectTimeout=10 "$HOST" bash -s <<'REMOTE'
set -euo pipefail
cd /var/www/_demo-project/demo-mvi

echo "--> git pull"
git fetch origin
git reset --hard origin/main

cd frontend

echo "--> npm install"
npm install --no-audit --no-fund

echo "--> npm run build"
npm run build

echo "--> reload nginx"
nginx -t
systemctl reload nginx

echo "--> selesai, cek cepat:"
curl -s -o /dev/null -w "  / -> %{http_code}\n" -H "Host: mvi-id.com" http://localhost/
curl -sL -o /dev/null -w "  /en -> %{http_code}\n" -H "Host: mvi-id.com" http://localhost/en
REMOTE

echo "==> Deploy selesai. https://mvi-id.com (begitu DNS aktif)"
