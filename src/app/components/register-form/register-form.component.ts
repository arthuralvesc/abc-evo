import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './register-form.component.html',
  styleUrl: './register-form.component.css'
})
export class RegisterFormComponent {
  registerForm!: FormGroup;


  constructor(private formBuilder: FormBuilder){
    this.registerForm = this.formBuilder.group ({
      name: ["", [Validators.required]],
      email: ["", [Validators.required, Validators.email]],
      password: ["",[Validators.required, Validators.minLength(8)]]
    })
  }

  protected salvar(){
    if (this.registerForm.invalid) return;
    
    const { name, email } = this.registerForm.getRawValue();
    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
  }
}