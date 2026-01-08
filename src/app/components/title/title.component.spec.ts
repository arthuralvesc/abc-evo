import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TitleComponent } from './title.component';

describe('TitleComponent', () => {
  let component: TitleComponent;
  let fixture: ComponentFixture<TitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ TitleComponent ]
    }).compileComponents();

    fixture = TestBed.createComponent(TitleComponent);
    component = fixture.componentInstance;
  });

  it('deve criar o componente', () => {
    expect(component).toBeTruthy();
  });

  it('deve definir titleText como "Cadastro" quando isTelaDeCadastro for true (valor padrão)', () => {
    fixture.detectChanges(); 
    
    expect(component.titleText).toBe('Cadastro');
  });

  it('deve definir titleText como "Informações" quando isTelaDeCadastro for false', () => {
    component.isTelaDeCadastro = false;
    
    fixture.detectChanges(); 
    
    expect(component.titleText).toBe('Informações');
  });

  it('deve exibir o texto correto no template HTML', () => {
    component.isTelaDeCadastro = true;
    fixture.detectChanges();
    
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.textContent).toContain('Cadastro');
  });
});