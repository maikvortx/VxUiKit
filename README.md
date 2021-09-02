# VX UI Kit

> Projeto para desenvolvimento do UI Kit da Vórtx, desenvolvido em React. Sendo o início para podermos criar o nosso sistema de design e importarmos nos diversos projetos.

## Sumário

- [VX-UI-Kit](#VX-UI-Kit)
	- [Sumário](#Sumário)
	- [Arquitetura](#Arquitetura)
	- [Executando o projeto](#Executando-o-projeto)
	- [To Do](#To-Do)
    - [Importando componentes do UiKit](#importando-componentes-do-uikit)
    - [Como publicar uma nova versão do pacote de componentes?](#publicar-nova-versao)


## Arquitetura

A arquitetura utilizada é um influenciada por conceitos de Clean Architecture, DDD e BDD.

Utiliza o [React](https://reactjs.org/) como framework com [Material-UI](https://material-ui.com/) e [Styled-Components](https://styled-components.com/)

## Executando o projeto
1. Entre na pasta da aplicação
3. Abra um terminal e execute `npm i` para instalar os pacotes
4. Execute `npm start`
5. O browser irá abrir e carregar automaticamente em `http://localhost:3001`

## To Do

- [X] Cores
- [X] Ícones
- [X] Tipografia
- [X] Botões
- [X] Input
    - [X] Input Formulário
    - [X] Input Filtro - Droplist
    - [X] Input Filtro - Droplist com Checkbox
    - [X] Input Busca/Pesquisar
    - [X] Input Data e Range de Data
- [X] Cards
- [X] Modal
- [X] Checkboxes
- [X] Radio Button
- [X] Switch
- [X] Badges
- [X] Tooltips
- [X] Header
- [X] Abas
- [X] Tabela
- [X] Paginação
- [X] Alertas / Toast notification
- [X] Ilustração
- [X] Protótipos

git push -u origin main

## Como publicar uma nova versão do pacote de componentes?

Para publicar uma nova versão do pacote dos compoentes, altere a campo `version` no package.js aumentando uma versão conforme suas alterações. Importante seguir o padrão de semantic release para a publicação das versões do projeto. Após a alteração da versão execute os comandos abaixo:

```
npm run compile
npm publish
```