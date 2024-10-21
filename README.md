# Next.js Boilerplate

This project is a boilerplate setup for a Next.js application with Tailwind CSS, ShadcnUI, Drizzle ORM, and Turso SQLite database integration. It provides a starting point for quickly building scalable and modern web applications.

## Table of Contents

- [Features](#features)
- [Requirements](#requirements)
- [Getting Started](#getting-started)
- [Installation](#installation)
- [Usage](#usage)
- [Folder Structure](#folder-structure)
- [Scripts](#scripts)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Next.js 14.2.13**: Latest stable version of Next.js with App Router.
- **Tailwind CSS**: A utility-first CSS framework for styling.
- **ShadcnUI**: A custom UI library built on top of Tailwind CSS components.
- **Drizzle ORM**: A simple TypeScript ORM for SQLite.
- **Turso SQLite**: A distributed, serverless SQLite database for fast querying.

## Requirements

Make sure you have the following installed on your machine:

- Node.js (v18+)
- npm or pnpm
- Turso CLI (for managing the SQLite database)

## Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/nextjs-boilerplate.git
   cd nextjs-boilerplate
   ```

2. Install dependencies:

   Using npm:

   ```bash
   npm install
   ```

   Or using pnpm:

   ```bash
   pnpm install
   ```

3. Setup Turso database:

   - Install the Turso CLI if you haven't already:

     ```bash
     curl -sSf https://get.tur.so/install.sh | bash
     ```

   - Login to your Turso account:

     ```bash
     turso auth login
     ```

   - Create a new SQLite database:

     ```bash
     turso db create your-database-name
     ```

   - Get the database URL:

     ```bash
     turso db show your-database-name
     ```

   - Add your database URL to `.env.local`:

     ```
     TURSO_DATABASE_URL=<your-turso-database-url>
     ```

4. Run the development server:

   ```bash
   npm run dev
   ```

   The app should be running at `http://localhost:3000`.

## Usage

You can start building your app by adding components, pages, and services.

### ShadcnUI

ShadcnUI is integrated with Tailwind CSS to make styling UI components easier. You can add components from ShadcnUI like this:

```jsx
import { Button } from "@/component/ui";

function MyComponent() {
  return <Button>Click me</Button>;
}
```

### Drizzle ORM with Turso SQLite

Drizzle ORM is used for managing database interactions with the Turso SQLite database.

Example of querying the database:

```ts
import { drizzle } from "drizzle-orm/turso-sqlite";
import { sql } from "drizzle-orm";

const db = drizzle(DATABASE_URL);

async function getUsers() {
  const users = await db.select().from("users").execute();
  return users;
}
```

## Folder Structure

```bash
.
├── public              # Public static assets
├── src                 # Source code of the application
│   ├── components      # Reusable UI components
│   ├── app             # Next.js pages
│   ├── lib             # Utility functions and helpers
│   ├── features        # All component or utils group by feature
│   └── db              # Database schema and migrations
├── .env.local          # Environment variables
├── drizzle.config.ts   # Drizzle ORM configuration
└── README.md           # Project documentation
```

## Scripts

- `npm run dev`: Start the development server.
- `npm run build`: Create a production build.
- `npm run start`: Start the production server.
- `npm run lint`: Run ESLint for code quality checks.

## Contributing

Contributions are welcome! Please fork this repository and submit a pull request if you would like to contribute to this project.

## License

This project is licensed under the MIT License.
