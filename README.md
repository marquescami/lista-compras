
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
```bash
import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { AppComponent } from './app.component';
import { importProvidersFrom } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter([]),
    provideHttpClient(),
    importProvidersFrom(
      BrowserAnimationsModule,
      MatInputModule,
      MatButtonModule,
      MatIconModule,
      MatListModule,
      MatCardModule,
      MatCheckboxModule,
      FormsModule,
      ReactiveFormsModule
    ),
  ],
};
```


2. No arquivo `src/app/app.component.ts`, configure o componente principal para gerenciar a lógica da lista de compras. Inicialmente, alguns itens já estarão incluídos na lista por padrão.
```bash
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { NgIf, NgFor } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CommonModule } from '@angular/common';

interface Item {
  nome: string;
  comprado: boolean;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NgIf,
    NgFor,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatCheckboxModule,
    MatToolbarModule,
    CommonModule
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  newItem: string = '';
  items: Item[] = [
    { nome: 'Leite', comprado: false },
    { nome: 'Pão', comprado: false },
    { nome: 'Ovos', comprado: true },
    { nome: 'Queijo', comprado: false },
    { nome: 'Café', comprado: true }
  ];

  addItem() {
    if (this.newItem.trim()) {
      this.items.push({ nome: this.newItem, comprado: false });
      this.newItem = '';
    }
  }

  deleteItem(item: Item) {
    const index = this.items.indexOf(item);
    if (index > -1) {
      this.items.splice(index, 1);
    }
  }

  obterItensNaoComprados(): Item[] {
    return this.items.filter(item => !item.comprado);
  }

  obterItensComprados(): Item[] {
    return this.items.filter(item => item.comprado);
  }

  editItem(item: any): void {
    const editedName = prompt('Edite o nome do item:', item.nome);
    if (editedName !== null && editedName.trim() !== '') {
      item.nome = editedName.trim();
    }
  }

}
```
## Estrutura HTML

No arquivo `src/app/app.component.html`, adicione a estrutura da lista de compras. O campo de entrada será validado para impedir a adição de itens vazios, utilizando a propriedade `required` no formulário e `disabled` no botão de adicionar.

```bash
<mat-toolbar>
  <span>Lista de Compras</span>
</mat-toolbar>
<div class="container" fxLayout="column" fxLayoutAlign="center stretch">
  <mat-form-field appearance="fill" class="form-field-responsive">
    <mat-label>Adicionar um novo item</mat-label>
    <input matInput [(ngModel)]="newItem" placeholder="Digite um novo item" />
  </mat-form-field>
  <button mat-raised-button (click)="addItem()" [disabled]="!newItem" class="button-add">
    Adicionar
  </button>
  <div class="list-section-not-purchased">
    <h4>Itens não comprados</h4>
    <mat-list>
      <mat-list-item *ngFor="let item of obterItensNaoComprados()" class="item-row-not-purchased">
        <div class="item-content">
          <mat-checkbox [(ngModel)]="item.comprado" class="green-checkbox"></mat-checkbox>
          <span class="item-name">{{ item.nome }}</span>
          <button mat-icon-button color="primary" (click)="editItem(item)" class="edit-button">
            <mat-icon>edit</mat-icon>
          </button>
          <button mat-icon-button color="warn" (click)="deleteItem(item)" class="delete-button">
            <mat-icon>delete</mat-icon>
          </button>
        </div>
      </mat-list-item>
    </mat-list>
  </div>
  <div class="list-section-done-purchased">
    <h4>Itens comprados</h4>
    <mat-list>
      <mat-list-item *ngFor="let item of obterItensComprados()" class="item-row" [ngClass]="{'completed': item.comprado}">
        <div class="item-content">
          <mat-checkbox [(ngModel)]="item.comprado" class="green-checkbox"></mat-checkbox>
          <span class="item-name">{{ item.nome }}</span>
          <button mat-icon-button color="primary" (click)="editItem(item)" class="edit-button">
            <mat-icon>edit</mat-icon>
          </button>
          <button mat-icon-button color="warn" (click)="deleteItem(item)" class="delete-button">
            <mat-icon>delete</mat-icon>
          </button>
        </div>
      </mat-list-item>
    </mat-list>
  </div>
</div>

```
## Estrutura CSS
No `src/app/app.component.css`, inclua os estilos do projeto:

```bash
.container {
  max-width: 600px;
  margin: 0 auto;
  padding: 16px;
  flex-grow: 1;
  box-sizing: border-box;
  min-height: calc(100vh - 64px);
  display: flex;
  flex-direction: column;
}

mat-toolbar {
  margin-bottom: 16px;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}

.edit-button {
  margin-left: 8px;
  color: rgb(72, 63, 63);
}

h4, mat-raised-button, mat-form-field, input, button-add {
  font-size: 18px;
  padding: 10px;
  font-weight: bold;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}

.mat-form-field, .button-add {
  width: 60%;
  margin: 0 auto;
  margin-top: 16px;
}

.list-section-done-purchased {
  margin-top: 16px;
  background-color: #9fc576;
}

.list-section-not-purchased {
  margin-top: 16px;
  background-color: #ec6d6d;
}

.item-row, .item-row-not-purchased {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 4px auto;
  padding: 10px;
  border-radius: 4px;
  width: 60%;
}

.item-content {
  display: flex;
  align-items: center;
  flex-grow: 1;
}

.delete-button {
  margin-left: 8px;
}

.item-name {
  flex-grow: 1;
  padding-left: 8px;
}

.item-row {
  background-color: #aed984;
}

.item-row-not-purchased {
  background-color: #d09c9c;
}

.completed {
  text-decoration: line-through;
  color: rgb(0, 0, 0);
}

.mat-icon {
  margin-left: auto;
}

@media (max-width: 600px) {
  .container {
    padding: 8px;
  }

  .mat-form-field, .button-add {
    width: 100%;
  }
}
```

## Rodando o Projeto

Para executar o projeto, utilize o seguinte comando:

```bash
ng serve
```



O projeto estará disponível em [http://localhost:4200](http://localhost:4200).

---

  <img width="150" alt="EmojiComputador" src="https://user-images.githubusercontent.com/31116694/153991716-0a1a946b-a077-4659-b4ac-ca9f7c65f9d2.PNG">

Projeto desenvolvido com [Angular](https://angular.io/) e [Angular Material](https://material.angular.io/).
