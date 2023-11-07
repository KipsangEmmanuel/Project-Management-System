CREATE PROCEDURE [dbo].[updateProject]
	@project_id varchar(100),
	@project_name varchar(100),
	@duedate date,
	@project_description varchar(500)
as

set nocount on;

begin
	UPDATE dbo.projects
	SET 
	project_name=@project_name,
	project_description=@project_description,
	duedate=@duedate
	
	WHERE project_id = @project_id ;
end;