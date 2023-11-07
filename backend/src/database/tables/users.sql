CREATE  TABLE users (
	_id varchar(100) NOT NULL PRIMARY KEY,
	username varchar(100) NOT NULL,
	
	email varchar(250) NOT NULL,
	
	isDeleted BIT ,
	isAdmin Bit not null,
	password varchar(250) NOT NULL,
)

DROP TABLE users


select * from users where isAdmin = 1

update users set isAdmin = 1 where email = 'caleb.kellah@thejitu.com'

create database PMS