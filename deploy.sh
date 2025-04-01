#!/bin/bash

echo "🚀 Starting deployment..."

cd /root/waltid-identity

# Pull latest changes
git pull origin main

# Restart docker-compose (adjust if using a different dir or file)
cd /root/waltid-identity/docker-compose
docker compose down
docker compose up -d --build

# Build and run the Next.js app
cd /root/waltid-identity/waltid-applications/organisatie-wallet
npm install
npm run build

# Use pm2 to keep it running (install if not already)
pm2 restart organisatie-wallet || pm2 start npm --name "organisatie-wallet" -- start

echo "✅ Deployment complete."
