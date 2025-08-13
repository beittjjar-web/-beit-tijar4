# upload_in_parts.ps1

param (
    [string]$repoUrl = "https://github.com/beittjjar-web/-beit-tijar4.git",
    [string]$branch = "main"
)

# 1. تأكد من أن Git مثبت
if (-not (Get-Command git -ErrorAction SilentlyContinue)) {
    Write-Host "❌ Git غير مثبت. الرجاء تثبيته أولاً." -ForegroundColor Red
    exit
}

# 2. انتقل إلى مجلد السكربت (المشروع)
Set-Location -Path $PSScriptRoot

# 3. تهيئة Git إذا ما كان مهيأ
if (-not (Test-Path ".git")) {
    git init
    Write-Host "✅ تم تهيئة Git"
}

# 4. ربط الريموت (إزالته إذا كان موجود) ثم إضافته من جديد
git remote remove origin -ErrorAction SilentlyContinue
git remote add origin $repoUrl
Write-Host "✅ رُبط الريبو بـ: $repoUrl"

# 5. رفع ملفات التكوين أولاً
$parts = @(
    @("package.json", "README.md"),
    @("src/pages"), # يمكنك تعديل هذه المجموعات حسب ترتيبك
    @("src/components"),
    @("src/firebase"),
    @("src/pages"),
    @("src/styles", "src/tests", "src/util")
)

foreach ($part in $parts) {
    Write-Host "Uploading part: $($part -join ', ')"
    foreach ($item in $part) {
        if (Test-Path $item) {
            git add $item
        }
    }
    git commit -m "Upload: $($part -join ', ')"
    try {
        git push origin $branch
        Write-Host "✅ Uploaded successfully: $($part -join ', ')"
    } catch {
        Write-Host "⚠ Upload failed for: $($part -join ', '), retrying…"
        git config http.postBuffer 524288000
        git push origin $branch
    }
}

Write-Host "🎉 All parts uploaded successfully!"
