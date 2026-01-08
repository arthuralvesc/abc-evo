import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegisterFormComponent } from './register-form.component';
import { ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

describe('RegisterFormComponent', () => {
  let component: RegisterFormComponent;
  let fixture: ComponentFixture<RegisterFormComponent>;
  let routerSpy: jasmine.SpyObj<Router>;

  beforeEach(async () => {
    const spy = jasmine.createSpyObj('Router', ['navigate']);

    await TestBed.configureTestingModule({
      imports: [ 
        RegisterFormComponent,
        ReactiveFormsModule,
        CommonModule 
      ],
      providers: [
        FormBuilder,
        { provide: Router, useValue: spy }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(RegisterFormComponent);
    component = fixture.componentInstance;
    routerSpy = TestBed.inject(Router) as jasmine.SpyObj<Router>;
    fixture.detectChanges();
  });

  it('deve criar o componente e inicializar o formulário', () => {
    expect(component).toBeTruthy();
    expect(component.registerForm).toBeDefined();
    expect(component.registerForm.contains('name')).toBeTrue();
    expect(component.registerForm.contains('email')).toBeTrue();
    expect(component.registerForm.contains('password')).toBeTrue();
  });

  it('deve invalidar o formulário se estiver vazio', () => {
    expect(component.registerForm.valid).toBeFalse();
  });

  it('deve mostrar um alerta se tentar salvar com formulário inválido', () => {
    spyOn(window, 'alert');
    
    (component as any).salvar(); 

    expect(window.alert).toHaveBeenCalledWith("O formulário não foi preenchido corretamente!");
    expect(routerSpy.navigate).not.toHaveBeenCalled();
  });

  it('deve validar o tamanho mínimo da senha', () => {
    const passwordControl = component.registerForm.get('password');
    passwordControl?.setValue('123');
    expect(passwordControl?.valid).toBeFalse();
    expect(passwordControl?.errors?.['minlength']).toBeTruthy();
    
    passwordControl?.setValue('12345678');
    expect(passwordControl?.valid).toBeTrue();
  });

  it('deve salvar no localStorage e navegar quando o formulário for válido', () => {
    spyOn(localStorage, 'setItem');
    
    component.registerForm.setValue({
      name: 'Teste',
      email: 'teste@teste.com',
      password: 'teste123'
    });

    (component as any).salvar();

    expect(localStorage.setItem).toHaveBeenCalledWith('name', 'Teste');
    expect(localStorage.setItem).toHaveBeenCalledWith('email', 'teste@teste.com');
    expect(routerSpy.navigate).toHaveBeenCalledWith(['home']);
  });
});