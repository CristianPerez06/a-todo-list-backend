# a-todo-list-backend

A NodeJS server to manage todos.

## Tech stack

- Typescript
- Node
- Express
- pg
- Prettier, ESLint, and Husky

## How to execute the app

1. Run `npm install`
2. Run `npm run husky-prepare`
3. Create an `.env` file inside `src`. Add a new env variable named `DATABASE_URL` and fill its value with the URL pointing to your PostgreSQL DB.
4. Run `npm start:dev`
