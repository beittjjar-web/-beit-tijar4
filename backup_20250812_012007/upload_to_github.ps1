# 1. Check if git is installed
if (-not (Get-Command git -ErrorAction SilentlyContinue)) {
    Write-Host "❌ git is not installed. Please install it first." -ForegroundColor Red
    exit
}

# 2. Repo settings
$repoUrl = "git@github.com:beittjjar-web/-beit-tijar4.git"  # GitHub repo SSH URL
$branch = "main"

# 3. Create backup before any changes
$backupFolder = "$PSScriptRoot\backup_$(Get-Date -Format 'yyyyMMdd_HHmmss')"
Write-Host "`n📦 Creating backup at: $backupFolder" -ForegroundColor Cyan
Copy-Item -Path "$PSScriptRoot\*" -Destination $backupFolder -Recurse -Force
Write-Host "✅ Backup created." -ForegroundColor Green

# 4. Show changes summary
Write-Host "`n📋 Git Status:" -ForegroundColor Cyan
git status

# 5. Show details of changes
Write-Host "`n📝 Git Diff:" -ForegroundColor Magenta
git diff

# 6. Commit message
$commitMessage = Read-Host "💬 Enter commit message (leave empty for default)"
if ([string]::IsNullOrWhiteSpace($commitMessage)) {
    $commitMessage = "Update project"
}

# 7. Push to GitHub
Write-Host "`n🚀 Uploading project to GitHub..." -ForegroundColor Yellow
git init
git remote remove origin 2>$null
git remote add origin $repoUrl
git add -A
git commit -m "$commitMessage"
git branch -M $branch
git push -u origin $branch -f

Write-Host "`n✅ Upload completed successfully!" -ForegroundColor Green
Write-Host "💾 Backup saved in: $backupFolder" -ForegroundColor Cyan
