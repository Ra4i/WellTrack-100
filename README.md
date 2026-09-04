# WellTrack 100

WellTrack 100 is a personal wellness and habit-tracking web application. It is
designed to help users record journal entries, follow their progress, connect
with friends, and communicate through messages.

> **Project status:** This is my first software project, and it is still being
> built. I am currently studying Computer Science in school, so this project is
> also a way for me to practise software development, learn from mistakes, and
> improve over time.

## Features

- User registration and login
- Personal dashboard
- Journal entries
- Progress tracking
- Friends and friend requests
- Private messaging
- Levels and wellness progression
- ASP.NET Core MVC pages and API controllers
- Entity Framework Core database migrations
- Swagger/OpenAPI documentation during development

## Technology stack

- **Backend:** C# and ASP.NET Core
- **Framework:** .NET 10
- **Database:** SQLite
- **ORM:** Entity Framework Core
- **Authentication:** JWT Bearer authentication and BCrypt password hashing
- **API documentation:** Swagger/OpenAPI
- **Frontend:** Razor views, HTML, CSS, and JavaScript

## Project structure

```text
Controllers/    MVC and API controllers
DTOs/           Data transfer objects used by the API
Data/           Entity Framework Core database context
Migrations/     Database migration files
Models/         Application data models
Views/          Razor pages
wwwroot/        CSS and JavaScript assets
Program.cs      Application startup and service configuration
```

## Getting started

### Prerequisites

- [.NET 10 SDK](https://dotnet.microsoft.com/download/dotnet/10.0)
- Git

### Clone the repository

```bash
git clone https://github.com/Ra4i/WellTrack-100.git
cd WellTrack-100
```

### Configure the application

The project uses SQLite by default, so no separate database server is required.
To use environment variables, copy `.env.example` to `.env` and update the
values for your local machine:

```bash
cp .env.example .env
```

On Windows PowerShell, use:

```powershell
Copy-Item .env.example .env
```

Do not commit `.env` or any file containing real secrets. The committed
`.env.example` file is only a template.

### Apply database migrations

```bash
dotnet ef database update
```

If the Entity Framework command is not available, install the tool once:

```bash
dotnet tool install --global dotnet-ef
```

### Run the application

```bash
dotnet restore
dotnet run
```

When running in the Development environment, Swagger is available at:

```text
https://localhost:<port>/swagger
```

The exact port is printed in the terminal when the application starts.

## Development notes

- The default local database is `welltrack.db`.
- Database files and build output are excluded from Git.
- Swagger is enabled only in the Development environment.
- This project is actively changing, so features and setup instructions may
  change as development continues.

## Roadmap

Planned improvements include:

- Refining the user experience and responsive design
- Adding more wellness and progress features
- Improving validation, error handling, and security
- Adding automated tests
- Preparing the application for production deployment

## Contributing

This is primarily a learning project, but suggestions and constructive
feedback are welcome. If you find a bug or have an idea, please open an issue
with enough detail to reproduce or explain it.

## License

No license has been selected yet. Until a license is added, all rights are
reserved by the author.
