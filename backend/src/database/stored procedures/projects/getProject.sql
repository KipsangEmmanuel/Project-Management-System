CREATE OR ALTER PROCEDURE [dbo].[getSingleProject]
	@project_id varchar(100)
as

set nocount on;

begin
	select	p._id,
			p.name,
			p.dueDate,
			p.description
	from	[projects] p where _id = @project_id and isDeleted = 0;
	
end;