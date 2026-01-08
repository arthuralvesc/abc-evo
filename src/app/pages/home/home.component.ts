import { Component } from '@angular/core';
import { TitleComponent } from '../../components/title/title.component';
import { InformationListComponent } from '../../components/information-list/information-list.component';
import { HeaderComponent } from '../../components/header/header.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [TitleComponent, InformationListComponent, HeaderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
