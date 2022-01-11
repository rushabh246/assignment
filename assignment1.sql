create table students(id int PRIMARY KEY, sname varchar(20), age int, email varchar(50));

alter table students
add phnum int;

insert into students values(1 ,'Rushabh',22,'rushabh.mehta@aimdek.com',1234567890);
insert into students values(2 ,'Ajit',20,'ajit,chauha@aimdek.com',1234698570),(3 ,'Shreyansh',22,'shreyansh.prajapati@aimdek.com',1234687590);

select * from students;

select phnum from students;

select distinct age from students;

select * from students where sname LIKE 'R%';

update students set age=23 where id=1;

delete from students where id=3;

truncate table students;

drop table students;

select age from students group by age;