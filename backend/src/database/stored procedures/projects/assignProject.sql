CREATE or alter PROCEDURE [dbo].[assignProject]
	@project_id varchar(100),
    @user_id varchar(100)
	
as

set nocount on;

begin
	insert into AssignedProjects
    (project_id , user_id )

    VALUES
    (@project_id , @user_id)
    
end;

select * from AssignedProjects