-- Database: todos-db
-- DROP DATABASE IF EXISTS "todos-db";

CREATE DATABASE "todos-db"
    WITH
    OWNER = postgres
    ENCODING = 'UTF8'
    LC_COLLATE = 'English_United States.1252'
    LC_CTYPE = 'English_United States.1252'
    TABLESPACE = pg_default
    CONNECTION LIMIT = -1
    IS_TEMPLATE = False;


-- CREATE Table: tasks
CREATE TABLE tasks (
    id SERIAL PRIMARY KEY,
    text VARCHAR(255) NOT NULL,
    previous INTEGER
);


-- CREATE Function: GetSortedTasksList 
CREATE OR REPLACE FUNCTION GetSortedTasksList ()  
	RETURNS TABLE(id INTEGER, text VARCHAR(255), previous INTEGER, rec_depth INTEGER)

AS  $BODY$ 

BEGIN
	RETURN QUERY
	(
		WITH RECURSIVE tsk(id) AS
		(
			SELECT
				tasks.id,
				tasks.text,
				tasks.previous,
				1 AS rec_depth
			FROM tasks
			WHERE tasks.previous IS null
			UNION
				SELECT
					e.id,
					e.text,
					e.previous,
					tsk.rec_depth + 1
				FROM tasks e
				JOIN tsk ON (e.previous = tsk.id)
		)
		SELECT * FROM tsk ORDER BY rec_depth DESC
	);
END

$BODY$

LANGUAGE plpgsql;


-- CREATE Function: GetTaskByTaskId
CREATE OR REPLACE FUNCTION GetTaskByTaskId (taskId INTEGER)  
	RETURNS TABLE(id INTEGER, text VARCHAR(255), previous INTEGER)

AS  $BODY$ 

BEGIN
	RETURN QUERY
	(
		SELECT tasks.id, tasks.text, tasks.previous FROM tasks WHERE tasks.id = taskId
	);
END

$BODY$

LANGUAGE plpgsql;


-- CREATE Function: GetTaskByPreviousTaskId
CREATE OR REPLACE FUNCTION GetTaskByPreviousTaskId (previousTaskId INTEGER)  
	RETURNS TABLE(id INTEGER, text VARCHAR(255), previous INTEGER)

AS  $BODY$ 

BEGIN
	RETURN QUERY
	(
		SELECT tasks.id, tasks.text, tasks.previous FROM tasks WHERE tasks.previous = previousTaskId
	);
END

$BODY$

LANGUAGE plpgsql;

