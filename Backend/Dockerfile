# Use the official .NET 9 SDK image to build and publish the app
FROM mcr.microsoft.com/dotnet/sdk:9.0 AS build
WORKDIR /src

# Copy the solution and project files first to cache dependencies
COPY ["Backend.sln", "./"]
COPY ["Backend/Backend.csproj", "Backend/"]

# Restore dependencies
RUN dotnet restore "Backend/Backend.csproj"

# Copy the rest of the source code
COPY . .
WORKDIR "/src/Backend"

# Build and publish the application
RUN dotnet build "Backend.csproj" -c Release -o /app/build
RUN dotnet publish "Backend.csproj" -c Release -o /app/publish

# Use the official .NET 9 ASP.NET runtime image to run the app
FROM mcr.microsoft.com/dotnet/aspnet:9.0 AS final
WORKDIR /app

# .NET 8 and 9 use port 8080 by default
EXPOSE 8080

# Copy the published output from the build stage
COPY --from=build /app/publish .

# Start the application
ENTRYPOINT ["dotnet", "Backend.dll"]
