export const GET_TASKS = `
  SELECT *
  FROM tasks
  ORDER BY position DESC
`

export const ADD_TASK = `
  INSERT INTO tasks (text, position) VALUES ($1, $2) RETURNING *
`

export const UPDATE_TASK = `
  UPDATE tasks
  SET
    text = ($1)
  WHERE id = ($2)
  RETURNING *
`

export const DELETE_TASK = `
  DELETE FROM tasks WHERE id = ($1) RETURNING *;
`

export const UPDATE_TASKS = `
  UPDATE tasks AS current 
  SET
      text = updated.text,
      position = updated.position
  FROM (values
      ($1)
  )
  AS updated(id, text, position) 
  WHERE updated.id = current.id
`
