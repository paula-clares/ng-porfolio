import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddComponent } from './add.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TasksService } from '../../../services/tasks.service';

describe('AddComponent', () => {
  let component: AddComponent;
  let fixture: ComponentFixture<AddComponent>;
  let tasksService: TasksService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      declarations: [AddComponent],
      providers: [TasksService] /* Still works without this */
    })
      .compileComponents();

    tasksService = TestBed.inject(TasksService);
    fixture = TestBed.createComponent(AddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  /* Component was created */
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('submit fails: no task title', () => {
    spyOn(component, 'sendTaskTitle');
    let componentForm = component.form;
    componentForm.setValue({
      title: '',
      description: 'description'
    });
    let submitButton = fixture.debugElement.nativeElement.querySelector('button[type=submit]');

    expect(submitButton.disabled).toBe(true);
    expect(componentForm.valid).toEqual(false);

    expect(componentForm.get('title')?.errors?.['required']).toBeTrue();
    expect(componentForm.get('description')?.errors).toBeNull();
    expect(component.sendTaskTitle).not.toHaveBeenCalled();
  });

  it('submit fails: no task description', () => {
    spyOn(component, 'sendTaskTitle');
    let componentForm = component.form;
    componentForm.setValue({
      title: 'title',
      description: ''
    });
    let submitButton = fixture.debugElement.nativeElement.querySelector('button[type=submit]');

    expect(submitButton.disabled).toBe(true);
    expect(componentForm.valid).toEqual(false);

    expect(componentForm.get('title')?.errors).toBeNull();
    expect(componentForm.get('description')?.errors?.['required']).toBeTrue();
    expect(component.sendTaskTitle).not.toHaveBeenCalled();
  });

  it('submit success', () => {
    let tasksCount = tasksService.tasks.length;
    spyOn(tasksService, 'addTask').and.callThrough();
    let componentForm = component.form;
    componentForm.setValue({
      title: 'title',
      description: 'description'
    });

    expect(componentForm.valid).toEqual(true);

    spyOn(component, 'sendTaskTitle').and.callThrough();
    let submitButton: HTMLButtonElement = fixture.debugElement.nativeElement.querySelector('button[type=submit]');
    fixture.detectChanges();
    expect(submitButton.disabled).toBe(false);
    submitButton.click();

    expect(component.sendTaskTitle).toHaveBeenCalledTimes(1);

    /* Check newly created task is not completed and is correctly created */
    expect(tasksService.addTask).toHaveBeenCalledTimes(1);
    expect(tasksService.getTasks().length).toEqual(tasksCount + 1);
  });
});
