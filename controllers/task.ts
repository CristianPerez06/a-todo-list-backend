/* eslint-disable @typescript-eslint/no-explicit-any */
import db = require('../config/database')
import { GET_TASKS, ADD_TASK, UPDATE_TASK, DELETE_TASK, UPDATE_TASKS } from '../queries/queries'

export const getTasks = async (req: any, res: any) => {
  try {
    const response = await db.query(GET_TASKS, null)
    res.status(200).send(response.rows)
  } catch (err) {
    res.status(400).send(err)
  }
}

export const addTask = async (req: any, res: any) => {
  try {
    const { text, position } = req.body
    const { rows } = await db.query(ADD_TASK, [text, position])
    res.status(200).send(rows[0])
  } catch (err) {
    res.status(400).send(err)
  }
}

export const updateTask = async (req: any, res: any) => {
  try {
    const { text, id } = req.body

    const { rows } = await db.query(UPDATE_TASK, [text, id])
    res.status(200).send(rows[0])
  } catch (err) {
    res.status(400).send(err)
  }
}

export const deleteTask = async (req: any, res: any) => {
  try {
    const { id } = req.body

    const { rows } = await db.query(DELETE_TASK, [id])
    res.status(200).send(rows[0])
  } catch (err) {
    res.status(400).send(err)
  }
}

export const updateTasks = async (req: any, res: any) => {
  try {
    const { list } = req.body
    const paramsList = list.map((item: any) => `(${item.id}, '${item.text}', ${item.position})`)
    const bulkUpdatequery = UPDATE_TASKS.replace('($1)', paramsList.toString())

    await db.query(bulkUpdatequery, [])
    res.status(200).send({})
  } catch (err) {
    res.status(400).send(err)
  }
}
