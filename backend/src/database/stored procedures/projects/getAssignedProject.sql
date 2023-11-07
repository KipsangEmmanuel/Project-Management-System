

CREATE or alter PROCEDURE [dbo].[getAssignedProject]
	@project_id varchar(100)
	
as

set nocount on;

begin
	select *  from AssignedProjects    

    where project_id = @project_id 
    
end;