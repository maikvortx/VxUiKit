# VX UI Kit

> Projeto para desenvolvimento do UI Kit da Vórtx, desenvolvido em React. Sendo o início para podermos criar o nosso sistema de design e importarmos nos diversos projetos.

## Sumário

- [VX-UI-Kit](#VX-UI-Kit)
	- [Sumário](#Sumário)
	- [Arquitetura](#Arquitetura)
	- [Executando o projeto](#Executando-o-projeto)
	- [To Do](#To-Do)
    - [Importando componentes do UiKit](#importando-componentes-do-uikit)

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

## Importando os componente do UiKit

Para usar o uikit e aproveitar os componentes do nosso design system realize a instalação do pacote abaixo:

```
npm i @maikvortx/ui-kit
```

Após a instalação do pacote importe os componetnes que deseja usar em seu projeto:

```
import { Button, Input, DatePicker } from '@maikvortx/ui-kit'

<!-- Button -->
<Button color="primary" size="sm">Small</Button>

<!-- Input -->
<Input
    id="regular"
    labelText="Regular"
    inputProps={{
        placeholder: "Regular"
    }}
    formControlProps={{
        fullWidth: true
    }}
/>

<!-- DatePicker -->
<DatePicker
    id="regular"
    labelText="Regular"
    variant="outlined"
    inputProps={{
        placeholder: "Regular"
    }}
    formControlProps={{
        fullWidth: true
    }}
/>

```