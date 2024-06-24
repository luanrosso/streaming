/* Create tables */

create type permission_type as enum ('READ', 'CREATE', 'UPDATE', 'DELETE');

create table abilities (
	id serial not null primary key,
	"permission" permission_type not null
);

create table roles (
	id serial not null primary key,
	"name" varchar(100) not null,
	description varchar(150)
);

create table roles_abilities(
	role_id int not null,
	ability_id int not null,
	foreign key (role_id) references roles,
	foreign key (ability_id) references abilities,
	primary key(role_id, ability_id)
)

create table users(
	id serial not null primary key,
	"name" varchar(50) not null,
	email varchar(50) not null,
	"password" varchar(150) not null,
	role_id int not null,
	foreign key (role_id) references roles
)

create table subscribes(
	id serial not null primary key,
	date_subscribe timestamp not null,
	date_unsubscribe timestamp
)

create table users_subscribes (
    user_id int not null,
    streamer_id int not null,
    subscribe_id int not null,
    primary key (user_id, streamer_id, subscribe_id),
    foreign key (user_id) references users,
    foreign key (streamer_id) references users,
    foreign key (subscribe_id) references subscribes
);

create table categories(
	id serial not null primary key,
	"name" varchar(100) not null
)

create table streams(
	id serial not null primary key,
	title varchar(100) not null,
	description varchar(150) not null,
	date_open timestamp not null,
	user_id int not null,
	category_id int not null,
	foreign key (user_id) references users,
	foreign key (category_id) references categories
)

create table chats(
	id serial not null primary key,
	message varchar(150) not null,
	date_send timestamp not null,
	user_id int not null,
	stream_id int not null,
	foreign key (user_id) references users,
	foreign key (stream_id) references streams
)

create table donations(
	id serial not null primary key,
	value numeric(10,4) not null,
	date_send timestamp not null,
	user_id int not null,
	stream_id int not null,
	foreign key (user_id) references users,
	foreign key (stream_id) references streams
)

create table videos	(
	id serial not null primary key,
	title varchar(150) not null,
	url varchar(200) not null,
	stream_id int not null,
	foreign key (stream_id) references streams
)

/* Insert values */


insert into abilities("permission") values('READ');
insert into abilities("permission") values('CREATE');
insert into abilities("permission") values('UPDATE');
insert into abilities("permission") values('DELETE');

insert into roles("name", description) values('Steamer', 'Usuário com acesso total a live');
insert into roles("name", description) values('Moderador', 'Usuário com alguns a live');
insert into roles("name", description) values('Usuário', 'Usuário com acesso apenas para ver a live');

insert into roles_abilities(role_id, ability_id) values(1, 1); /* Permission READ */
insert into roles_abilities(role_id, ability_id) values(1, 2); /* Permission CREATE */
insert into roles_abilities(role_id, ability_id) values(1, 3); /* Permission UPDATE */
insert into roles_abilities(role_id, ability_id) values(1, 4); /* Permission DELETE */

insert into roles_abilities(role_id, ability_id) values(2, 1); /* Permission READ */
insert into roles_abilities(role_id, ability_id) values(2, 2); /* Permission CREATE */
insert into roles_abilities(role_id, ability_id) values(2, 3); /* Permission UPDATE */

insert into roles_abilities(role_id, ability_id) values(3, 1); /* Permission READ */

insert into users("name", email, "password", role_id) values('Luangameplay', 'luan@gmail.com', '123', 1);
insert into users("name", email, "password", role_id) values('Ademir', 'ademir@gmail.com', '123', 2);
insert into users("name", email, "password", role_id) values('Joao', 'joao@gmail.com', '123', 3);
insert into users("name", email, "password", role_id) values('Bia', 'bia@gmail.com', '123', 3);
insert into users("name", email, "password", role_id) values('Ana', 'ana@gmail.com', '123', 3);

insert into subscribes (date_subscribe, date_unsubscribe) values('2024-05-15 15:30:00.000', null);
insert into subscribes (date_subscribe, date_unsubscribe) values('2024-05-15 16:30:00.000', null);
insert into subscribes (date_subscribe, date_unsubscribe) values('2024-05-15 14:30:00.000', '2024-05-15 17:30:00.000');
insert into subscribes (date_subscribe, date_unsubscribe) values('2024-05-15 18:30:00.000', null);

insert into users_subscribes(user_id, streamer_id, subscribe_id) values(3, 1, 2);
insert into users_subscribes(user_id, streamer_id, subscribe_id) values(4, 1, 3);
insert into users_subscribes(user_id, streamer_id, subscribe_id) values(5, 1, 4);
insert into users_subscribes(user_id, streamer_id, subscribe_id) values(3, 1, 5);

insert into categories ("name") values('Jogos');
insert into categories ("name") values('React');
insert into categories ("name") values('Vendas');

insert into streams (title, description, date_open, user_id, category_id) values('Darksouls 3 Até Zerar', 'Zerando Darksouls 3', '2024-05-15 15:30:00.000', 1, 1);
insert into streams (title, description, date_open, user_id, category_id) values('Cuphead Até Morrer', 'Jogando Cuphead', '2024-05-15 15:30:00.000', 1, 1);
insert into streams (title, description, date_open, user_id, category_id) values('GtaRP', 'RolePlay Cidade Alta', '2024-05-15 15:30:00.000', 1, 1);
insert into streams (title, description, date_open, user_id, category_id) values('Minecrat 1.12.1', 'Nova Versão', '2024-05-15 15:30:00.000', 1, 1);
insert into streams (title, description, date_open, user_id, category_id) values('Reagindo a um copo de agua', 'Um cara reagindo a um copo com agua dentro', ' ', 1, 2);
insert into streams (title, description, date_open, user_id, category_id) values('Reagindo a um copo de agua PT 2', 'Um cara reagindo a um copo com agua dentro', '2024-05-15 15:30:00.000', 1, 2);
insert into streams (title, description, date_open, user_id, category_id) values('Reagindo a um copo de agua PT 3', 'Um cara reagindo a um copo com agua dentro', '2024-05-15 15:30:00.000', 1, 2);
insert into streams (title, description, date_open, user_id, category_id) values('Reagindo Memes', 'Memes quinta serie', '2024-05-15 15:30:00.000', 1, 2);
insert into streams (title, description, date_open, user_id, category_id) values('Leilão de Carros', 'Leilão de carros usados', '2024-05-15 17:30:00.000', 1, 3);
insert into streams (title, description, date_open, user_id, category_id) values('Vendas de peças de pc', 'Itens de pc usados', '2024-05-15 17:30:00.000', 1, 3);

insert into donations (value, date_send, user_id, stream_id) values(4.0, '2024-05-15 17:30:00.000', 3 , 1);
insert into donations (value, date_send, user_id, stream_id) values(5.0, '2024-05-15 17:30:00.000', 3 , 1);
insert into donations (value, date_send, user_id, stream_id) values(8.0, '2024-05-15 17:30:00.000', 4 , 2);
insert into donations (value, date_send, user_id, stream_id) values(2.5, '2024-05-15 17:30:00.000', 5 , 3);

insert into chats (message , date_send, user_id, stream_id) values('Cara passa mais tempo morto do que vivo', '2024-05-15 17:30:00.000', 3 , 1);
insert into chats (message , date_send, user_id, stream_id) values('Muito Ruim', '2024-05-15 17:30:00.000', 3 , 1);
insert into chats (message , date_send, user_id, stream_id) values('Mano acho que o copo se moveu', '2024-05-15 17:30:00.000', 4 , 2);
insert into chats (message , date_send, user_id, stream_id) values('Só retardado compra carro de leilão', '2024-05-15 17:30:00.000', 5 , 3);

insert into videos (title , url, stream_id) values('Pior jogador de Darksols 3', 'https://www.youtube.com', 1);
insert into videos (title , url, stream_id) values('O Copo', 'https://www.youtube.com', 2);
insert into videos (title , url, stream_id) values('O Copo Pt 2', 'https://www.youtube.com', 2);
insert into videos (title , url, stream_id) values('Leilão de Carros', 'https://www.youtube.com', 3);

/* Functions */

create or replace function fc_total_stream_donations(
	 param_id integer
)	
returns numeric 
language plpgsql as $$
declare
   total numeric ;
begin 
   SELECT sum(dt.value) into total
   FROM donations dt
   where dt.stream_id = param_id;
   RETURN total;
end;
$$;

select fc_total_stream_donations(1);

create or replace function fc_total_stream_videos(
	 param_id integer
)	
returns integer 
language plpgsql as $$
declare
   total integer ;
begin 
   SELECT count(*) into total
   FROM videos vi
   where vi.stream_id = param_id;
   RETURN total;
end;
$$;

select fc_total_stream_videos(2);

create or replace function fc_total_stream_chats(
	 param_id integer
)	
returns integer 
language plpgsql as $$
declare
   total integer ;
begin 
   SELECT count(*) into total
   FROM chats ch
   where ch.stream_id = param_id;
   RETURN total;
end;
$$;

select fc_total_stream_chats(1);

/* Views */

create view vw_streams_chats as
select st.title, st.description, st.date_open, ct."name" as category, ch.message, ch.date_send, us."name" as user
from streams st
inner join categories ct on ct.id = st.category_id
inner join chats ch on ch.stream_id = st.id
inner join users us on us.id = ch.user_id

select * from vw_streams_chats

create view vw_streams_donations as
select st.title, st.description, st.date_open, ct."name" as category, dt.value, dt.date_send, us."name" as user
from streams st
inner join categories ct on ct.id = st.category_id
inner join donations dt on dt.stream_id = st.id
inner join users us on us.id = dt.user_id

select * from vw_streams_donations 

create view vw_users_subcribes as
select es."name" as streamer, us."name" as user, su.date_subscribe , su.date_unsubscribe
from users_subscribes usb
inner join users us on us.id = usb.user_id
inner join users es on es.id = usb.streamer_id
inner join subscribes su on su.id = usb.subscribe_id

select * from vw_users_subcribes  

/* Indexs */

create unique index ix_abilities_permitions on abilities ("permission");
create unique index ix_categories_name on categories ("name");
create index ix_chats_message on chats (message);
create index ix_donations_date_send on donations (date_send);
create unique index ix_roles_name on roles ("name");
create unique index ix_roles_abilities_role_ability on roles_abilities (role_id, ability_id);
create index ix_streams_title_description on streams (title, description);
create index ix_subscribes_date_sub_date_unsub on subscribes (date_subscribe, date_unsubscribe);
create unique index ix_users_name_email on users ("name", email);
create unique index ix_users_subscribes_user_streamer_subscribe on users_subscribes (user_id, streamer_id, subscribe_id);
create unique index ix_videos_name_url on videos (title, url);


/* Questions */

/* Qual o valor total das doações de uma live?  */

create or replace function fc_total_stream_donations(
	 param_id integer
)	
returns numeric 
language plpgsql as $$
declare
   total numeric ;
begin 
   SELECT sum(dt.value) into total
   FROM donations dt
   where dt.stream_id = param_id;
   RETURN total;
end;
$$;

select fc_total_stream_donations(1);

/* Quais as permissoes de um usuário moderador?  */

select ro."name", ab."permission" 
from roles ro
inner join roles_abilities ra on ra.role_id = ro.id
inner join abilities ab on ab.id = ra.ability_id
where ro."name" = 'Moderador'

/* Quantos mensagens foram enviadas em uma live?  */

create or replace function fc_total_stream_chats(
	 param_id integer
)	
returns integer 
language plpgsql as $$
declare
   total integer ;
begin 
   SELECT count(*) into total
   FROM chats ch
   where ch.stream_id = param_id;
   RETURN total;
end;
$$;

select fc_total_stream_chats(1);

/* Quais são os inscritos de cada streamer?  */

create view vw_users_subcribes as
select es."name" as streamer, us."name" as user, su.date_subscribe , su.date_unsubscribe
from users_subscribes usb
inner join users us on us.id = usb.user_id
inner join users es on es.id = usb.streamer_id
inner join subscribes su on su.id = usb.subscribe_id

select * from vw_users_subcribes



