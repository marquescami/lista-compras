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
