#!/bin/bash

echo "🚀 Starting deployment..."

cd /root/waltid-identity

# Pull latest changes
git pull origin main

# Restart docker-compose (adjust if using a different dir or file)
cd /root/waltid-identity/docker-compose
docker compose down
docker compose up -d --build

echo "✅ Deployment complete."
