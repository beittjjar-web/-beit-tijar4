$repoUrl = "https://github.com/beittjjar-web/-beit-tijar4.git"
$branchName = "main"

Write-Host "Removing old remote..."
git remote remove origin 2>$null

Write-Host "Adding new remote..."
git remote add origin $repoUrl

if (-not (Test-Path ".git")) {
    Write-Host "Initializing Git repository..."
    git init
}

Write-Host "Adding all files..."
git add .

Write-Host "Creating commit..."
git commit -m "Initial project upload" 2>$null

Write-Host "Pushing to GitHub..."
git push -u origin $branchName

Write-Host "Project successfully pushed to: $repoUrl"
