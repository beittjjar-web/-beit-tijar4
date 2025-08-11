# 1. إعداد المتغيرات
$repoUrl = "https://github.com/beittjjar-web/-beit-tijar4.git"
$branchName = "main"

# 2. حذف أي remote قديم وإضافة الجديد
Write-Host "إزالة الـ remote القديم..."
git remote remove origin 2>$null

Write-Host "إضافة المستودع الجديد..."
git remote add origin $repoUrl

# 3. التأكد من وجود git init إذا لم يكن مهيأ
if (-not (Test-Path ".git")) {
    Write-Host "تهيئة Git للمشروع..."
    git init
}

# 4. إضافة جميع الملفات
Write-Host "إضافة جميع الملفات..."
git add .

# 5. إنشاء commit
Write-Host "إنشاء commit..."
git commit -m "Initial project upload" 2>$null

# 6. رفع الملفات
Write-Host "رفع المشروع إلى GitHub..."
git push -u origin $branchName

Write-Host "تم رفع المشروع بنجاح إلى: $repoUrl"
