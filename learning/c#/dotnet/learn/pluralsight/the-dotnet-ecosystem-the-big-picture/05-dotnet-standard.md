# Dotnet Standard
- Sharing code between runtimes: .Net Framework, .Net Core and Xamarin

# Portable Class Libraries(PCL)
- share code between applications

# Create a .NET standard project
- Create a porject: .NET Standard
- For sharing with other projects
  - Dependencies > add reference
  - check SharedClassLibrary
  - Call it from the new project
- If I print out the location: System.Reflection.Assembly.GetEntryAssembly().Location I can see it's a dll file (I think in Neuron, we are using dll from .Net project instead of .NET Standard)


# .NET Portablility Analyer

Analise where platforms that the app can run