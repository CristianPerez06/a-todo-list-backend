import * as express from 'express'

import taskController = require('../controllers/task')

const taskRoutes = express.Router()

taskRoutes.get('/getTasks', taskController.getTasks)
taskRoutes.post('/addTask', taskController.addTask)
taskRoutes.put('/updateTask', taskController.updateTask)
taskRoutes.delete('/deleteTask', taskController.deleteTask)
taskRoutes.put('/updateTasks', taskController.updateTasks)

export default taskRoutes
