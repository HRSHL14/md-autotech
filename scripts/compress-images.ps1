<#
.SYNOPSIS
    MD AutoTech - Image Compression & Vertical Orientation Utility
.DESCRIPTION
    Processes raw product images, rotates them to vertical orientation,
    resamples using high-quality bicubic interpolation (934x1400),
    compresses them into web-optimized PNGs, and deploys them to public directories.
#>

Add-Type -AssemblyName System.Drawing

$projectRoot = Split-Path -Parent $PSScriptRoot
$srcDir = Join-Path $projectRoot "public\images-vertical"
$targetDirs = @(
    (Join-Path $projectRoot "public\md-auto-images"),
    (Join-Path $projectRoot "public\images\products")
)

# Ensure output directories exist
foreach ($td in $targetDirs) {
    if (!(Test-Path $td)) {
        New-Item -ItemType Directory -Path $td -Force | Out-Null
    }
}

$tempDir = Join-Path $env:TEMP "md_autotech_compressed"
if (!(Test-Path $tempDir)) {
    New-Item -ItemType Directory -Path $tempDir -Force | Out-Null
}

$files = Get-ChildItem $srcDir -Filter *.png
$targetW = 934
$targetH = 1400

Write-Host "=== MD AutoTech Image Optimization Pipeline ===" -ForegroundColor Cyan
Write-Host "Source Directory: $srcDir"
Write-Host "Target Dimensions: ${targetW}x${targetH} (Aspect ~934:1400)"

foreach ($f in $files) {
    Write-Host "Processing $($f.Name)..." -NoNewline
    $src = [System.Drawing.Image]::FromFile($f.FullName)
    
    # Check if rotation is needed (if width > height, rotate 90 counter-clockwise + mirror horizontally)
    $rot = [System.Drawing.Bitmap]::new($src)
    if ($src.Width -gt $src.Height) {
        $rot.RotateFlip([System.Drawing.RotateFlipType]::Rotate270FlipX)
    } else {
        $rot.RotateFlip([System.Drawing.RotateFlipType]::RotateNoneFlipNone)
    }
    $src.Dispose()
    
    # Create target high-quality bitmap canvas
    $dst = New-Object System.Drawing.Bitmap($targetW, $targetH, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
    $g = [System.Drawing.Graphics]::FromImage($dst)
    $g.CompositingQuality = [System.Drawing.Drawing2D.CompositingQuality]::HighQuality
    $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
    $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
    $g.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
    
    $g.Clear([System.Drawing.Color]::Transparent)
    $g.DrawImage($rot, 0, 0, $targetW, $targetH)
    
    $g.Dispose()
    $rot.Dispose()
    
    $tempOut = Join-Path $tempDir $f.Name
    $dst.Save($tempOut, [System.Drawing.Imaging.ImageFormat]::Png)
    $dst.Dispose()
    
    $sz = (Get-Item $tempOut).Length
    Write-Host " Done ($([Math]::Round($sz / 1024, 1)) KB)" -ForegroundColor Green
}

# Deploy optimized images to target directories
foreach ($f in $files) {
    $tempOut = Join-Path $tempDir $f.Name
    foreach ($td in $targetDirs) {
        Copy-Item $tempOut (Join-Path $td $f.Name) -Force
    }
    # Also overwrite in public/images vertical
    Copy-Item $tempOut (Join-Path $srcDir $f.Name) -Force
}

Write-Host "`nAll images processed, compressed, and deployed successfully!" -ForegroundColor Green
