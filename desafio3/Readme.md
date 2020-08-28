<h1 align="center">
    <img width="120" height="40" src="https://github.com/trainningjava/Maratona-Full-Cycle-4.0/blob/master/public/assets/images/grupo_4378.png?raw=true">
</h1>

<img src="https://github.com/trainningjava/Maratona-Full-Cycle-4.0/blob/master/public/assets/images/nestjs.png?raw=true" alt="Nest.js" width="50" height="50">
<h1>Trabalhando com Nest.js</h1>
<br />

## Informações do desafio

Neste desafio terceiro você deverá criar uma API Rest com o Nest.js.

Devemos criar um recurso de categorias com a URI categories com dois endpoints:

- GET categories -> Consulta de categorias
- POST categories -> Criação de categorias

A aplicação terá um banco de dados SQLite para armazenar os dados, este banco ficará na raiz do projeto 
e usará o TypeORM para persistência dos dados.

O banco SQLite deverá estar no controle de versão da aplicação e deverá ter 10 categorias cadastradas.

Utilize o TypeORM, que é uma biblioteca Node.js para administrar a persitência de dados em banco de 
dados através do conceito de ORM (Object Relation Mapper).

A aplicação deverá rodar com Docker.

Dica: Veja a aula abaixo sobre API Rest Nest.js para saber como configurar o Nest.js com Docker e 
usar o TypeORM com banco de dados. Há um repositório Git na descrição do vídeo com um exemplo de 
API Rest com Nest.js usando Docker e TypeORM.
https://www.youtube.com/watch?v=BT7novtdAgI

Não use docker-compose nesta aplicação, deveremos ter apenas um Dockerfile na raiz do projeto 
expondo a porta 3000, que é a porta que o servidor do Nest.js para rodar a aplicação web.

Faça o docker build da aplicação para gerar sua imagem, suba-a no Docker Hub e compartilhe 
o endereço da imagem logo abaixo.

## Técnologias usadas:

* Nestjs
* TypeORM
* Docker
* Swagger 

<h2 align="center"> 📷 Screenshot </h2>

<p align="center">
<img width="600" src="https://github.com/trainningjava/Maratona-Full-Cycle-4.0/blob/master/public/assets/images/resultado/desafio3api.gif?raw=true">
</p>

<p align="center">
<img width="600" src="https://github.com/trainningjava/Maratona-Full-Cycle-4.0/blob/master/public/assets/images/resultado/desafio3.gif?raw=true">
</p>

