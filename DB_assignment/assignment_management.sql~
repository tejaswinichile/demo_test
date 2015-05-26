/*create database*/

create database assignment_management;

/*create tables*/

connect assignment_management;

create table role (id int NOT NULL AUTO_INCREMENT , role_name varchar(20) ,PRIMARY KEY (id));

create table users (id int NOT NULL AUTO_INCREMENT , user_name varchar(20) , role_id int,PRIMARY KEY (id), FOREIGN KEY(role_id) REFERENCES role(id));

create table questions (id int NOT NULL AUTO_INCREMENT , question varchar(20) ,marks int,PRIMARY KEY (id)  );

create table options (id int NOT NULL AUTO_INCREMENT ,opt_a varchar(20),opt_b varchar(20),opt_c varchar(20) ,opt_d varchar(20) is_visual varchar(50) ,PRIMARY KEY (id) );

create table questions_options (id int NOT NULL AUTO_INCREMENT , questions_id int ,options_id int,PRIMARY KEY (id), FOREIGN KEY(questions_id) REFERENCES questions(id),FOREIGN KEY(options_id) REFERENCES options(id));

create table assessments(id int NOT NULL AUTO_INCREMENT , name varchar(20) ,PRIMARY KEY (id));

create table assessments_questions(id int NOT NULL AUTO_INCREMENT , questions_id int , assessments_id int PRIMARY KEY (id) , FOREIGN KEY(questions_id) REFERENCES questions(id),FOREIGN KEY(assessments_id) REFERENCES assessmnets(id));


create table results(id int NOT NULL AUTO_INCREMENT , user_id int ,is_correct int , assessments_questions_id int , user_answer varchar(20) , PRIMARY KEY (id) , FOREIGN KEY(assessments_questions_id) REFERENCES assessments_questions(id),FOREIGN KEY(user_id) REFERENCES users(id));

/*insertion in role table*/

insert into role (id,role_name) values(1,'admin');

insert into role (id,role_name) values(2,'candidate');

/*insertion into users*/

insert into users (id,user_name,role_id) values(1,'tejaswini chile',2);

insert into users (id,user_name,role_id) values(2,'jinal thakkar',2);

insert into users (id,user_name,role_id) values(3,'bhagyesh dudhediya',2);

insert into users (id,user_name,role_id) values(4,'kasim sharif',2);

insert into users (id,user_name,role_id) values(5,'abhay nikam',2);

/*insertion into questions*/

insert into questions(id,questions,marks)values(1,'who is PM of india?',5);

insert into questions(id,questions,marks)values(2,'who is CM of MH?',5);

insert into questions(id,questions,marks)values(3,'what is capital of india?',5);

insert into questions(id,questions,marks)values(4,'4*14=?',5);

insert into questions(id,questions,marks)values(5,'25+5=?',5);

/*insertion into options*/

insert into options(id,opt_a,opt_b,opt_c,opt_d,is_visual)values(1,'mr.narendra modi','mr.m.singh','mr.a.b.vajpeyi','mrs.indira gandhi','');

insert into options(id,opt_a,opt_b,opt_c,opt_d,is_visual)values(2, ' mr.v.deshmukh '   ,'mr.P.chavan','mr.D.fadanvis','mr.A.CHAVAN','');

insert into options(id,opt_a,opt_b,opt_c,opt_d,is_visual)values(3,'pune','ahmadabad','mumbai','delhi','');

insert into options(id,opt_a,opt_b,opt_c,opt_d,is_visual)values(4,'56','86','76','66','');

insert into options(id,opt_a,opt_b,opt_c,opt_d,is_visual)values(5,'30','120','125','20','');

/*insertion into questions_options*/

insert into options(id,questios_id,options_id)values(1,1,1);

insert into options(id,questios_id,options_id)values(2,2,2);

insert into options(id,questios_id,options_id)values(3,3,3);

insert into options(id,questios_id,options_id)values(4,4,4);

insert into options(id,questios_id,options_id)values(5,5,5);

/*insertion into assessment*/

insert into options(id,name)values(1,'math');

insert into options(id,name)values(2,'GK');

/*insertion into assessment_questions*/

insert into options(id,questios_id,assessments_id)values(1,1,2);

insert into options(id,questios_id,assessments_id)values(2,2,2);

insert into options(id,questios_id,assessments_id)values(3,3,2);

insert into options(id,questios_id,assessments_id)values(4,4,1);

insert into options(id,questios_id,assessments_id)values(5,5,1);

/*insertion into result*/

insert into results(id,users_id,is_correct,assessments_questions_id,user_answer)values(101,1,0,1,'mr.m.singh');

insert into results(id,users_id,is_correct,assessments_questions_id,user_answer)values(102,1,0,2,'mr.a.chavan');

insert into results(id,users_id,is_correct,assessments_questions_id,user_answer)values(103,1,1,3,'delhi');

insert into results(id,users_id,is_correct,assessments_questions_id,user_answer)values(104,2,1,1,'mr.narendra modi');

insert into results(id,users_id,is_correct,assessments_questions_id,user_answer)values(105,2,1,2,'mr.p.chavan');

insert into results(id,users_id,is_correct,assessments_questions_id,user_answer)values(106,2,1,3,'delhi');

insert into results(id,users_id,is_correct,assessments_questions_id,user_answer)values(107,3,1,4,'56');

insert into results(id,users_id,is_correct,assessments_questions_id,user_answer)values(108,3,0,5,'125');

insert into results(id,users_id,is_correct,assessments_questions_id,user_answer)values(109,4,0,4,'66');

insert into results(id,users_id,is_correct,assessments_questions_id,user_answer)values(110,4,0,5,'125');

/*create view to store score*/

 create view user_score as 
( select users.user_name,sum(questions.marks) 
from users,results,assessments_questions,questions
where results.user_id=users.id and results.assessments_questions_id=assessments_questions.id and 			assessments_questions.questions_id=questions.id and results.is_correct=1 
group by results.user_id);


/*create pivot table */
/*its not done correctle we will do it better*/
/*its printing all the question*/
set @sql = NULL;
select group_concat(quote(questions.question))into @sql from questions;
set @sql = concat('select users.id,users.name',@sql,'from users group by users.id');
prepare stmt from @sql;

/**/

set @sql=null;
select group_concat(quote(results.assessments_questions_id),quote(results.user_answer))into @sql from results;
set @sql=concat('select results.user_id,',@sql,'from results group by user_id');
prepare stmt from @sql;
 execute stmt;

/*gives error with quote marks*/

set @sql=null;
select group_concat(concat('results.assessments_questions_id,results.user_answer'))into @sql from results;
set @sql=concat('select results.user_id,',@sql,'from results');
prepare stmt from @ sql;
















