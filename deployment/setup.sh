#!/bin/bash
set -e

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$SCRIPT_DIR"

echo "=== SAGTA Lizmap Deployment Setup ==="

# Check if .env exists
if [ ! -f .env ]; then
    echo "Creating .env from env.example..."
    cp env.example .env
    echo "Please edit .env to adjust paths and settings for your deployment."
fi

# Source the .env file
source .env

# Create lizmap directory structure
echo "Creating directory structure..."
mkdir -p "$LIZMAP_DIR/etc/lizmapconfig.d"
mkdir -p "$LIZMAP_DIR/etc/localconfig.d"
mkdir -p "$LIZMAP_DIR/etc/profiles.d"
mkdir -p "$LIZMAP_DIR/etc/qgis"
mkdir -p "$LIZMAP_DIR/plugins"
mkdir -p "$LIZMAP_DIR/wps-data"
mkdir -p "$LIZMAP_DIR/www"
mkdir -p "$LIZMAP_DIR/var/log/nginx"
mkdir -p "$LIZMAP_DIR/var/nginx-cache"
mkdir -p "$LIZMAP_DIR/var/lizmap-theme-config"
mkdir -p "$LIZMAP_DIR/var/lizmap-db"
mkdir -p "$LIZMAP_DIR/var/lizmap-config"
mkdir -p "$LIZMAP_DIR/var/lizmap-log"
mkdir -p "$LIZMAP_DIR/var/lizmap-modules"
mkdir -p "$LIZMAP_DIR/var/lizmap-my-packages"
mkdir -p "$LIZMAP_DIR/mapproxy"

# Create projects directory (symlink to SAGTA projects if in same repo)
if [ ! -d "$LIZMAP_PROJECTS" ]; then
    mkdir -p "$LIZMAP_PROJECTS"
    echo "Created projects directory at $LIZMAP_PROJECTS"
    echo "Copy your QGIS projects here or update LIZMAP_PROJECTS in .env"
fi

# Copy nginx config if not exists
if [ ! -f "$LIZMAP_DIR/etc/nginx.conf" ]; then
    echo "Copying nginx.conf..."
    cp config/nginx.conf "$LIZMAP_DIR/etc/nginx.conf"
fi

# Copy pg_service.conf if not exists
if [ ! -f "$LIZMAP_DIR/etc/pg_service.conf" ]; then
    echo "Copying pg_service.conf..."
    cp config/pg_service.conf.example "$LIZMAP_DIR/etc/pg_service.conf"
    chmod 600 "$LIZMAP_DIR/etc/pg_service.conf"
fi

# Copy QGIS config if exists
if [ -d "config/qgis" ]; then
    echo "Copying QGIS configuration..."
    cp -r config/qgis/* "$LIZMAP_DIR/etc/qgis/" 2>/dev/null || true
fi

# Copy Lizmap config if exists
if [ -d "config/lizmapconfig.d" ]; then
    echo "Copying Lizmap configuration..."
    cp -r config/lizmapconfig.d/* "$LIZMAP_DIR/etc/lizmapconfig.d/" 2>/dev/null || true
fi

# Set correct permissions
echo "Setting permissions..."
chown -R "$LIZMAP_UID:$LIZMAP_GID" "$LIZMAP_DIR" 2>/dev/null || true

echo ""
echo "=== Setup Complete ==="
echo ""
echo "Next steps:"
echo "1. Edit .env if you haven't already"
echo "2. Copy your QGIS projects to: $LIZMAP_PROJECTS"
echo "3. Pull and start the services:"
echo "   docker compose pull"
echo "   docker compose up -d"
echo ""
echo "4. Install Lizmap server plugin:"
echo "   docker compose exec map qgis-plugin-manager init"
echo "   docker compose exec map qgis-plugin-manager update"
echo "   docker compose exec map qgis-plugin-manager install 'Lizmap server'"
echo "   docker compose restart map"
echo ""
echo "5. Access Lizmap at: http://localhost:${LIZMAP_PORT}"
echo "   Default credentials: admin / admin"
