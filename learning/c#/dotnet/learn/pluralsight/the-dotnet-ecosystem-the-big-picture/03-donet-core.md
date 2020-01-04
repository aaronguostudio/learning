# The .NET Core

## Consist by
- ASP.net
  - Console Applications
  - MVC
  - API 
- UWP
- .NET Core Class Library
- Common Language Runtime (CLR)
  - CoreCLR
- App Host

## App types
- Cross Platform
- I can create a Framework dependent appication (Framework pre-installed)
- or Self-contained application

## Where installed
- C:\Program Files\dotnet\shared\Microsoft.NETCore.App

## Publish a Framework dependent app
- publish -> dotnet filename.dll  // will run if dotnet core is installed

## Publish a self-contained app
- edit projectname.csproj
- Add
```xml
  <RuntimeIdentifiers>win10-x64;osx10.12-x64</RuntimeIdentifiers>
```
- Build and publish
- If pushlish a new one, delete the profile in the publish section
- When multiple runtime, can select the target runtime in the publish dropdown
