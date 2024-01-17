# Define paths
$strapiTypesPath = "..\strapi-backend\types\generated\contentTypes.d.ts"
$angularTypesPath = ".\src\app\types\generated"  # Adjust as needed

# Copy types using robocopy in PowerShell
robocopy $strapiTypesPath $angularTypesPath /E /XD node_modules

Write-Host "Types copied successfully!"
