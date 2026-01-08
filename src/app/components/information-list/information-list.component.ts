import { Component, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-information-list',
  standalone: true,
  imports: [],
  templateUrl: './information-list.component.html',
  styleUrl: './information-list.component.css'
})
export class InformationListComponent implements OnDestroy {
  cadastro!: any;

  constructor() {
    this.cadastro = {
      nome: localStorage.getItem('name'),
      email: localStorage.getItem('email')
    }
  }

  ngOnDestroy() {
    localStorage.clear();
  }
}
