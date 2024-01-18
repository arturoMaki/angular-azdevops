# Define paths
$strapiTypesPath = ".\strapi-backend\types\generated\contentTypes.d.ts"
$angularTypesPath = ".\frontend\src\app\types\generated"  # Adjust as needed

# Copy the file using copy-item in PowerShell
Copy-Item -Path $strapiTypesPath -Destination $angularTypesPath -Force

Write-Host "Types copied successfully!"

# Specify the old and new lines
$oldLine = "import type { Schema, Attribute } from '@strapi/strapi';"
$newLine = "import type { Schema, Attribute } from '@strapi/types';"

# Read the content of the file
$content = Get-Content -Path $strapiTypesPath

# Replace the old line with the new line
$content = $content -replace [regex]::Escape($oldLine), $newLine

# Write the modified content back to the file
Set-Content -Path $strapiTypesPath -Value $content -Force

Write-Host "Line replaced successfully!"
