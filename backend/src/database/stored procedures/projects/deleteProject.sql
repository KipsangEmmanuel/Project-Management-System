CREATE OR ALTER  PROCEDURE [dbo].[deleteProject]
	@project_id varchar(100)
as

set nocount on;

begin
	delete from dbo.projects
	
	WHERE project_id = @project_id;
end;