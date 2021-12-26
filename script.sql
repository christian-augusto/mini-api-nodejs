-- drops
drop database university;

-- schema
create database university;

create sequence students_id_seq start 1;

create table students (
  id bigint not null,
  name varchar(255) not null,
  birth_date date not null,
  cpf varchar(14) not null
);


alter table students add constraint pk_students primary key (id);
alter table students alter column id set default nextval('students_id_seq');

insert into students (name, birth_date, cpf) values ('Silvana Yasmin Carolina Gomes', '1966-02-12', '525.998.090-53');
