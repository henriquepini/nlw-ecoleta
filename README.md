<h1 align="center">Ecoleta - Next Level Week #1</h1>

<p align="center">
  <img src="https://img.shields.io/github/languages/count/henriquepini/nlw-ecoleta?color=blueviolet" />
<p/>

<img src="https://user-images.githubusercontent.com/11811935/84075755-0ebd2500-a9ab-11ea-93b9-a06b2a6863d5.png" />

## :information_source: Sobre o projeto:
Este é um projeto da Rocketseat, voltado ao meio ambiente. Através dele, é possível ver em sua região, onde existem pontos de coleta de resíduos cadastrados.

## :warning: Pré requisitos gerais

- [Node.js][nodejs]
- [TypeScript][typescript]
- [React][reactjs]
- [React Native][rn]
- [Expo][expo] 

## :unlock: How-to
#### Faça o clone do projeto:

```
$ git clone https://github.com/henriquepini/nlw-ecoleta.git
$ cd nlw-ecoleta
```
<h2> Instale as dependências de cada parte do app:</h2>

<h3>:gear: Back-end</h3>

Instalando as dependências:

```
$ cd server
$ npm install
```

Configurando o banco de dados:

- Migration
```
$ npm run knex:migrate
```
- Seed
```
$ npm run knex:seed
```

Iniciando o servidor:

```
$ npm run dev:server
```

<h3>:computer: Front-end</h3>

Instalando as dependências:

```
$ cd web
$ npm install
```
Iniciando a aplicação:

```
$ npm start
```

<h3>:iphone: Mobile </h3>

Instalando as dependências:

```
$ cd mobile
$ npm install
```
Iniciando a aplicação:

```
$ npm start
```
