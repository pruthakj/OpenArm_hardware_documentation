#!/bin/bash

# OpenArm Hardware Documentation Deployment Script
# This script builds and deploys the documentation to GitHub Pages

echo "🚀 Starting deployment process..."

# Check if we're in the right directory
if [ ! -f "docusaurus.config.js" ]; then
    echo "❌ Error: docusaurus.config.js not found. Please run this script from the project root."
    exit 1
fi

# Install dependencies if node_modules doesn't exist
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install
fi

# Build the site
echo "🔨 Building the site..."
npm run build

if [ $? -ne 0 ]; then
    echo "❌ Build failed. Please check for errors."
    exit 1
fi

echo "✅ Build completed successfully!"

# Deploy to GitHub Pages
echo "🌐 Deploying to GitHub Pages..."

# Check if SSH is available
if ssh -o ConnectTimeout=5 -o BatchMode=yes git@github.com 2>&1 | grep -q "successfully authenticated"; then
    echo "🔑 Using SSH for deployment..."
    USE_SSH=true npm run deploy
else
    echo "🔑 Using HTTPS for deployment..."
    echo "Please enter your GitHub username:"
    read GIT_USER
    GIT_USER=$GIT_USER npm run deploy
fi

if [ $? -eq 0 ]; then
    echo "✅ Deployment completed successfully!"
    echo "🌍 Your site should be available at: https://your-username.github.io/OpenArm_hardware_documentation/"
    echo "📝 Don't forget to:"
    echo "   1. Update docusaurus.config.js with your actual GitHub username"
    echo "   2. Enable GitHub Pages in your repository settings"
    echo "   3. Set the source to the gh-pages branch"
else
    echo "❌ Deployment failed. Please check the error messages above."
    exit 1
fi 