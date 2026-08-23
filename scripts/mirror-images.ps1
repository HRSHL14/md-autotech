<#
.SYNOPSIS
    MD AutoTech - Horizontal Image Mirror Utility
.DESCRIPTION
    Flips all product images horizontally (X-axis) across all public product image directories.
#>

Add-Type -AssemblyName System.Drawing

$projectRoot = Split-Path -Parent $PSScriptRoot
$targetDirs = @(
    (Join-Path $projectRoot "public\images-vertical"),
    (Join-Path $projectRoot "public\md-auto-images"),
    (Join-Path $projectRoot "public\images\products")
)

$primaryDir = Join-Path $projectRoot "public\images-vertical"
$files = Get-ChildItem $primaryDir -Filter *.png

$tempDir = Join-Path $env:TEMP "md_autotech_mirrored"
if (!(Test-Path $tempDir)) {
    New-Item -ItemType Directory -Path $tempDir -Force | Out-Null
}

Write-Host "=== MD AutoTech Horizontal Mirror Pipeline ===" -ForegroundColor Cyan

foreach ($f in $files) {
    Write-Host "Mirroring horizontally: $($f.Name)..." -NoNewline
    $bmp = [System.Drawing.Bitmap]::FromFile($f.FullName)
    
    # Flip horizontally (X-axis)
    $bmp.RotateFlip([System.Drawing.RotateFlipType]::RotateNoneFlipX)
    
    $tempOut = Join-Path $tempDir $f.Name
    $bmp.Save($tempOut, [System.Drawing.Imaging.ImageFormat]::Png)
    $bmp.Dispose()
    
    foreach ($td in $targetDirs) {
        if (Test-Path $td) {
            Copy-Item $tempOut (Join-Path $td $f.Name) -Force
        }
    }
    Write-Host " Done" -ForegroundColor Green
}

Write-Host "`nAll images mirrored horizontally successfully!" -ForegroundColor Green
