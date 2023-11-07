CREATE OR ALTER PROCEDURE [dbo].[getUserByEmail]
	@email	varchar(250)
as

set nocount on;

begin
	select	u.[_id],
			u.email,
			u.username,
			u.isAdmin,
			u.password
	from	[users] u where email = @email and isDeleted = 0;
end;

exec getUserByEmail