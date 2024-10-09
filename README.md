
# <img width="70" alt="angular" src="https://upload.wikimedia.org/wikipedia/commons/f/f7/Angular_gradient.png"> Lista de Compras

Este é um projeto de uma lista de compras desenvolvido com Angular e Angular Material. O objetivo deste projeto é demonstrar o uso de Angular para criação de uma aplicação com uma interface moderna e simples utilizando o Angular Material.

![Captura de Tela 2024-10-08 às 19 18 41](https://github.com/user-attachments/assets/1d045c05-a608-4159-aa99-292a3186b111)
## Pré-requisitos

Antes de começar, você precisará ter o [Node.js](https://nodejs.org/en/download/) e o Angular CLI instalados no seu sistema.

### Instalando Angular CLI

```bash
npm install -g @angular/cli
```

## Criação do Projeto

Para criar o projeto **lista-compras**, execute o seguinte comando no terminal:

```bash
ng new lista-compras --style=css
```

Durante a criação do projeto, o Angular CLI perguntará se você deseja habilitar SSR (Server-Side Rendering) e SSG (Static Site Generation). Responda com **Y** (Yes).

## Acessar a Pasta do Projeto

Depois que o projeto for criado, entre na pasta do projeto:

```bash
cd lista-compras
```

## Inclusão do Angular Material

Para adicionar o Angular Material ao projeto, execute o comando abaixo:

```bash
ng add @angular/material
```

O CLI perguntará sobre o compartilhamento de dados com a equipe do Angular. Você pode recusar respondendo com **N** (No).

Em seguida, será solicitado que você escolha um tema pré-construído para o Angular Material. Selecione o tema que preferir. Neste exemplo, selecionamos o **Indigo/Pink**.

```bash
? Choose a prebuilt theme name, or "custom" for a custom theme: (Use arrow keys)
❯ Indigo/Pink        [ Preview: https://material.angular.io?theme=indigo-pink ] 
```

### Configurações Adicionais

Você também será perguntado sobre configurar estilos de tipografia globais e incluir o módulo de animações do Angular. Confirme ambas as opções:

```bash
? Set up global Angular Material typography styles? Yes
? Include the Angular animations module? Include and enable animations
```

## Configuração do Angular Material

1. No arquivo `src/app/app.config.ts`, adicione as importações necessárias para configurar o Angular Material no projeto.

2. No arquivo `src/app/app.component.ts`, configure o componente principal para gerenciar a lógica da lista de compras. Inicialmente, alguns itens já estarão incluídos na lista por padrão.

## Estrutura HTML

No arquivo `src/app/app.component.html`, adicione a estrutura da lista de compras. O campo de entrada será validado para impedir a adição de itens vazios, utilizando a propriedade `required` no formulário e `disabled` no botão de adicionar.

## Rodando o Projeto

Para executar o projeto, utilize o seguinte comando:

```bash
ng serve
```



O projeto estará disponível em [http://localhost:4200](http://localhost:4200).

---

  <img width="150" alt="EmojiComputador" src="https://user-images.githubusercontent.com/31116694/153991716-0a1a946b-a077-4659-b4ac-ca9f7c65f9d2.PNG">

Projeto desenvolvido com [Angular](https://angular.io/) e [Angular Material](https://material.angular.io/).
