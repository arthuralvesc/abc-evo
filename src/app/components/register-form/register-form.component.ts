import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-register-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, RouterModule],
  templateUrl: './register-form.component.html',
  styleUrl: './register-form.component.css'
})
export class RegisterFormComponent {
  registerForm!: FormGroup;


  constructor(private formBuilder: FormBuilder, private router: Router){
    this.registerForm = this.formBuilder.group ({
      name: ["", [Validators.required]],
      email: ["", [Validators.required, Validators.email]],
      password: ["",[Validators.required, Validators.minLength(8)]]
    })
  }

  protected salvar(){
    if (this.registerForm.invalid) {
      alert("O formulário não foi preenchido corretamente!");
      return;
    }

    this.persistirDadosDeCadastro();
    this.irParaInformacoes();
  }

  protected persistirDadosDeCadastro(){
    const { name, email } = this.registerForm.getRawValue();
    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
  }

  protected irParaInformacoes(){
    this.router.navigate(['home']);
  }
}