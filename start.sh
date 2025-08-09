#!/bin/bash

echo "Building shared project in watch mode..."
cd shared && npm run build -- --watch &
SHARED_PID=$!

echo "Waiting for shared build to complete..."
sleep 5

echo "Starting shared preview server..."
cd shared && npm run preview &
PREVIEW_PID=$!

echo "Waiting for preview server to start..."
sleep 3

echo "Starting app project in dev mode..."
cd app && npm run dev &
APP_PID=$!

echo ""
echo "========================================"
echo "Module Federation Development Setup:"
echo "- Shared (Remote): http://localhost:4173 (preview mode)"
echo "- App (Host): http://localhost:3000 (dev mode)"
echo ""
echo "Note: Shared is built in watch mode and served via preview"
echo "========================================"
echo ""
echo "Press Ctrl+C to stop all servers"

trap "kill $SHARED_PID $PREVIEW_PID $APP_PID 2>/dev/null; exit" INT
wait $SHARED_PID $PREVIEW_PID $APP_PID