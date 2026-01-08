import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InformationListComponent } from './information-list.component';

describe('InformationListComponent', () => {
  let component: InformationListComponent;
  let fixture: ComponentFixture<InformationListComponent>;

  beforeEach(async () => {
    spyOn(localStorage, 'getItem').and.callFake((key: string) => {
      if (key === 'name') return 'Teste';
      if (key === 'email') return 'teste@teste.com';
      return null;
    });
    
    spyOn(localStorage, 'clear');

    await TestBed.configureTestingModule({
      imports: [ InformationListComponent ]
    }).compileComponents();

    fixture = TestBed.createComponent(InformationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('deve criar o componente', () => {
    expect(component).toBeTruthy();
  });

  it('deve inicializar "cadastro" com valores do localStorage no constructor', () => {
    expect(component.cadastro).toEqual({
      nome: 'Teste',
      email: 'teste@teste.com'
    });

    expect(localStorage.getItem).toHaveBeenCalledWith('name');
    expect(localStorage.getItem).toHaveBeenCalledWith('email');
  });

  it('deve chamar localStorage.clear() quando o componente for destruído', () => {
    component.ngOnDestroy();

    expect(localStorage.clear).toHaveBeenCalled();
  });
});
