# a-todo-list-backend

A RESTful Node.js/TypeScript backend API for managing todo tasks with PostgreSQL database integration. Features CRUD operations for tasks with linked list structure support.

## Tech stack

- Typescript
- Node
- Express
- pg
- Prettier, ESLint, and Husky

## Getting Started

### Prerequisites

Before running the development server, you need to set up the connection to your Postgresql DB.

**Set Environment Variables**

Create a `.env` file in the root directory and add:

```
DATABASE_URL=your_db_url_here
PORT=your_db_port_here
```

### Development Server

Next step is to install dependencies and run the development server:
```bash
To run the application locally:

1. Install dependencies: `npm install`
2. Prepare Husky hooks: `npm run husky-prepare`
3. Start the development server: `npm start`
```

