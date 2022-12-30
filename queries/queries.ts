import { Task } from '../types/Task'

export const getGetTasksQuery = () => {
  return `
    SELECT id, text, previous FROM GetSortedTasksList();
  `
}

export const getAddTaskQuery = (text: string) => {
  return `
    INSERT INTO tasks
      (text, previous)
    VALUES
      (
        '${text}',
        (SELECT id FROM GetSortedTasksList() LIMIT 1)
      )
    RETURNING *;
  `
}

export const getUpdateTaskQuery = (id: number, text: string) => {
  return `
    UPDATE tasks
    SET
      text = '${text}'
    WHERE id = ${id}
    RETURNING *;
  `
}

export const getDeleteTaskQuery = (taskId: number) => {
  return `
    BEGIN TRANSACTION;
      UPDATE tasks
      SET
        previous = (SELECT previous FROM GetTaskByTaskId(${taskId}))
      WHERE id = (SELECT id FROM GetTaskByPreviousTaskId(${taskId}));

      DELETE
      FROM tasks
      WHERE id = ${taskId};
    END TRANSACTION;
  `
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getUpdateTasksQuery = (tasksList: any) => {
  const paramsList = tasksList.map((item: Task) => `(${item.id}, '${item.text}', ${item.previous || null})`)

  return `
    UPDATE tasks AS current 
    SET
        text = updated.text,
        previous = updated.previous
    FROM (
      values ${paramsList.toString()}
    )
    AS updated(id, text, previous) 
    WHERE updated.id = current.id;
  `
}
