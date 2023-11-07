CREATE or alter PROCEDURE [dbo].[getUnassignedUser]
	
as
BEGIN
    SELECT u.username,
    u._id
    FROM users u
    WHERE NOT EXISTS (
        SELECT 1
        FROM AssignedProjects ap
        WHERE ap.user_id = u._id 
        
    ) and u.isAdmin = 0;
END

