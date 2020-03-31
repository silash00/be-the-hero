
# Be The Hero

A **Semana OmniStack** é um workshop online produzido pela Rocketseat. Esta é a versão 11, onde o  [Diego Fernandes](https://github.com/diego3g)  nos ensina a desenvolver uma aplicação desde o backend até o frontend (web e mobile) com uma única linguagem, o Javascript. 

O nome da aplicação desenvolvida é Be The Hero, uma aplicação para cadastro de ONGs e casos cadastrados por elas para que outras pessoas possam ajudar a resolvê-los.

Para clonar o repositório, execute o seguinte comando no terminal:

`git clone https://github.com/silash00/be-the-hero.git`

# Instalação

## Pré-Requisitos

`Git, Yarn, NodeJS, Express, Knex, SQLite, React, React-Native, Expo`

Clone o repositório, utilizando git clone ou faça o download do repositório.


Para iniciar o  **Backend**  da aplicação utilize os comandos:

```
cd backend
yarn install
yarn start
```

Para iniciar o  **Frontend**  utilize os comandos:

```
cd frontend
yarn install
yarn start
```

Assim que o processo terminar, automaticamente será aberta no seu navegador a página  `localhost:3000`  contendo o projeto.


Para testar o  **Mobile**  do React Native, primeiro coloque o endereço do seu servidor (ou computador) no arquivo [src/services/api.js](https://github.com/silash00/be-the-hero/blob/master/mobile/src/services/api.js), e depois execute os comandos:

```
# NÃO é preciso executar a linha de baixo caso ja tenha o Expo (CLI) instalado!
yarn global add install expo-cli
cd mobile
yarn install
expo start
```

Assim que o processo terminar, automaticamente será aberta no seu navegador a página  `localhost:19002`. Conecte seu emulador, ou teste o aplicativo por  `LAN`: baixe o aplicativo  _Expo_  da Play Store ou App Store e em seguida escaneie o código QR. (Se não for por lan, tente por tunnel, espere aparecer no Metro Blunder(informações do Expo sobre o app) a mensagem  _Tunnel Ready_  então clique em tunnel e escaneie o código QR.

# Projeto
![MockUp da Aplicação](https://github.com/silash00/be-the-hero/blob/master/frontend/BeTheHero_Mockup.png?raw=true)

# Back-End

Estruturamos um banco de dados relacional (SQLite) utilizando o [Knex.JS](http://github.com/knex/knex).
Além disso, durante a semana utilizamos o [Insomnia](https://insomnia.rest/) para acessar as rotas e executar os testes.

As rotas para acessar a API estão no arquivo  [routes.js](https://github.com/silash00/be-the-hero/blob/master/backend/src/routes.js). 

Além disso, no final da semana tivemos uma breve noção sobre testes utilizando o [Jest](https://jestjs.io/). Configuramos dois testes, um unitário - testando o gerador de ID's; e um teste de integração - o qual testa a rota de criação de ONG e válida o retorno. Para executar esse testa basta usar os comandos abaixo:
```
#OBS: O Jest está como uma dependência de desenvolvimento.

cd backend/
yarn add --dev jest
yarn test
```

# Front-End (Web e Mobile)

Nesta parte da aplicação, é possível entender diversos conceitos do ReactJS e do desenvolvimento web em geral.

Além disso, é muito importante entender como a página web normalmente se comunica com a API por meio de requisições http, as quais retornam ao frontend como um objeto json. Neste caso, foi utilizada a lib Axios para realizar a comunicação com a API.

Com isso, a página da aplicação Be The Hero se torna funcional. Nela, uma ONG poderá se cadastrar e cadastrar seus casos além de poder ajudar em casos de outras ONG's.

---

💻 **Versão Web**

![Navegação Web](https://github.com/silash00/be-the-hero/blob/master/frontend/Be%20The%20Hero.gif?raw=true)

📱 **Versão Mobile**

![Navegação Mobile](https://github.com/silash00/be-the-hero/blob/master/frontend/BeTheHero_MobileNavigation.gif?raw=true)


# Mobile
Desenvolvido com o framework React Native e com o Expo.