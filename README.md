# Coteminas

## O projeto foi feito com NodeJS, utilizando o NestJS como framework, no backend, no frontend foi utilizado ReactJS.

# Hospedagem

## O projeto está hospedado na Amazon AWS

## Frontend

<a href="http://ec2-18-231-107-221.sa-east-1.compute.amazonaws.com:3001" target="_blank">Frontend</a>

## Backend

<a href="http://ec2-18-231-107-221.sa-east-1.compute.amazonaws.com:3002" target="_blank">Backend</a>

## A estrutura foi feito com docker e docker-compose.

# Instruções

## Clonar o projeto

# Backend

## entrar na pasta backend

## criar a pasta dbdata dentro de .docker

## rodar o docker-compose up -d --build

## Entrar no bash com docker-compose exec app bash e rodar:

## npm install

## npm run typeorm migration:run

## Alimentar a tabela produtos dando um get em /products/seeds

# Frontend

## entrar na pasta frontend

## rodar o docker-compose up -d --build

# CRUD

## O projeto tem o CRUD, só não está disponível no frontend

## Listar
## GET /products

## Adicionar
## POST /products

## Editar
## PATCH /products/{ID}

## Buscar com ID
## GET /products/{ID}

## Delete
## DELETE /products/{ID}
