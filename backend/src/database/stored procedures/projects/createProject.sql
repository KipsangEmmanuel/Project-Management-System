

CREATE OR ALTER PROCEDURE [dbo].[createProject]
	@project_id varchar(100),
	@project_name varchar(100),
	@dueDate date,
	@project_description varchar(250)
AS

BEGIN
    set nocount on;

    INSERT INTO dbo.projects
    (project_id, project_name, dueDate, project_description)
    VALUES
    (@project_id,@project_name, @dueDate, @project_description)
END