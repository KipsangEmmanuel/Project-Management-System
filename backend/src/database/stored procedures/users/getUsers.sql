CREATE OR ALTER  PROCEDURE [dbo].[getUsers]
as

set nocount on;

begin
	select	u.[_id],
			u.username,
			u.email,
			u.isAdmin
	from	[users] u where isDeleted = 0 and u.isAdmin = 0
end;