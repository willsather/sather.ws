#!/usr/bin/env bash

set -e

# Minimal dotfiles installer
# Usage: curl -fsSL https://sather.ws/dot/install.sh | bash

DOTFILES_DIR="$HOME/.dotfiles"
DOTFILES_REPO="https://github.com/willsather/.dotfiles.git"

# Check if dotfiles already exist
if [[ -d "$DOTFILES_DIR" ]]; then
    echo "❌ Dotfiles already exist at $DOTFILES_DIR"
    echo "Remove the directory first if you want to reinstall"
    exit 1
fi

# Check macOS
if [[ "$OSTYPE" != "darwin"* ]]; then
    echo "❌ This script is for macOS only"
    exit 1
fi

# Check git
if ! command -v git &> /dev/null; then
    echo "❌ Git not found. Install Xcode Command Line Tools first:"
    echo "xcode-select --install"
    exit 1
fi

# Clone and run
echo "🚀 Cloning dotfiles..."
git clone "$DOTFILES_REPO" "$DOTFILES_DIR"

echo "🔧 Running dotfiles setup..."
cd "$DOTFILES_DIR"
chmod +x dot
./dot

echo "✅ Done! Restart your terminal."
