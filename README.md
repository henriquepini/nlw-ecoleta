<h1 align="center">Ecoleta - Next Level Week #1</h1>

<p align="center">
  <img src="https://img.shields.io/github/languages/count/henriquepini/nlw-ecoleta?color=blueviolet" />
  <img src="https://img.shields.io/github/languages/count/henriquepini/nlw-ecoleta?color=blueviolet" />
  <img src="https://img.shields.io/github/languages/count/henriquepini/nlw-ecoleta?color=blueviolet" />
  <img src="https://img.shields.io/github/repo-size/henriquepini/nlw-ecoleta?color=blueviolet" />
  <img src="https://img.shields.io/github/followers/henriquepini?label=Follow&style=social" />
<p/>

<img src="https://user-images.githubusercontent.com/11811935/84075755-0ebd2500-a9ab-11ea-93b9-a06b2a6863d5.png" />

## :information_source: Sobre o projeto:
Este é um projeto da Rocketseat, voltado ao meio ambiente. Através dele, é possível ver em sua região, onde existem pontos de coleta de resíduos cadastrados.

## :warning: Pré requisitos gerais

- [Node.js](https://nodejs.org/pt-br/)
- [TypeScript](https://www.typescriptlang.org/)
- [React](https://pt-br.reactjs.org/)
- [React Native](https://reactnative.dev/)
- [Expo](https://expo.io)

## :unlock: How-to
#### Faça o clone do projeto:

```
$ git clone https://github.com/henriquepini/nlw-ecoleta.git
$ cd nlw-ecoleta
```
<h2> Instale as dependências de cada parte do app:</h2>

From your command line:

### :gear: API 

```bash
# Entre na pasta
$ cd server

# Instale as dependências
$ npm install

# Rode os Migrates
$ npm run knex:migrate

# Rode os Seeds
$ npm run knex:seed

# Start server
$ npm run dev:server

# running by default on port 3333
# if port colision, change on server.ts (/src/server.ts)
```

### :computer: Front-end

```bash
# Entre na pasta
$ cd ..
$ cd web

# Instale as dependências
$ npm install

# Inicie
$ npm start

# running on port 3000
```

### :iphone: Mobile

:warning: É preciso ter o expo instalado em seu dispositivo, ou emulador :warning:

```bash
# Entre na pasta
$ cd ..
$ cd web

# Instale as dependências
$ npm install

# Inicie
$ npm start

# Expo vai abrir no navegador, só escanear o qrcore que aparece

# Se der algum erro com fonte, rode:
$ expo install expo-font @expo-google-fonts/ubuntu @expo-google-fonts/roboto --npm

```
