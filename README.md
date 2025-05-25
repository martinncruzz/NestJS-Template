# 🏗️ NestJS Template

A modern NestJS template with essential configurations and best practices built-in.

## ✨ Features

- TypeScript Configuration - Complete TypeScript setup with strict rules and path aliases for clean imports (@config, @modules, @database)
- Environment Validation - Automatic validation of environment variables using Zod schemas with type safety and error handling
- Global Validation - Automatic request validation and transformation using class-validator with whitelist protection
- Exception Handling - Global exception filter that provides detailed error logging and structured responses
- Code Quality - Pre-configured ESLint and Prettier with TypeScript-aware rules for consistent code style
- Database Ready - Docker Compose configuration with PostgreSQL and MongoDB containers ready to use

## 📋 Prerequisites

- Node.js 22.x
- PNPM package manager
- NestJS CLI
- Docker Desktop

## 🚀 Getting Started

> [!IMPORTANT]
> Create a `.env` file from the `.env.template` and configure your environment variables before starting the application.

Clone the repository:

```bash
git clone https://github.com/martinncruzz/NestJS-Template.git
cd NestJS-Template
```

Install dependencies:

```bash
pnpm install
```

Start the development server:

```bash
pnpm start:dev
```

## 🗄️ Start Databases

> [!NOTE]
> PostgreSQL and MongoDB containers are included for quick development setup.

Start the databases when you need them:

```bash
docker compose up -d
```
