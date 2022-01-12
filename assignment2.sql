---Table 1:-
create table student(s_id int primary key, 
                      s_name varchar(20));

insert into student values(1, 'Jack');
insert into student values(2, 'Rithvik');
insert into student values(3, 'Jaspreet');
insert into student values(4, 'Praveen');
insert into student values(5, 'Bisa');
insert into student values(6, 'Suraj');

---Table 2:-
create table marks(school_id int primary key, s_id int, 
                       score int, status varchar(20));

insert into marks values(1004, 1, 23, 'fail');
insert into marks values(1008, 6, 95, 'pass');
insert into marks values(1012, 2, 97, 'pass');
insert into marks values(1016, 7, 67, 'pass'); 
insert into marks values(1020, 3, 100, 'pass');
insert into marks values(1025, 8, 73, 'pass');
insert into marks values(1030, 4, 88, 'pass');
insert into marks values(1035, 9,  13, 'fail');
insert into marks values(1040, 5,  16, 'fail');
insert into marks values(1050, 10, 53, 'pass');

---Table 3:-
create table details(address_city varchar(20), email_ID varchar(20), 
                      school_id int, accomplishments varchar(50));

insert into details values('Banglore',  'jsingh@geeks.com', 
                                1020, 'ACM ICPC selected');
insert into details values('Hyderabad', 'praveen@geeks.com', 
                                1030, 'Geek of the month');
insert into details values('Delhi',     'rithvik@geeks.com', 
                                    1012, 'IOI finalist');
insert into details values('Chennai',   'om@geeks.com', 
                                 1111, 'Geek of the year');
insert into details values('Banglore', ' suraj@geeks.com',
                                 1008, 'IMO finalist');
insert into details values('Mumbai',    'sasukeh@geeks.com',
                                  2211, 'Made a robot');
insert into details values('Ahmedabad', 'itachi@geeks.com',
                               1172, 'Code Jam finalist');
insert into details values('Jaipur',    'kumar@geeks.com',
                                   1972, 'KVPY finalist');

---Queries:-

select * from student;

select * from marks;

select * from details;

---Inner join on marks and details with students but with listed attributes
select a.s_id,a.s_name,b.school_id,b.score,c.address_city,c.email_ID from student a 
INNER JOIN marks b on a.s_id = b.s_id 
INNER JOIN details c on b.school_id = c.school_id;

---Inner join on marks and details with students but with all attributes
select * from student a 
INNER JOIN marks b on a.s_id = b.s_id 
INNER JOIN details c on b.school_id = c.school_id;

--- by comparing s_id,school_id from student,marks and details with all atributes
select * from student s, 
marks m, details d where s.s_id = m.s_id and 
m.school_id = d.school_id;

---left join on student with listed attributes
select a.s_id,a.s_name,b.school_id,b.score,c.address_city,c.email_ID from student a 
LEFT JOIN marks b on a.s_id = b.s_id 
LEFT JOIN details c on b.school_id = c.school_id;

---right join on student with listed attributes
select a.s_id,a.s_name,b.school_id,b.score,c.address_city,c.email_ID from student a 
RIGHT JOIN marks b on a.s_id = b.s_id 
RIGHT JOIN details c on b.school_id = c.school_id;

---left join on marks and right join on details with student with All attributes
select * from student a 
left JOIN marks b on a.s_id = b.s_id 
right JOIN details c on b.school_id = c.school_id;

---right join on marks and left join on details with student with All attributes
select * from student a 
RIGHT JOIN marks b on a.s_id = b.s_id 
LEFT JOIN details c on b.school_id = c.school_id;

---outer join with All attributes
select * from marks a
left join student b on a.s_id = b.s_id
union
select * from marks a
right join student b on a.s_id = b.s_id 
order by a.s_id;

select * from marks a
left join details b on a.school_id = b.school_id
union
select * from marks a
right join details b on a.school_id = b.school_id;

-----------------------------------PROCEDURE-----------------------------------------
---Shows all records of student table with PROCEDURE
CREATE PROCEDURE showalluser
AS
BEGIN
select * from student
END;
EXEC showalluser;

---Shows records of student table with one parameter 
CREATE PROCEDURE showname(@S_name AS nvarchar(50))
AS
BEGIN
select * from student where s_name=@S_name
END;
exec showname @s_name='Jack';

---Shows records of student table with multiple parameter 
CREATE PROCEDURE showuserby(
    @S_id AS int
    ,@S_name AS nvarchar(50)
)
AS
BEGIN
    SELECT
        *
    FROM 
        student
    WHERE
        s_id = @S_id AND
        s_name = @S_name
    ORDER BY
        s_id;
END;
exec showalluser ---for all user for checking purpose
exec showuserby @S_id=1, @S_name='jack' --- here we are giving input
exec showuserby @S_id=2, @S_name='Rithvik'

---for change of procdure
ALTER PROCEDURE showuserby(
    @S_id AS int
    ,@S_name AS nvarchar(20) ---here we changing only size of @S_name
)
AS
BEGIN
    SELECT
        *
    FROM 
        student
    WHERE
        s_id = @S_id AND
        s_name = @S_name
    ORDER BY
        s_id;
END;

---for drop procdure
DROP PROCEDURE showuserby

---View of details table
CREATE VIEW Viewdetails AS
SELECT school_id,email_ID,address_city
FROM details
WHERE school_id>=1800;

select * from Viewdetails;


-----------------------Using exception with try catch block -------------------
CREATE PROCEDURE school_id ---here we have procedure name school_id but with NO PERAMETERS
AS
BEGIN
select * from details
END;
EXEC school_id;

BEGIN TRY
---but we are trying to get result of procedure name school_id with PERAMETERS

declare @count int;
exec school_id @id = 1020, @count= @count output
select @count AS 'School id of Students';

END TRY
BEGIN CATCH
print 'error message: ';
print ERROR_MESSAGE();
END CATCH

---so it will handled by catch block
--output will be
--error message: 
--Procedure school_id has no parameters and arguments were supplied.
