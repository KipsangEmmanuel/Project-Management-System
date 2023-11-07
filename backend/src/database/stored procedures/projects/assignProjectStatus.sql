CREATE PROCEDURE [dbo].[assignProjectStatus]
	@project_status varchar(100),
	@project_id varchar(250)
	
as

set nocount on;

begin
	UPDATE dbo.projects
	SET 
	project_status = @project_status
    	
	WHERE project_id = @project_id ;
end;