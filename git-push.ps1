param(
    [Parameter(Mandatory=$true)]
    [string]$message
)

# Add all changes
git add .

# Commit with message
git commit -m $message

# Push to remote
git push

Write-Host "✅ Changes committed and pushed successfully!" -ForegroundColor Green 