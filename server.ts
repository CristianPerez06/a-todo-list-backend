import express from 'express'
import taskRoutes from './routes/task'
import dotenv from 'dotenv'
import cors from 'cors'
import ErrorHandler from './middlewares/errorHandler'

dotenv.config()

const app = express()

app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// routes
app.use('/api/', taskRoutes)

// error handler
app.use(ErrorHandler)

const port = process.env.PORT

if (!port) {
  throw new Error('PORT env variable must have a value.')
}

const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`)
})
server.on('error', console.error)
