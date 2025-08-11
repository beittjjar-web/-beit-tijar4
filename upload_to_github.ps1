# التأكد من وجود git
if (-not (Get-Command git -ErrorAction SilentlyContinue)) {
    Write-Host "❌ git غير مثبت. يرجى تثبيته أولاً." -ForegroundColor Red
    exit
}

# إعدادات المستودع
$repoUrl = "git@github.com:beittjjar-web/-beit-tijar4.git"
$branch = "main"

# تهيئة المستودع وضبط الريموت
git init
git remote remove origin 2>$null
git remote add origin $repoUrl

# إضافة جميع الملفات وعمل commit برسالة ثابتة
git add -A
git commit -m "رفع سريع للمشروع" 2>$null

# رفع التغييرات
git push -u origin $branch -f

Write-Host "✅ تم رفع المشروع بنجاح!" -ForegroundColor Green
