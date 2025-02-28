import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let compiled: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterModule.forRoot([])
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    compiled = fixture.nativeElement as HTMLElement;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render add task button', () => {
    expect(compiled.querySelector('button.add_button')?.textContent).toContain('Agregar tarea');
  });

  it('add task button goes to add task page', () => {
    spyOn(component, 'openTask');
    let button: HTMLAnchorElement | null = compiled.querySelector('button.add_button');

    button?.click();
    expect(component.openTask).toHaveBeenCalledTimes(1);
  });
});
