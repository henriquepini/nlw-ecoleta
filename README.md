<h1 align="center">:rocket:Ecoleta - Next Level Week #1</h1>

<p align="center">
  <a href="https://www.codacy.com/manual/henriquepini/nlw-ecoleta?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=henriquepini/nlw-ecoleta&amp;utm_campaign=Badge_Grade"><img src="https://app.codacy.com/project/badge/Grade/cc9811b1cd1f4bc3a3cc3d8b37d24103"/></a>
  <img src="https://img.shields.io/github/languages/count/henriquepini/nlw-ecoleta?color=blueviolet" />
  <a href="https://www.linkedin.com/in/henriquepini/">
    <img src="https://img.shields.io/badge/Made%20by-Henrique%20Pini-blueviolet" />
  </a>
  <img src="https://img.shields.io/github/repo-size/henriquepini/nlw-ecoleta?color=blueviolet" />
  <img src="https://img.shields.io/github/license/henriquepini/nlw-ecoleta?color=blueviolet" />
  <img src="https://img.shields.io/github/followers/henriquepini?label=Follow&style=social" />
  <img src="https://img.shields.io/github/stars/henriquepini/nlw-ecoleta?style=social" />
</p>

<img src="https://user-images.githubusercontent.com/11811935/84075755-0ebd2500-a9ab-11ea-93b9-a06b2a6863d5.png" />

## :information_source: Sobre o projeto

Este é um projeto da Rocketseat, voltado ao meio ambiente. Através dele, é possível ver em sua região, onde existem pontos de coleta de resíduos cadastrados.

## :warning: Pré requisitos gerais

-   [Node.js](https://nodejs.org/pt-br/)
-   [TypeScript](https://www.typescriptlang.org/)
-   [React](https://pt-br.reactjs.org/)
-   [React Native](https://reactnative.dev/)
-   [Expo](https://expo.io)

## :unlock: Como usar

### Faça o clone do projeto

    $ git clone https://github.com/henriquepini/nlw-ecoleta.git
    $ cd nlw-ecoleta

### Instale as dependências de cada parte do app

No seu prompt de comando:

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

# Inicie o servidor
$ npm run dev:server

# rodando na porta 3333
```

#### Se tiver colisão, mude o arquivo [server.ts][server] para alterar a porta

### :computer: Front-end

```bash
# Entre na pasta
$ cd ..
$ cd web

# Instale as dependências
$ npm install

# Inicie
$ npm start

# rodando na porta 3000
```

### :iphone: Mobile

#### :warning: Avisos para o mobile :warning:

-   É preciso ter o Expo instalado em seu dispositivo, ou emulador.
-   Entre no arquivo [api.ts][api] e altere a baseURL

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

## :pray: Agradecimentos

Agreço à equipe da [Rocketseat][rocket] por todo o apoio durante o projeto, e por todos a comunidade envolvida nessa semana !

## :memo: Licença

Este projeto está sob a licença MIT. Veja [LICENSE](https://github.com/henrique/nlw-ecoleta/blob/master/LICENSE) para mais detalhes.

Feito com :purple_heart: por Henrique Pini 👋 [Entre em contato !](https://www.linkedin.com/in/henriquepini/)

[api]: https://github.com/henriquepini/nlw-ecoleta/blob/master/mobile/src/services/api.ts

[server]: https://github.com/henriquepini/nlw-ecoleta/blob/master/server/src/server.ts

[rocket]: https://rocketseat.com.br/
