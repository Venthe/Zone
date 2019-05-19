# Remove output directory
Remove-Item -path .\Output `
-ErrorAction Ignore `
-recurse

# Re-create output directory
New-Item -ItemType directory `
-Path.\Output

# Build for Windows x64
dotnet build --verbosity=normal `
--configuration=Release `
--output=.\Output `
--runtime=win-x64 `
.\Engine.Core.CLI\Engine.Core.CLI.csproj
