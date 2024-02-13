# Define paths
$strapiTypesPath = ".\strapi-backend\types\generated\contentTypes.d.ts"
$strapiComponentsTypesPath = ".\strapi-backend\types\generated\components.d.ts"
$angularTypesPath = ".\frontend-ssr\src\strapi-types\"
$angularComponentsTypesPath = ".\frontend-ssr\src\strapi-types\"

# Copy the file using copy-item in PowerShell
Copy-Item -Path $strapiTypesPath -Destination $angularTypesPath -Force
Copy-Item -Path $strapiComponentsTypesPath -Destination $angularComponentsTypesPath -Force


Write-Host "Types copied successfully!"

# TODO: check if still neccesary
# # Specify the old and new lines
# $oldLine = "import type { Schema, Attribute } from '@strapi/strapi';"
# $newLine = "import type { Schema, Attribute } from '@strapi/types';"

# # Read the content of the file
# $content = Get-Content -Path $strapiTypesPath

# # Replace the old line with the new line
# $content = $content -replace [regex]::Escape($oldLine), $newLine

# # Write the modified content back to the file
# Set-Content -Path $strapiTypesPath -Value $content -Force

# Write-Host "Line replaced successfully!"
