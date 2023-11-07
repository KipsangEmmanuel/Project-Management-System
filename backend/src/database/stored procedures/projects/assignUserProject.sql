CREATE OR ALTER  PROCEDURE [dbo].[assignUser]
    @user_id varchar(100),
    @project_id varchar(100),
    @status VARCHAR(20)

as

set nocount on;

begin
	UPDATE dbo.AssignedProjects SET user_id = @user_id, status = @status , project_id = @project_id 
    
end;
GO