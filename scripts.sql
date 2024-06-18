create table permissoes (
id_permissao serial not null primary key,
nome varchar(50) not null,
permissoes varchar(20) not null);

create table usuarios (
id_usuario serial not null primary key,
nome varchar(50) not null,
email varchar(20) not null,
senha varchar(50) not null,
id_permissao int not null,                
foreign key (id_permissao) references permissoes
);

create table categorias(
id_categoria serial not null primary key,
nome varchar(50) not null
);

create table streams (
id_stream serial not null primary key,
streamer_id int not null,
titulo varchar(50) not null,
descricao varchar(100) not null,
id_categoria int not null,
data_hora timestamp not null,
foreign key (streamer_id) references usuarios,
foreign key (id_categoria) references categorias);

create table videos (
id_video serial not null primary key,
id_stream int not null,
titulo varchar(50) not null,
video_url varchar(100) not null,
foreign key (id_stream) references streams);

create table inscricoes (
id_inscricao serial not null primary key,
id_usuario int not null,
streamer_id int not null,
data_inscricao timestamp not null,
data_desinscricao timestamp not null,
foreign key (id_usuario) references usuarios,
foreign key (streamer_id) references usuarios);

create table doacoes (
id_doacao serial not null primary key,
id_usuario int not null,
streamer_id int not null,
valor numeric(10,4) not null,
data_doacao timestamp not null,
foreign key (id_usuario) references usuarios,
foreign key (streamer_id) references usuarios);

create table chat (
id_chat serial not null primary key,
id_stream int not null,
id_usuario int not null,
mensagem varchar(250) not null,
data_chat timestamp not null,
foreign key (id_usuario) references usuarios,
foreign key (id_stream) references usuarios);



CRIAR UMA LINHA DE LIVE ATIVA%%%%


