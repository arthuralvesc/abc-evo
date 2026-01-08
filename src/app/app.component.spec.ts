import { TestBed, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        AppComponent
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  });

  it('deve criar a aplicação', () => {
    expect(component).toBeTruthy();
  });

  it(`deve ter o título 'abc-evo'`, () => {
    expect(component.title).toEqual('abc-evo');
  });

  it('deve conter um router-outlet no template', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    

    expect(compiled.querySelector('router-outlet')).not.toBeNull();
  });
});