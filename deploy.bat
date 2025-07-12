@echo off
REM OpenArm Hardware Documentation Deployment Script for Windows
REM This script builds and deploys the documentation to GitHub Pages

echo 🚀 Starting deployment process...

REM Check if we're in the right directory
if not exist "docusaurus.config.js" (
    echo ❌ Error: docusaurus.config.js not found. Please run this script from the project root.
    pause
    exit /b 1
)

REM Install dependencies if node_modules doesn't exist
if not exist "node_modules" (
    echo 📦 Installing dependencies...
    npm install
)

REM Build the site
echo 🔨 Building the site...
npm run build

if %errorlevel% neq 0 (
    echo ❌ Build failed. Please check for errors.
    pause
    exit /b 1
)

echo ✅ Build completed successfully!

REM Deploy to GitHub Pages
echo 🌐 Deploying to GitHub Pages...

REM Check if SSH is available (simplified check for Windows)
echo 🔑 Using HTTPS for deployment...
set /p GIT_USER="Please enter your GitHub username: "
set GIT_USER=%GIT_USER% && npm run deploy

if %errorlevel% equ 0 (
    echo ✅ Deployment completed successfully!
    echo 🌍 Your site should be available at: https://%GIT_USER%.github.io/OpenArm_hardware_documentation/
    echo 📝 Don't forget to:
    echo    1. Update docusaurus.config.js with your actual GitHub username
    echo    2. Enable GitHub Pages in your repository settings
    echo    3. Set the source to the gh-pages branch
) else (
    echo ❌ Deployment failed. Please check the error messages above.
    pause
    exit /b 1
)

pause 