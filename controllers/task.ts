/* eslint-disable @typescript-eslint/no-explicit-any */
import db = require('../config/database')
import {
  getGetTasksQuery,
  getAddTaskQuery,
  getUpdateTaskQuery,
  getUpdateTasksQuery,
  getDeleteTaskQuery,
} from '../queries/queries'

export const getTasks = async (req: any, res: any) => {
  try {
    const response = await db.query(getGetTasksQuery(), null)
    res.status(200).send(response.rows)
  } catch (err) {
    console.log(err)
    res.status(400).send(err)
  }
}

export const addTask = async (req: any, res: any) => {
  try {
    const { text } = req.body

    const { rows } = await db.query(getAddTaskQuery(text), null)
    res.status(200).send(rows[0])
  } catch (err) {
    res.status(400).send(err)
  }
}

export const updateTask = async (req: any, res: any) => {
  try {
    const { text, id } = req.body

    const { rows } = await db.query(getUpdateTaskQuery(id, text), null)
    res.status(200).send(rows[0])
  } catch (err) {
    res.status(400).send(err)
  }
}

export const deleteTask = async (req: any, res: any) => {
  try {
    const { id } = req.body

    await db.query(getDeleteTaskQuery(id), null)
    res.status(200).send()
  } catch (err) {
    res.status(400).send(err)
  }
}

export const updateTasks = async (req: any, res: any) => {
  try {
    const { list } = req.body

    await db.query(getUpdateTasksQuery(list), null)
    res.status(200).send({})
  } catch (err) {
    console.log(err)

    res.status(400).send(err)
  }
}
