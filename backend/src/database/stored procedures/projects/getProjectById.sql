CREATE or alter PROCEDURE [dbo].[getProjectById]
	@project_id VARCHAR(100)
as

set nocount on;

begin
	select *  from projects  
	
    where project_id = @project_id
   
end;