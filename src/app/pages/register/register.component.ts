import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { TitleComponent } from '../../components/title/title.component';
import { RegisterFormComponent } from '../../components/register-form/register-form.component';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [HeaderComponent, TitleComponent, RegisterFormComponent],
  styleUrl: './register.component.css'
})
export class RegisterComponent {

}
