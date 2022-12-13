import { Pool } from 'pg'
import dotenv from 'dotenv'

dotenv.config()

const dbUrl = process.env.DATABASE_URL

if (!dbUrl) {
  throw new Error('DATABASE_URL env variable must have a value.')
}

// DB Connection:
const pool = new Pool({
  connectionString: dbUrl,
})

pool.on('connect', () => {
  console.log('Connected to DB!')
})

export = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  query: (text: any, params: any) => pool.query(text, params),
}
