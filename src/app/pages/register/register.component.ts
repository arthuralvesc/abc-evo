import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { TitleComponent } from '../../components/title/title.component';
import { RegisterFormComponent } from '../../components/register-form/register-form.component';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [HeaderComponent, TitleComponent, RegisterFormComponent], // Como são poucos componentes, resolvi não criar um módulo Shared
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

}
