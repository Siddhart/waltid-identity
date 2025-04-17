#!/bin/bash

echo "🚀 Starting deployment..."

cd /root/waltid/prod

# Pull latest changes
git pull origin main

# Restart docker-compose (adjust if using a different dir or file)
cd /root/waltid/prod/docker-compose
docker compose down
docker compose up -d

echo "✅ Deployment complete."
#test