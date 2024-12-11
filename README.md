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
3. Create an `.env` file inside the `src` directory. Add a new environment variable named `DATABASE_URL` and set its value to the URL of your PostgreSQL database. Additionally, add a `PORT` variable and assign it the appropriate value.
4. Run `npm start`
