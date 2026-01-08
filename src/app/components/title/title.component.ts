import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-title',
  standalone: true,
  imports: [],
  templateUrl: './title.component.html',
  styleUrl: './title.component.css'
})
export class TitleComponent implements OnInit {
    @Input() isTelaDeCadastro: boolean = true;
    titleText: string = '';

    ngOnInit() {
      this.titleText = this.isTelaDeCadastro ? 'Cadastro' : 'Informações';
      console.log('titleText: ' , this.titleText, this.isTelaDeCadastro);
    }
}
