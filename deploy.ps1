# Build the project
Write-Host "Building project..." -ForegroundColor Yellow
npm run build

# Deploy to GitHub Pages
Write-Host "Deploying to GitHub Pages..." -ForegroundColor Yellow
npm run deploy

# Push changes to main branch
Write-Host "Pushing changes to main branch..." -ForegroundColor Yellow
git add .
git commit -m "Deploy to GitHub Pages"
git push

Write-Host "✅ Deployment complete!" -ForegroundColor Green
Write-Host "Your site should be available at: https://antonmarshall.github.io/luebeck-tischler-handwerk/" -ForegroundColor Cyan 